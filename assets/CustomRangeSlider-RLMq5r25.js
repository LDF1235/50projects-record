import{r as l,j as e}from"./main-BzFeX7ZU.js";const n=()=>{const[t,s]=l.useState("50");return e.jsxs("div",{className:"min-h-full bg-[#dee4ee] relative flex justify-center items-center",children:[e.jsx("h2",{className:"font-bold absolute w-full top-5 text-center text-[24px]",children:"Custom Range Slider"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"range",id:"custom-range",min:"0",max:"100",step:"1",className:"mc-custom-slider",value:t,onChange:a=>{s(a.target.value)}}),e.jsx("label",{htmlFor:"custom-range",style:{left:`${t}%`},className:"absolute -top-10  -translate-x-1/2 bg-white shadow-[0_0_5px_rgba(0,0,0,.3)] w-20 py-[5px] flex items-center justify-center rounded-md",children:t})]})]})};export{n as default};