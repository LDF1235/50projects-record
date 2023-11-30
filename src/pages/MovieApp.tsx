import { useEffect, useState } from 'react';

interface MovieInfo {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

type RenderMovie = Pick<MovieInfo, 'id' | 'poster_path' | 'title' | 'overview' | 'vote_average'>;

const MovieApp = () => {
  const [movies, setMovies] = useState<RenderMovie[]>([]);
  const [searchText, setSearchText] = useState('');

  const fetchMovies = (query?: string) => {
    fetch(
      query
        ? `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${query}`
        : 'https://api.themoviedb.org/3/discover/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&sort_by=popularity.desc',
    )
      .then(res => res.json())
      .then(res => {
        setMovies(
          (res.results as MovieInfo[]).map<RenderMovie>(x => ({
            id: x.id,
            poster_path: `https://image.tmdb.org/t/p/w1280${x.poster_path}`,
            title: x.title,
            overview: x.overview,
            vote_average: x.vote_average,
          })),
        );
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    const query = searchText.trim();

    if (!query) return;

    fetchMovies(query);
    setSearchText('');
  };

  return (
    <div className='min-h-full bg-[#22264A]'>
      <nav className='p-4 text-right bg-[#373C68]'>
        <input
          placeholder='Search'
          className='w-[238px] px-4 py-2 text-white bg-[#373C68] border-[#22264A] border-[2px] border-solid outline-none rounded-full focus:bg-[#22264A] placeholder:text-[#597AC3]'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
          }}
          onKeyUp={handleSearchKeyDown}
        />
      </nav>

      <section className='p-4 flex flex-wrap gap-8'>
        {movies.map(x => (
          <div
            key={x.id}
            className='group relative bg-[#373C68] shadow-[0_4px_5px_rgba(0,0,0,0.2)] overflow-hidden'
          >
            <div className='mc-skeleton w-[300px] h-[450px]'>
              <img
                className='w-full'
                src={x.poster_path}
                onLoad={e => {
                  if (e.target instanceof HTMLImageElement) {
                    e.target.parentElement?.classList.remove('mc-skeleton');
                  }
                }}
                loading='lazy'
              />
            </div>

            <div className='px-4 pt-4 pb-5 flex justify-between w-[300px]'>
              <p className='font-bold text-white flex-1'>{x.title}</p>
              <div className='grow-0 shrink-0 self-start px-2 py-1 text-orange-300 font-bold bg-[#22264A]'>
                {x.vote_average}
              </div>
            </div>

            <div className='group-hover:-translate-y-[100%] translate-y-0 p-8 absolute top-[100%] left-0 max-h-full overflow-auto bg-white transition-transform duration-300 ease-linear'>
              <p className='font-bold mb-2 text-lg'>Overview</p>
              <p>{x.overview}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MovieApp;
