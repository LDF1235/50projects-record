import{r,j as e}from"./main-BzFeX7ZU.js";import{c as a}from"./clsx-2Jv0kmJG.js";const G={Fly:"http://pngimg.com/uploads/fly/fly_PNG3946.png",Mosquito:"http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",Spider:"http://pngimg.com/uploads/spider/spider_PNG12.png",Roach:"http://pngimg.com/uploads/roach/roach_PNG12163.png"},_=()=>{const[m,u]=r.useState(!0),[f,c]=r.useState(!1),[p,g]=r.useState(!1),[w,b]=r.useState(0),[h,j]=r.useState(0),y=r.useRef(""),d=r.useRef(null),n=r.useRef(0);r.useEffect(()=>()=>{n.current&&clearInterval(n.current)},[]);const N=()=>{n.current=setInterval(()=>{b(t=>t+1)},1e3)},v=t=>{const s=Math.floor(t/60);return`${s.toString().padStart(2,"0")}:${(t-s*60).toString().padStart(2,"0")}`},i=t=>{const s=new Image,x=Math.random()*360;return Object.assign(s.style,{width:"100px",height:"100px",transform:`rotateZ(${x}deg) scale(1)`,position:"absolute",left:Math.random()*(window.innerWidth-100)+"px",top:Math.random()*(window.innerHeight-100)+"px",cursor:"pointer",transition:"transform .3s linear",userSelect:"none"}),s.src=G[t],s.onclick=function(){j(S=>S+1),setTimeout(()=>{l(i(t))},1e3),setTimeout(()=>{l(i(t))},1500),setTimeout(()=>{this.remove()},1e3),this.style.transform=`rotateZ(${x}deg) scale(0)`},s},l=t=>{const s=d.current;s&&s.appendChild(t)},o=t=>{y.current=t,N(),g(!0),c(!1),setTimeout(()=>{l(i(t))},400)};return e.jsxs("div",{ref:d,className:' relative h-full bg-[#5471fb] font-["Press_Start_2P",sans-serif] overflow-hidden',children:[e.jsxs("div",{className:a(h>19?"top-[160px] translate-y-0":"top-0 -translate-y-full","absolute transition-transform z-10 pointer-events-none duration-300 ease-linear left-0 w-full py-6 text-white bg-[rgba(0,0,0,.5)]"),children:[e.jsx("p",{className:"text-center",children:"Are you annoyed yet?"}),e.jsx("p",{className:"text-center",children:"You are playing an impossible game!!"})]}),e.jsxs("div",{className:a(m?"top-1/2 -translate-y-1/2":"top-0 -translate-y-full","absolute left-1/2  -translate-x-1/2  flex flex-col items-center transition-[top] duration-300 ease-linear"),children:[e.jsx("h2",{className:" text-[32px] text-white",children:"Catch The Insect"}),e.jsx("button",{onClick:()=>{u(!1),c(!0)},className:"text-[#5471fb] py-2 px-4  bg-white mt-4",children:"Paly Game"})]}),e.jsxs("div",{className:a(f?"top-1/2 -translate-y-1/2":p?"top-0 -translate-y-full":"top-full","absolute left-1/2 w-full flex flex-col items-center -translate-x-1/2 transition-[top] duration-300 ease-linear "),children:[e.jsx("h2",{className:" text-[32px] text-white",children:'What is your "favorite" insect?'}),e.jsxs("div",{className:"flex mt-6",children:[e.jsxs("div",{onClick:()=>{o("Fly")},className:"w-[150px] h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4",children:[e.jsx("p",{children:"Fly"}),e.jsx("img",{className:"w-[100px] h-[100px]",src:"http://pngimg.com/uploads/fly/fly_PNG3946.png",alt:"fly"})]}),e.jsxs("div",{onClick:()=>{o("Mosquito")},className:"w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4",children:[e.jsx("p",{children:"Mosquito"}),e.jsx("img",{className:"w-[100px] h-[100px]",src:"http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png",alt:"Mosquito"})]}),e.jsxs("div",{onClick:()=>{o("Spider")},className:"w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4",children:[e.jsx("p",{children:"Spider"}),e.jsx("img",{className:"w-[100px] h-[100px]",src:"http://pngimg.com/uploads/spider/spider_PNG12.png",alt:"Spider"})]}),e.jsxs("div",{onClick:()=>{o("Roach")},className:"w-[150px] ml-4 h-[150px] hover:bg-white cursor-pointer text-white hover:text-[#5471fb] border-2 border-solid border-white flex flex-col items-center justify-between pt-4",children:[e.jsx("p",{children:"Roach"}),e.jsx("img",{className:"w-[100px] h-[100px]",src:"http://pngimg.com/uploads/roach/roach_PNG12163.png",alt:"Roach"})]})]})]}),e.jsxs("div",{className:a(p?"top-4":"top-full","absolute w-full transition-[top] duration-300 ease-linear left-0 pt-6 px-6 flex justify-between text-white font-bold"),children:[e.jsxs("div",{children:[e.jsx("span",{children:"Time:"}),e.jsx("span",{className:"ml-4",children:v(w)})]}),e.jsxs("div",{children:[e.jsx("span",{children:"Score:"}),e.jsx("span",{className:"ml-4",children:h})]})]})]})};export{_ as default};