import{r as o,j as n}from"./main-BzFeX7ZU.js";import{c as i}from"./clsx-2Jv0kmJG.js";const l=Array.from({length:25},(s,a)=>a),d=()=>{const s=o.useRef(null);return o.useEffect(()=>{var t;const a=new IntersectionObserver(r=>{for(const e of r)e.intersectionRatio>0?e.target.classList.add("[&>div]:translate-x-0"):e.target.classList.remove("[&>div]:translate-x-0")});(t=s.current)==null||t.forEach(r=>{a.observe(r)})},[]),n.jsxs("div",{className:"bg-[#efedd7] overflow-auto",children:[n.jsx("h2",{className:"mt-3 text-center text-[28px]",children:"Scroll to see the animation"}),l.map((a,t)=>n.jsx("div",{className:"mt-3 mx-auto overflow-hidden",ref:r=>{let e=s.current;e||(s.current=new Map,e=s.current),r?e.set(t,r):e.delete(t)},children:n.jsx("div",{className:i(t%2===0?"translate-x-[400%]":"-translate-x-[400%]","w-[400px] h-[200px] my-0 mx-auto rounded-md bg-[#4f83b2] shadow-[2px_4px_5px_0_rgba(0,0,0,.3)] text-center font-bold text-[40px] leading-[200px] text-white transition-transform duration-[800ms] ease-linear"),children:"Content"})},a))]})};export{d as default};