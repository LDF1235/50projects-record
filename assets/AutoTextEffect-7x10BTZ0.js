import{r as e,j as t}from"./main-BzFeX7ZU.js";const i="We Love Programming!",x=()=>{const[r,c]=e.useState(1),[o,u]=e.useState(""),n=e.useRef(0),a=e.useRef(r);return a.current=r,e.useEffect(()=>{const s=()=>{u(i.slice(0,n.current)),n.current++,n.current>20&&(n.current=0),setTimeout(()=>{s()},300-(a.current-1)*50)};s()},[]),t.jsxs("div",{className:"min-h-full bg-[#E2957B] flex items-center justify-center relative",children:[t.jsx("p",{className:"font-bold text-[32px]",children:o}),t.jsxs("div",{className:"p-2 absolute bottom-4 left-[50%] translate-x-[-50%] bg-[#CB866E]",children:[t.jsx("span",{children:"Speed："}),t.jsx("input",{className:"w-[40px] bg-[#E2957B] text-center outline-none",min:1,max:5,onChange:s=>{c(parseInt(s.target.value))},value:r,type:"number"})]})]})};export{x as default};