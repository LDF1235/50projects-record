import{r as l,j as t}from"./main-k_VwmcBv.js";import{g as x,h as f,i as h}from"./index-ia270q8q.js";import{F as c}from"./index.es-qcD4MMhL.js";let m=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,a)=>(a&=63,a<36?s+=a.toString(36):a<62?s+=(a-26).toString(36).toUpperCase():a>62?s+="-":s+="_",s),"");const v=()=>{const[n,s]=l.useState(()=>{const e=localStorage.getItem("notes");if(!e)return[];try{const o=JSON.parse(e);if(Array.isArray(o)&&o.every(r=>typeof r=="string"))return o.map(r=>({id:m(),text:r}))}catch{}return[]}),[a,d]=l.useState("");return l.useEffect(()=>{n.length?localStorage.setItem("notes",JSON.stringify(n.map(e=>e.text))):localStorage.removeItem("notes")},[n]),t.jsxs("div",{className:"min-h-full flex flex-wrap gap-5 pt-10 px-4 pb-4 bg-[#89DBF2]",children:[t.jsxs("button",{onClick:()=>{s(e=>[...e,{text:"",id:m()}])},className:"px-3 py-1 z-[1] text-[14px] text-white bg-[#9ec862] rounded fixed right-4 top-4 ",children:[t.jsx(c,{icon:x}),t.jsx("span",{className:"ml-2",children:"Add note"})]}),n.map((e,o)=>t.jsxs("div",{className:"w-[400px]",children:[t.jsxs("div",{className:"h-[40px] bg-[#9ec862] flex items-center justify-end pr-4 text-white",children:[t.jsx(c,{onClick:()=>{d(r=>r===e.id?"":e.id)},className:"cursor-pointer",icon:f}),t.jsx(c,{icon:h,className:"ml-3 cursor-pointer",onClick:()=>{s(r=>r.filter((p,i)=>i!==o))}})]}),t.jsx("div",{className:"h-[400px] bg-white",children:a===e.id?t.jsx("textarea",{value:e.text,autoFocus:!0,className:"w-full h-full p-2 resize-none outline-none",onChange:r=>{s(p=>p.map((i,u)=>u===o?{...i,text:r.target.value}:i))}}):t.jsx("div",{className:"h-full break-words overflow-auto p-2",children:e.text})})]},e.id))]})};export{v as default};
