import{r as i,j as t}from"./main-BzFeX7ZU.js";import{c as f}from"./index-UrYLQ-jv.js";import{F as b}from"./index.es-DdOPrsNS.js";import{c as h}from"./clsx-2Jv0kmJG.js";const l=["bg-[url(https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80)]","bg-[url(https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80)]","bg-[url(https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80)]","bg-[url(https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80)]"],n=[{subTitle:"in the sunset",title:"Flying eagle",bgClass:"bg-[#F9B76B]"},{title:"Lonely castle",subTitle:"in the wilderness",bgClass:"bg-[#262E33]"},{title:"Bluuue Sky",subTitle:"with it's mountains",bgClass:"bg-[#3C87B8]"},{title:"Nature flowe",subTitle:"all in pink",bgClass:"bg-[#F13154]"}],m=[n[n.length-1],...n,n[0]],p=[l[l.length-1],...l,l[0]],w=()=>{const[a,r]=i.useState(-400),o=i.useRef(null),c=i.useRef(null),d=i.useRef(!1),u=s=>{d.current||(d.current=!0,o.current&&o.current.classList.replace("duration-0","duration-500"),c.current&&c.current.classList.replace("duration-0","duration-500"),s==="slideDown"?r(e=>e+100):s==="slideUp"&&r(e=>e-100))};return t.jsxs("div",{className:"min-h-full flex",children:[t.jsxs("div",{className:" relative flex-[35] overflow-hidden",children:[t.jsx("button",{className:"absolute z-[1] top-[50%] translate-y-[50%] right-0 bg-white px-4 py-3 rounded-tl rounded-bl",onClick:()=>{u("slideDown")},children:t.jsx(b,{icon:f,className:"text-gray-400"})}),t.jsx("div",{className:"h-full transition-transform duration-500 ease-in-out",style:{transform:`translateY(${-500-a}%)`},ref:o,onTransitionEnd:s=>{const e=s.target;(a===-500||a===0)&&e.classList.replace("duration-500","duration-0")},children:m.map((s,e)=>t.jsxs("div",{className:h(s.bgClass,"h-full flex flex-col justify-center items-center "),children:[t.jsx("h2",{className:"text-[40px] text-white font-bold",children:s.title}),t.jsx("p",{className:"text-white",children:s.subTitle})]},e))})]}),t.jsxs("div",{className:"flex-[65] relative overflow-hidden",children:[t.jsx("button",{className:"absolute z-[1] top-[50%] translate-y-[-50%] left-0 bg-white px-4 py-3 rounded-tr rounded-br",onClick:()=>{u("slideUp")},children:t.jsx(b,{icon:f,className:"text-gray-400 rotate-180"})}),t.jsx("div",{className:"h-full transition-transform duration-500 ease-in-out",style:{transform:`translateY(${a}%)`},ref:c,onTransitionEnd:s=>{const e=s.target;a===0?(e.classList.replace("duration-500","duration-0"),r(-400)):a===-500&&(e.classList.replace("duration-500","duration-0"),r(-100)),d.current=!1},children:p.map((s,e)=>t.jsx("div",{className:h(s,"h-full bg-no-repeat bg-center bg-cover bg-fixed")},e))})]})]})};export{w as default};