import{b as o,u as l,a as r,j as e}from"./index-EOXqXakE.js";const c=o.injectEndpoints({endpoints:s=>({getArticleById:s.query({query:t=>({url:`/posts/${t}`}),providesTags:["ARTICLES_TAG"]})})}),{useGetArticleByIdQuery:d}=c,u=s=>{const{data:{id:t,title:i,body:n}={},isLoading:a}=d(s);return{id:t,title:i,body:n,isLoading:a}},x=()=>{const{id:s}=l(),{title:t,body:i}=u(s),n=r(),a=()=>{n("/",{replace:!0})};return e.jsxs("div",{className:"flex flex-col gap-6 text-left",children:[e.jsxs("div",{className:"inline-block w-full flex-auto min-w-0",children:[e.jsx("span",{className:"text-xl",children:t}),e.jsx("p",{children:i})]}),e.jsx("button",{className:"flex-none border-solid border-2 border-indigo-600 p-2",onClick:a,children:"Go back"})]})},b=()=>e.jsx(x,{});export{b as ArticlePage};
