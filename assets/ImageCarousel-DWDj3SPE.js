import{r as l,j as e}from"./main-9MsTDOZ5.js";const h=()=>{const[a,i]=l.useState(-100),t=l.useRef(!1),o=l.useRef(null),n=l.useRef(),u=()=>{const r=()=>{var s;t.current||(t.current=!0,(s=o.current)==null||s.classList.replace("duration-0","duration-300"),i(c=>c-100),n.current=setTimeout(r,3e3))};n.current=setTimeout(r,3e3)};l.useEffect(()=>{u()},[]);const f=r=>{var s;t.current||(clearTimeout(n.current),t.current=!0,(s=o.current)==null||s.classList.replace("duration-0","duration-300"),i(c=>c+(r==="next"?-100:100)),u())};return e.jsx("div",{className:"min-h-full flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx("div",{className:"w-[500px] h-[500px] overflow-hidden",children:e.jsxs("div",{className:"w-full h-full flex transition-transform duration-300 ease-linear",style:{transform:`translateX(${a}%)`},ref:o,onTransitionEnd:r=>{a===0?(r.currentTarget.classList.replace("duration-300","duration-0"),i(-400)):a===-500&&(r.currentTarget.classList.replace("duration-300","duration-0"),i(-100)),t.current=!1},children:[e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80)]"}),e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80)]"}),e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)]"}),e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)]"}),e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80)]"}),e.jsx("div",{className:"w-full h-full grow-0 shrink-0 bg-center bg-no-repeat bg-cover bg-scroll bg-[url(https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80)]"})]})}),e.jsxs("div",{className:"h-8 flex gap-x-3",children:[e.jsx("button",{className:"flex-1 text-white bg-[#623697] outline-none ",onClick:()=>{f("prev")},children:"Prev"}),e.jsx("button",{className:"flex-1 text-white bg-[#623697]  outline-none",onClick:()=>{f("next")},children:"Next"})]})]})})};export{h as default};
