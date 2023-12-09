import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const rows = Array.from({ length: 25 }, (_, i) => i);
const cols = Array.from({ length: 6 }, (_, i) => i);
const typeBgClassMap = {
  fire: 'bg-[#FDDFDF]',
  grass: 'bg-[#DEFDE0]',
  electric: 'bg-[#FCF7DE]',
  water: 'bg-[#DEF3FD]',
  ground: 'bg-[#f4e7da]',
  rock: 'bg-[#d5d5d4]',
  fairy: 'bg-[#fceaff]',
  poison: 'bg-[#98d7a5]',
  bug: 'bg-[#f8d5a3]',
  dragon: 'bg-[#97b3e6]',
  psychic: 'bg-[#eaeda1]',
  flying: 'bg-[#F5F5F5]',
  fighting: 'bg-[#E6E0D4]',
  normal: 'bg-[#F5F5F5]',
};
const requestQueue: (() => Promise<unknown>)[] = [];
const requestLimit = 6;
let runningRequestCount = 0;

const enqueueRequest = (fn: () => Promise<unknown>) => {
  if (runningRequestCount < requestLimit) {
    sendRequest(fn);
  } else {
    requestQueue.push(fn);
  }
};

const sendRequest = (fn: () => Promise<unknown>) => {
  runningRequestCount++;
  fn()
    .then(() => {
      runningRequestCount--;
      checkRequestQueue();
    })
    .catch(() => {
      runningRequestCount--;
      checkRequestQueue();
    });
};

const checkRequestQueue = () => {
  if (requestQueue.length > 0 && runningRequestCount < requestLimit) {
    sendRequest(requestQueue.shift()!);
  }
};

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState<
    ({
      name: string;
      type: string;
      coverUrl: string;
    } | null)[]
  >(() => new Array(150).fill(null));
  const cardsRef = useRef(new Array(150));

  const fetchPokemonInfo = (id: number) => {
    return fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      body: JSON.stringify({
        query: `query samplePokeAPIquery {
        pokemon_v2_pokemonsprites(where: {id: {_eq: ${id}}}) {
          pokemon_v2_pokemon {
            name
            pokemon_v2_pokemontypes {
              pokemon_v2_type {
                name
              }
            }
          }
          sprites
        }
      }`,
      }),
    }).then(res => {
      if (res.status === 200) return res.json();

      return Promise.reject();
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.intersectionRatio > 0) {
          const id = entry.target.getAttribute('data-pokemonid');

          if (id) {
            enqueueRequest(() => {
              const numericId = parseInt(id);
              return fetchPokemonInfo(numericId).then(res => {
                const { pokemon_v2_pokemon, sprites } = res.data.pokemon_v2_pokemonsprites[0];
                setPokemonList(prev => {
                  const nextState = [...prev];
                  nextState[numericId - 1] = {
                    name: pokemon_v2_pokemon.name,
                    type: pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
                    coverUrl: JSON.parse(sprites).front_default,
                  };
                  return nextState;
                });
              });
            });
            entry.target.removeAttribute('data-pokemonid');
            observer.unobserve(entry.target);
          }
        }
      }
    });

    cardsRef.current.forEach(x => {
      if (x) observer.observe(x);
    });
  }, []);

  return (
    <div className='min-h-full bg-[linear-gradient(to_right,#d4d3dd,#efefbb)]'>
      <h2 className='font-bold text-center text-[24px] py-4'>Pokedex</h2>

      {rows.map(r => (
        <div
          className={clsx('flex items-center gap-x-5 justify-center', r > 0 ? 'mt-5' : '')}
          key={`${r}`}
        >
          {cols.map(c => {
            const index = r * 6 + c;
            const pokemonInfo = pokemonList[index];

            return (
              <div
                key={c}
                className={clsx(
                  pokemonInfo ? typeBgClassMap[pokemonInfo.type as keyof typeof typeBgClassMap] : '',
                  ' p-5 rounded-lg shadow-[0_3px_15px_rgba(100,100,100,.5)]',
                )}
                ref={node => {
                  if (!node) return;

                  cardsRef.current[index] = node;
                }}
                data-pokemonid={index + 1}
              >
                <div className='w-[120px] h-[120px] rounded-full bg-[rgba(255,255,255,.6)] overflow-hidden'>
                  <img
                    src={pokemonInfo?.coverUrl}
                    className='w-full'
                  />
                </div>
                <div className='mt-5 flex flex-col items-center'>
                  <div className='text-[12px] bg-[rgba(0,0,0,.1)] rounded-md px-2 py-[2px]'>
                    #{(r * 6 + c + 1).toString().padStart(3, '0')}
                  </div>
                  <h3 className=' mt-4 text-[18px] font-bold text-center'>{pokemonInfo ? pokemonInfo!.name : '...'}</h3>
                  <p className='text-center text-[13px] mt-2'>
                    {pokemonInfo ? `Type:${pokemonInfo!.type}` : 'Type:...'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Pokedex;
