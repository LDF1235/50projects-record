import{r as s,j as t}from"./main-BdedSiPT.js";const u=()=>{const[x,p]=s.useState(""),[a,o]=s.useState(!1);s.useEffect(()=>{c()},[]);const c=()=>fetch("https://icanhazdadjoke.com",{headers:{accept:"application/json"}}).then(e=>e.json()).then(e=>{e.status===200&&p(e.joke)}),i=()=>{a||(o(!0),c().finally(()=>{o(!1)}))},l=e=>{const n=e.target;if(!(n instanceof HTMLElement))return;n.classList.add("scale-[.95]");const r=()=>{n.classList.remove("scale-[.95]"),document.removeEventListener("mouseup",r)};document.addEventListener("mouseup",r)};return t.jsx("div",{className:"min-h-full bg-[#686de0] flex justify-center items-center",children:t.jsxs("div",{className:"w-[800px] py-[50px] px-[20px] text-center bg-white rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)]",children:[t.jsx("p",{className:"opacity-[.5] text-[1.17em] tracking-[2px] font-bold",children:"Don't Laugh Challenge"}),t.jsx("p",{className:"max-w-[600px] mx-auto my-[50px] text-[30px] tracking-[1px] leading-[40px] text-center",children:x}),t.jsx("button",{onMouseDown:l,onClick:i,className:"mx-auto leading-none py-[14px] px-[40px] bg-[#9f68e0] text-white rounded-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1),0_6px_6px_rgba(0,0,0,0.1)]",children:a?"Get Another Joke...":"Get Another Joke"})]})})};export{u as default};
