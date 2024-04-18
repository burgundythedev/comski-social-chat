import{j as e,r as l,R as $}from"./react-C0PVtSo4.js";import{c as ee}from"./react-dom-ysRME76E.js";import{L as C,B as se}from"./react-router-dom-DStmai0v.js";import{u as Q,a as D,P as te}from"./react-redux-BhlV6XPY.js";import{p as re,a as ne,d as ae,P as oe}from"./redux-persist-O00nb3w_.js";import{c as G,a as ie,f as le,b as ce}from"./@reduxjs-BEC_h3Ta.js";import{a as I,d as de,e as y,f as P}from"./react-router-Gy7_ZsoA.js";import{l as me}from"./socket.io-client-DFi9RC7o.js";import{I as ue}from"./react-input-emoji-qfbLTjXY.js";import{c as he}from"./redux-DITMfSWq.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DMYGYXfe.js";import"./use-sync-external-store-1wgdmmk5.js";import"./immer-C45-hHMi.js";import"./reselect-BEFkisvr.js";import"./redux-thunk-ClJT1hhx.js";import"./engine.io-client-DBBxzneW.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io-Dkula2eQ.js";import"./socket.io-parser-BBkuslX-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const g of c.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function d(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=d(r);fetch(r.href,c)}})();const ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADWElEQVR4nO2dz4sPYRzHX1a72GRJ+AeQHzcXP04uSg7YsOvqIuJAObpbm+LksElikSsXVyVxI7+XRXJxkGQLxX70bI+SMt95Zp7ZeWa+71d9jt/v9Hxe3/fMPPN8ZwaEEEIIIYQQohn0AcPANeAFMAVYl9eU74XryZDv0aywB5hMoAGWeL0GBqsUMRc4k8BArWE1CvRUIUQyKCzldBW7qbp/adbw2h1LRp/fH9Y9IGt4vYl1oB9OYDDWktoXQ8j1BAZiLanxGEImEhiItaTcPKU0XxMYiLWkXC9LU/cgrGUlIdQvQUKov/ESQv3NlhDqb7CEUH9TGy3kKXAYWAUs8LUaONqlc5zSlNn4+Q7Xb+YDlxNoknWDkNvAnJzrLPcTaJS1XcjWgG3sTKBR1nYhCwO2sSSBRlnbhQwEbGMggUZZ24XsCNjG9gQaZW0Xcs8fsDvh/gBwJ4FGWduFmP+PUn/Gd88DLiTQJOsWIX/Wko8D670cV2uBI8DLBBpk3SZEhYRYwj8EJYT6JUgI9TdeQqi/2RJC/Q1ujJBY24n1PY+Bs8Aufwq+wk9clwHrgG3ACPBQQqoTMu0np5sCv2MNcAn4pYQQTcgjYCPl2AK80y6L0kIu+tXIGCwFHugYQmEh53KuVBK4PPBEB3UKCank9jFgZaSbW7vuLKtKjklIWrh/0LxVQtLihITEod8viJXFTSR/6hhSjM3ADeDzXxPFD8CYn60X5a6EhHOyw0z7h1+1LMIpCQnjQM6GucTsJ5y9EpKfxcCngIZ9BBYRxgYJyc+hAs06SBjLJSQ/two06ybhZ2yaqefkfYFmuc+E4K6VSUhOvhdo1jfCkZCGXHvTxcV/kJDErvaaEiIhpl3W/1FClBCUkAyUECUEJSQDJUQJQQnJQAlRQlBCMlBClBCUkAyUECUEJSQDJUQJQQnJQAlRQmhEQlRIiDXgh6CEUL8ECaHFQvRCF6LJ+BJDSDc+9c0qqucxhFxNYCDWknKPVS/NUAIDsZaUu9GnNL3AqwQGYw2vyZhvkB5MYEDW4Jr2z7ePymgCA7OGlrtJNDo9/q3HdQ/OGpaMkQqfvzKDe+uxjil0lDHhn143K/T6F+2O+3NrTR6Z6cEz4Io/m3I9EkIIIYQQQghS5zccoQvHPr2pqwAAAABJRU5ErkJggg==",xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABr0lEQVR4nO2Vu0oDQRSGPxVUFCwUJF4RL621F0RRsDOoqLWNhZdokdbKt1CJF7QSBEWCFoJPYGMVKy3shIgx3mKiEpiFZZiZnd0EscgPQ9jN+c+35zBnBkr6h2oHIsAFkADSYiXEuxWgrZjAFmATyAI/HisHHAEdhUIngRcLoLxSQDgodE1U4Bfqrn41SKW5AqBuuHXlrYr29gG9QMwDFBNxA1Lbm23AquRVUjeGgUagQvyOiPeOqiX/ts3IqHZvN/7UI/mzopNaRTQtHPQJHlLkWDYZzhWGY4LpVMoTNwXfKsD9AcFy1QlTcMpjY/lRreJQ0SqtANcRTA1SnldT8J0CPBEQPC3luTcFxxXgazGXflQD3Eh5zkyGqGacLm1PHzGvV4ocUZMpf59mNPA3YAeYBTolX/55DtgD3hXeDNDk9cUHLsM8cKL4gHHJMwp8GM7wfduLPykMj0A9cCgSPwHrGt+GBvpsU62jGde1uGDp6dJci1O2UEdLwDfwAIxZ7OxyBXSRgAqL9roTmuTEJINUKis/RlvAlwX4E9gFQhRRIXFtVmr+L/Mx6yXxZ/oFDl37po6ZopsAAAAASUVORK5CYII=",fe=()=>e.jsxs("div",{className:"font-kode p-5",children:[e.jsx("p",{className:"hidden",children:"Broski"}),e.jsxs("div",{className:"flex flex-row justify-between items-center",children:[e.jsx(C,{to:"https://www.linkedin.com/in/olivier-bourgogne/",className:"",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:ge,alt:"LinkedIn",className:"w-5 h-5"})}),e.jsxs("p",{className:"",children:["@broskisocialchat ",e.jsx("span",{className:"hidden",children:"by Olivier Bourgogne"})]}),e.jsx(C,{to:"https://github.com/burgundythedev",className:"",target:"_blank",rel:"noopener noreferrer",children:e.jsx("img",{src:xe,alt:"GitHub",className:"w-5 h-5"})})]}),e.jsx("p",{className:"hidden",children:"Broski"})]}),pe=""+new URL("comski-NUlVWErS.png",import.meta.url).href,Ae={user:null,isLoggedIn:!1,isLoggedInError:!1,isRegistered:!1,isRegisteredError:!1},X=G({name:"auth",initialState:Ae,reducers:{addUserRegister(s,t){const{_id:d,name:i,email:r,token:c}=t.payload;s.user={_id:d,email:r,name:i,token:c,typeToken:"register"}},loginUser(s,t){const{_id:d,name:i,email:r,token:c,password:g}=t.payload;localStorage.setItem("userInfo",JSON.stringify({_id:d,name:i,email:r,token:c,password:g})),s.user={_id:d,name:i,email:r,token:c,password:g,typeToken:"login"}},logoutUser(s){localStorage.removeItem("userInfo"),s.user=null}}}),{addUserRegister:ps,loginUser:As,logoutUser:je}=X.actions,we=X.reducer,Ne=()=>{const s=I(),t=Q(),d=JSON.parse(localStorage.getItem("userInfo")||"{}"),i=d.token&&d.type==="login",r=()=>{t(je()),localStorage.removeItem("userInfo"),s("/login")},c=()=>{s("/chat")};return e.jsxs("div",{className:"flex flex-row items-center justify-between p-5 font-kode",children:[e.jsxs(C,{to:"/home",className:"flex flex-row items-center",children:[e.jsx("img",{src:pe,alt:"logo-company",className:"w-14 h-14 rounded-lg"}),e.jsx("span",{className:"hidden",children:"BROSKI SOCIAL"})]}),e.jsx("nav",{children:e.jsx("ul",{className:"lg:flex flex-row",children:i?e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:"mb-2 lg:mb-0 mr-2 md:text-xl",children:["Welcome,",e.jsx("span",{className:"ml-1 text-blue-700 font-extrabold md:text-xl",children:d.name})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx("li",{className:"p-1 text-sm mr-1 bg-customYellow rounded-lg cursor-pointer w-20 text-center md:text-xl",onClick:c,children:"Chats"}),e.jsx("li",{className:"p-1 text-sm bg-customYellow rounded-lg cursor-pointer w-20 text-center md:text-xl",onClick:r,children:"Logout"})]})]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{to:"register",className:"p-5 md:text-xl",children:"Register"}),e.jsx(C,{to:"login",className:"p-5 md:text-xl",children:"Login"})]})})})]})},ve=({children:s})=>e.jsxs("div",{className:"flex flex-col min-h-screen overflow-hidden lg:p-5",children:[e.jsx(Ne,{}),e.jsx("main",{className:"grow",children:s}),e.jsx(fe,{})]}),ye={chats:[],loading:!1,currentChat:null},J=G({name:"chat",initialState:ye,reducers:{getUserChats:(s,t)=>{s.chats=t.payload},addChat:(s,t)=>{s.chats.push(t.payload)},setCurrentChat:(s,t)=>{s.currentChat=t.payload},isChatsLoading:(s,t)=>{s.loading=t.payload}}}),{getUserChats:js,addChat:ws,isChatsLoading:Ns,setCurrentChat:Y}=J.actions,be=J.reducer,S=ie({reducerPath:"api",baseQuery:le({baseUrl:"https://broski-social-chat-server.onrender.com/api"}),tagTypes:["Chat","Message"],endpoints:s=>({registerUser:s.mutation({query:t=>({url:"/users/register",method:"POST",body:t})}),loginUser:s.mutation({query:t=>({url:"/users/login",method:"POST",body:t})}),fetchChatsByUserId:s.query({query:t=>`/chats/${t}`,providesTags:["Chat"]}),fetchUsersByIds:s.query({query:t=>`/users?ids=${t}`}),fetchRegisteredUsers:s.query({query:()=>"/users"}),createChat:s.mutation({query:t=>({url:"/chats",method:"POST",body:t}),invalidatesTags:["Chat"]}),fetchMessagesByChatId:s.query({query:t=>`/messages/${t}`,providesTags:(t,d,i)=>[{type:"Message",id:i}]}),sendChatMessage:s.mutation({query:({chatId:t,senderId:d,text:i})=>({url:`/messages/${t}`,method:"POST",body:{senderId:d,text:i}}),invalidatesTags:(t,d,{chatId:i})=>[{type:"Message",id:i}]}),deleteChat:s.mutation({query:t=>({url:`/chats/${t}`,method:"DELETE"}),invalidatesTags:[{type:"Chat",id:"LIST"},{type:"Message"}]})})}),{useRegisterUserMutation:Ee,useLoginUserMutation:Ce,useFetchChatsByUserIdQuery:O,useFetchUsersByIdsQuery:T,useFetchRegisteredUsersQuery:Ie,useCreateChatMutation:Se,useFetchMessagesByChatIdQuery:ke,useSendChatMessageMutation:Ue,useDeleteChatMutation:Be}=S,F=s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"}),Re=""+new URL("avatar-BPzg3epz.webp",import.meta.url).href,Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFWUlEQVR4nO2d328UVRTH75OJ/geEds6922I797bEbimrhGJJV1tCItX+gIo0kbTRhhp/1AdtE8HtgyU8mEiNPGviD9L4jj7qA2jUJxIh+iCJPGAKLitEfRlzdndqC1tmbtN27pw9n+Qk7WZo5tzv3ntnPptZhGAYhmEYhmEYhmEYhmEYhqGO1vohUPo0KHMdlAki6ndQZh7/TdLnTRZQZj5GEKvKk+a9pM+bLFB51wdek9kTdWxjRu8NZ8rWnF0dAtV3/WYdz3AgbgBgfJD6k5ibc7DFdR2U/higrVXUAwD+AVD6jgMDHzy49B0pTZ+gzPbm9gZP6VvY8Gu5fHB5cDwoHp1yqi4Pjgev5vKVKzSlb+E5C6qAMuex0eO7nkx84IsRhedYnS3nBUW8jN+LDbY0tQc/D7k3M4r31NXhicBv2lkJBXS/SCtNTaYRpF70pLlda21+v+eZxAe7GLPwXNe42bztKf2llO0twvkwlFm6r4HEN2izqrr9ruVBx59Xvhb+HvP8l5zeY3Bm4Im+0LGvPOWTfocXN3E5O5rd5/4eEy5TlMMorgilunwVhavUZyD6T+EquNHhSeJ0phzK1eGJ4Plsd2XJknpRuApeddTa1AnX0vaMv0O4DF514EaHa6sDAxZsRpV7k3rR+TBq4Ul9rbyvTJ8JSu+cS2VdmT4TBvGbSDueMj9iM5dOFBIf2NI66+LUXDg7fhBpB6T5Gpu5MDGb+MCW1lkXxmfCDfwrkXY8pT/DZr4YeyPxgS2tsz4fez1csj4VaQekOYvNnBuZjGz85uxC8G7+uWBXSzboas0Ghfxg+bWkjg/ro5HJcMn6QKQdUOYUNnN64Hhk44X84LJ2CfVEoXcosePDmj/0YngTeFKkHU/qV7CZt/tHIxvvas2uuqHEn/G1pI4P663+0UogSk+JtAMZPYrNvLx/ILJxUOa+u2J8Lanjw3pp/0BlyQJzRKSdRtX2FDZzZM+BxAPpXqHdbQI5/ER/dYb4eZF2PK81i830d/YkHkixhpeKE0hfZ091hvgdIu1kMtrDZnIml9pAciZXPg4/gBNpZ9u2zkewmZbmnaldslqaK5+tNzQ8/rCgACh9Fxu6MbOQuk39xszZ6j2IviuoEFcwgoMzhJRYtBWM4OAeQkos2gpGcDAQUmLRVjCCg0sWKbFoKxjBwU2dlFi0FYzgYCCkxKKtYAQHAyElFm0FIzgYCCmxaCsYwcFASIlFW8EIDgZCSizaCkZwMBBSYtFWMIKDgZATizaCERwLhKRYtBGM4FggJMViiKfMT1GCERwLJBSLKEcFNeIIRnAsEJJi0UYwgmOBkBSLNoIRHAuEpFi0EYzgWCAkxaKNYIQNGGD8zGOj/j5JsWgjGGEDAsHaqL9PUizaCEZwLBCSYtFGMIJjgZAUizaCERwLhKRYtBGM4FggZMViXMEIDl1lkRaLcQUjOHQfQlos3isYv5uacz6QSycKdMViXMEIDgVCWizGFYxdNZ4B3G35zOBGHU9aLMYVjIXeoeVvEgq/cWcu/4CnajfxeNJiMa5gvDm7UB40fCfjOxcHK+q58806nrRYXM8j0qWEi7RYDPGUHsYmx7oPJj7gpYg6tvdgGMiwoAp+nzo2qR/tCP6Y/TDxQS+tUXjj6u94rBxIKr8TywaQ+nts9M2+w4kPfGmNmn56JLwHuSiog/8ZiyfNP+HS9e3kqciHQUtbNCu+mTz5/1Ilzd9K6d2iHgBoexak/qt6WeleSVOS0j8k6gkpfQBpFkDpXz2p/006BA/PQepf8L4DPypIenwYhmEYhmEYhmEYhmEYhmEYhmEYRmwF/wHBGZeWya7mywAAAABJRU5ErkJggg==";function Ye(s){const[t,d]=l.useState({});return l.useEffect(()=>{const i=async()=>{const r=s.map(async m=>{const x=await(await fetch(`http://localhost:4000/api/messages/${m}`)).json(),w=x.length>0?x[x.length-1]:void 0;return{chatId:m,lastMessage:w}}),g=(await Promise.all(r)).reduce((m,{chatId:j,lastMessage:x})=>(m[j]=x,m),{});d(g)};s.length>0&&i()},[s]),t}const Me="https://broski-social-chat-server.onrender.com",N=me(Me),Qe=()=>{const s=Q(),t=JSON.parse(localStorage.getItem("userInfo")||"{}"),[d,i]=l.useState({}),[r,c]=l.useState([]),[g]=Be(),m=D(n=>n.chat.currentChat),[j,x]=l.useState([]),w=I(),[f,A]=l.useState(!1),{data:o,isLoading:u,error:a,refetch:h}=O(t._id);l.useEffect(()=>(N.on("getOnlineUsers",n=>{c(n.map(p=>p.userID))}),N.emit("addNewUser",t._id),()=>{N.off("getOnlineUsers")}),[t._id]),l.useEffect(()=>(N.on("unreadMessage",({chatId:n,unread:p})=>{x(p?v=>[...v,n]:v=>v.filter(E=>E!==n))}),()=>{N.off("unreadMessage")}),[]),l.useEffect(()=>{o!=null&&o.chats&&o.chats.length>0&&s(Y(o.chats[0]))},[o==null?void 0:o.chats,s]);const b=(o==null?void 0:o.chats.flatMap(n=>n.members).filter(n=>n!==t._id).join(","))||"",{data:k}=T(b,{skip:b.length===0});l.useEffect(()=>{if(k){const n=k.reduce((p,v)=>({...p,[v._id]:v}),{});i(n)}},[k]),l.useEffect(()=>{const n=()=>{A(window.innerWidth<=768)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const U=Ye((o==null?void 0:o.chats.map(n=>n._id))||[]),V=async n=>{try{await g(n).unwrap(),h()}catch(p){console.error("Error deleting chat",p)}},q=(n,p=10)=>n.length>p?`${n.substring(0,p)}...`:n,K=n=>{n&&(s(Y(n)),x(p=>p.filter(v=>v!==n._id)),f&&w(`/chat/${n._id}`))};return u?e.jsx("div",{className:"font-kode p-2",children:"Loading chats..."}):a?e.jsx("div",{className:"font-kode p-2",children:"Error fetching chats"}):e.jsxs("div",{className:"font-kode flex flex-col grow",children:[e.jsx("h2",{className:"text-xl font-semibold mb-5",children:"Chats"}),e.jsx("ul",{className:"flex-1 border-t border-black rounded-xl overflow-y-auto md:overflow-y-visible",children:(o==null?void 0:o.chats.length)===0?e.jsx("p",{className:"text-center text-xl py-5 mt-20",children:"Create a chat and enjoy"}):o==null?void 0:o.chats.map(n=>{var p,v;return e.jsxs("div",{className:`flex flex-col p-4 rounded-xl mb-5 cursor-pointer border-t-4 border-customYellow w-full ${j.includes(n._id)?"bg-blue-100 animate-pulse":m&&n._id===m._id?"bg-rgbYellow":"bg-white"}`,onClick:()=>K(n),children:[e.jsx("div",{children:e.jsxs("div",{children:[n.members.filter(E=>E!==t._id).map(E=>{var L;const Z=((L=d[E])==null?void 0:L.name)||"Unknown User",z=r.includes(E);return e.jsxs("div",{className:"flex justify-between mb-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{className:"w-5 h-5",src:Re,alt:"Avatar"}),e.jsx("span",{className:"ml-5 text-xl",children:Z}),z&&e.jsx("span",{className:"inline-block ml-2 bg-green-500 rounded-full w-3 h-3"})]}),e.jsx("div",{onClick:_=>{_.stopPropagation(),V(n._id)},children:e.jsx("button",{className:"text-red-500",children:e.jsx("img",{className:"w-7 hover:scale-125 ",src:Le,alt:"Delete chat"})})})]},E)}),e.jsx("div",{children:e.jsx("p",{className:"mb-2 font-semibold",children:U[n._id]?q(((p=U[n._id])==null?void 0:p.text)||""):"Start a chat"})})]})}),e.jsx("div",{children:e.jsx("p",{className:"text-xs mt-2",children:F(((v=U[n._id])==null?void 0:v.createdAt)??n.createdAt)})})]},n._id)})})]})},De=()=>{const{data:s,isLoading:t}=Ie(),i=JSON.parse(localStorage.getItem("userInfo")||"{}")._id,{data:r,isLoading:c}=O(i),[g]=Se(),[m,j]=l.useState([]),[x,w]=l.useState([]),[f,A]=l.useState("");l.useEffect(()=>(N.on("getOnlineUsers",u=>{const a=u.map(h=>h.userID);w(a)}),N.on("receiveMessageNotification",({chatId:u})=>{A(`New message in chat: ${u}`),console.log("New message in chat:",u)}),()=>{N.off("getOnlineUsers"),N.off("receiveMessageNotification")}),[]),l.useEffect(()=>{if(s&&(r!=null&&r.chats)){const u=s.filter(a=>!r.chats.some(h=>h.members.includes(a._id))&&a._id!==i);j(u)}},[s,r,i]);const o=async u=>{try{await g({firstId:i,secondId:u}).unwrap(),console.log("Chat created successfully")}catch(a){console.error("Failed to create chat:",a)}};return t||c?e.jsx("div",{children:"Loading..."}):e.jsxs("div",{className:"font-kode",children:[e.jsx("div",{children:e.jsx("h2",{className:"text-xl font-semibold",children:"Online Users"})}),e.jsx("div",{children:m.length>0?e.jsx("ul",{className:"flex flex-wrap flex-row mt-5",children:m.map(u=>e.jsxs("li",{className:"bg-customYellow p-2 rounded-lg mr-2 my-2 cursor-pointer",onClick:()=>o(u._id),children:[u.name,x.includes(u._id)&&e.jsx("span",{className:"inline-block bg-green-500 rounded-full w-3 h-3 animate-fade"}),f.includes(u._id)&&e.jsx("p",{className:"text-xs text-red-500",children:"(New Message)"})]},u._id))}):e.jsx("div",{className:"py-5 lg:text-xs",children:"Invite your friends and family to Broski for even more fun chats!"})})]})},Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEiklEQVR4nO2cS2gVVxjHf2m8rWibKqJmEauuio0LBXUhglBEClXpQimFIn24LS6qKGZhXGhEjGBctEYXIi7iYycKRRCFIlVBLbWvNAhaFV/4aKpJSb1HBk/gEubeOzN3zmNmvh/8V+o5Z77vzufM/3xnQBAEQRAEQRAEQYjLe8AW4CIwBPwN7AFaYo8kROZd4CvgHPASUCG6DrwTfUihHuOAj4E+4EWVoI9Vd91RhbosAPYC9yMGvVI36w8v1KrrvyUIeqX+DR1dSFzX4+pS+FTCKM3AMuCw/rWqlBXcRUII7cBO4J6BoI+qDMwOm7yotAHrgasGg16poJQVnhZgLXAS+N9S4Ef1dVGj32y4rkdR8EY8iYLRbqGuR9VRCkKb5boeVSvIMS0O63oUPQBK5IyS/lXF8WHSUvBS9jjG3+8hR7Q7ruuDQG/MO20hOanr1xyXksDX/xx4GuPf/EmGfZi1wJkUfZhG9CPwATCQZ+uh2YPn9TAdACYCZ/NqPbiu66qKgjq/Sa/x+7xZD77UdVVFzyqe3b/Ji/XgW11XVfQXMEevOSiJI1m2Hnyt66qKfqgIXFC/H2bVevC1rqsa2q832tHdC9ezZj34XtdVFf2ntx5HeUPbGpmwHirretmDYKqYCkrM0jHX1N3gmFash1bgoP7PRmVUV3W3QyVfpDCucethKnDDgwCqBnRCv1xVshgYbnDc37HAdx4EUCVUUCa3AU1jrmlGSg8MHTYScNeDQKoEeg6sCbme4E64klJyZ9lIQBbr/i1gfsi1BHfC8ZTmOI8lLnsQUBVDF/RDQxhbU5xnna0EfOpBUFVEHQLeqnIdq1N8dB7Sj+TW2O1BcFUdJ3NDjfXPS9kaOYYDujwItArRP8CqGuuertvEc9H14FsSBvTOVTVK2qfPVdeDL0k4r18Sa9FrYF4vuh66PHAyS3XW+K2hub3penCRhBG9Y1WP5YaatvrxDJtJeAR8GGFN7wNPDK3BivXgYxJ+idhxMFn/Sk2sweuuB5NJOBXxpSfYDj1tcB1edz2YSsJevWMVhR7Dd6F3XQ8mkzCsd96i8qXh4HvT9WAjCXeARTHmW6L3eU0mwHnXg60kXAnZNqzFzIQn2Atx4CJuEvqACTHGfxv42ULwnVsPppNQBjpDtg1r0aQdSWVBXlgPppIwCHySYMztloLvlfXQCJ0hPZe/AnMTjPWZxZ6kP8gRs/Sz9Ab93Z1Swk/H2Dwj5qX14IpWfWzIVvC9th5sMx74yWLwrXY9ZIEjloNvtevBdzY7CH6mrAeTfOToNHzmrAcTzIl5RlcV3XpIkzd157GL4GfaekiLlY6CH2if64v3gY0OExDHCs8t6xwF37uuB1fMTnhet1GJ9TDGwLMZfGsHLrJEl8UEiPXgOAliPThMglgPjpMg1oPjJBTeenCZBLEeHCch810PrtiRUgJy0fWQ1ST0u76Aoiehw/Xii5yEsnQ9uE2CWA+OkyDWg8MkiPVgmO4InycWDLOrxucNppmeXHjNGt3SGHw967Z+652i/0wQBEEQBEEQBAEXvALr4yAo+okBhgAAAABJRU5ErkJggg==",Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhklEQVR4nO2WOwqAMBAFBz8XEJKb6aktRFt7LfUEsQkiaCrJruAOvCLVQMK+DRjGXymAWlrqgQGYgVJK6oARCDGNhjRIiN2DNLvYJaRZxR6YEtK3WYFOWhpi9qfJ6DNLQ+q51MRe4Kq3VAnllC9A+7lxUi0Q1cpUXRKqa/H6EajOk2EY3DkANGS6e2z3DR0AAAAASUVORK5CYII=",Xe=()=>{const s=I(),t=()=>{s("/chat")};return e.jsxs("button",{onClick:t,className:"bg-customYellow p-2 rounded-xl flex flex-row items-center",children:[e.jsx("img",{src:Pe,className:`w-3
       h-3`}),e.jsx("p",{className:"ml-4 font-kode text-sm font-bold",children:"Chat list"})]})};function R(s=728){const[t,d]=l.useState(window.innerWidth>s);return l.useEffect(()=>{const i=()=>{d(window.innerWidth>s)};return window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[s]),t}const B=()=>{const s=D(a=>a.chat.currentChat),t=JSON.parse(localStorage.getItem("userInfo")||"{}"),[d,i]=l.useState(""),[r]=Ue(),c=l.useRef(null),g=R(728),{data:m,isLoading:j,error:x,refetch:w}=ke((s==null?void 0:s._id)??"",{skip:!s}),f=l.useMemo(()=>{const a=(m==null?void 0:m.map(h=>h.senderId))||[];return[...new Set(a)].join(",")},[m]),{data:A}=T(f,{skip:!f}),o=l.useMemo(()=>(A==null?void 0:A.reduce((a,h)=>(a[h._id]=h,a),{}))||{},[A]);l.useEffect(()=>(N.on("receiveMessage",a=>{var h;a.chatId===(s==null?void 0:s._id)&&w(),(h=c.current)==null||h.scrollIntoView({behavior:"smooth"})}),()=>{N.off("receiveMessage")}),[s,w]);const u=l.useCallback(async a=>{if(a==null||a.preventDefault(),!d.trim()||!s)return;const h={chatId:s._id,senderId:t._id,text:d,receiverId:s.members.find(b=>b!==t._id)};N.emit("sendMessage",h),await r(h).unwrap(),i("")},[d,s,r,t._id]);return l.useEffect(()=>{m&&m.length>0&&setTimeout(()=>{var a;(a=c.current)==null||a.scrollIntoView({behavior:"smooth"})},100)},[m]),l.useEffect(()=>{const a=h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),u())};return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[u]),j?e.jsx("div",{children:"Loading messages..."}):x?e.jsx("div",{children:"Error loading messages"}):e.jsxs("div",{className:"font-concert py-5 px-5",children:[e.jsx("div",{className:"my-5",children:g?null:e.jsx(Xe,{})}),e.jsxs("div",{className:"h-screen flex flex-col justify-between overflow-y-auto",children:[e.jsx("div",{children:m&&m.length>0?m.map((a,h)=>{var b;return e.jsxs("div",{ref:h===m.length-1?c:void 0,className:"py-3",children:[e.jsx("p",{className:"text-sm underline mb-2",children:((b=o[a.senderId])==null?void 0:b.name)||"Unknown User"}),e.jsxs("div",{className:"bg-gray-100 rounded-xl p-3 ",style:{maxWidth:"30ch"},children:[e.jsx("p",{className:"whitespace-normal break-words",children:a.text}),e.jsx("p",{className:"text-xs mt-5",children:F(a.createdAt)})]})]},a._id)}):e.jsx("div",{children:"No messages yet. Start a conversation!"})}),e.jsx("div",{className:"w-full",children:e.jsxs("form",{className:"flex items-center",onSubmit:u,children:[e.jsx("div",{className:"flex-grow",style:{minWidth:"25ch",maxWidth:"200ch"},children:e.jsx(ue,{value:d,onChange:i,placeholder:"Type a message...",shouldReturn:!1,shouldConvertEmojiToImage:!1})}),e.jsx("div",{className:"flex-shrink-0 ml-2",children:e.jsx("button",{type:"submit",disabled:!(s!=null&&s._id),className:"bg-customYellow p-1 rounded-lg hover:border flex items-center justify-center",children:e.jsx("img",{src:Ge,className:"w-5 h-5"})})})]})})]})]})},M=()=>{const s=!!localStorage.getItem("userInfo"),t=R(728);return e.jsx("div",{className:"w-full mt-10 p-5 flex flex-col justify-center md:mt-0",children:e.jsx("div",{className:"mt-10 md:mt-5",children:e.jsxs("div",{className:"md:flex md:flex-row",children:[e.jsxs("div",{className:"md:w-1/4",children:[s&&e.jsx("div",{className:"md:mr-4",children:e.jsx(De,{})}),e.jsx(Qe,{})]}),e.jsx("div",{className:"md:w-3/4",children:t&&e.jsx(B,{})})]})})})},Je=()=>{const[s,t]=l.useState(""),[d,i]=l.useState(""),[r,c]=l.useState(""),[g,m]=l.useState(""),[j]=Ce(),x=I(),w=async f=>{f.preventDefault(),m(""),c("");try{const A=await j({email:s,password:d}).unwrap(),{_id:o,name:u,email:a,token:h}=A;localStorage.setItem("userInfo",JSON.stringify({_id:o,name:u,email:a,token:h,type:"login"})),m("Logged In! Redirecting to your Social Media..."),setTimeout(()=>{},5e3),x("/chat")}catch(A){const o=A,u=typeof o.data=="string"?o.data:"Login failed. Please try again.";c(u)}};return e.jsx("div",{className:"flex items-start mt-10 justify-center font-kode lg:py-40",children:e.jsxs("div",{className:"px-10 text-left rounded-xl",children:[e.jsx("h1",{className:"text-4xl p-5 font-bold text-center",children:"Login"}),g&&e.jsx("p",{className:"mb-3 text-sm text-green-500",children:g}),r&&e.jsx("p",{className:"mb-3 text-sm text-red-500",children:r}),e.jsx("h3",{className:"text-xl font-bold text-center",children:"and enjoy! 😀"}),e.jsx("form",{onSubmit:w,children:e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-3 text-md font-semibold",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Email",className:"w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",id:"email",name:"email",value:s,onChange:f=>t(f.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-3 text-md font-semibold",htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",id:"password",name:"password",value:d,onChange:f=>i(f.target.value)})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"px-6 py-2 mt-10 w-full bg-customYellow rounded-lg hover:border border-gray-300",children:"Login"})})]})})]})})},Oe=()=>{const s=I(),[t]=Ee(),[d,i]=l.useState(""),[r,c]=l.useState(""),[g,m]=l.useState(""),[j,x]=l.useState(""),[w,f]=l.useState(""),A=async o=>{o.preventDefault(),x(""),f("");try{const a=await t({name:d,email:r,password:g,typeToken:"registration"}).unwrap();localStorage.setItem("userInfo",JSON.stringify({...a,type:"registration"})),x("Registration successful! Redirecting to login..."),i(""),c(""),m(""),setTimeout(()=>{s("/login")},2e3)}catch(u){const a=u,h=typeof a.data=="string"?a.data:"An error occurred during registration. Please try again.";f(h)}};return e.jsx("div",{className:"flex items-center justify-center font-kode lg:py-40",children:e.jsxs("div",{className:"px-5  text-left  rounded-xl",children:[e.jsx("h1",{className:"text-4xl p-4 font-bold text-center",children:"Register"}),j&&e.jsx("p",{className:"mb-3 text-sm text-red-500",children:j}),w&&e.jsx("p",{className:"mb-3 text-sm text-red-500",children:w}),e.jsx("form",{onSubmit:A,children:e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-3  text-md font-semibold",htmlFor:"name",children:"Name"}),e.jsx("input",{type:"text",placeholder:"Name",className:"w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",id:"name",name:"name",value:d,onChange:o=>i(o.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-3  text-md font-semibold",htmlFor:"email",children:"Email"}),e.jsx("input",{type:"email",placeholder:"Email",className:"w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",id:"email",name:"email",value:r,onChange:o=>c(o.target.value)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block mb-3  text-md font-semibold",htmlFor:"password",children:"Password"}),e.jsx("input",{type:"password",placeholder:"Password",className:"w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600",id:"password",name:"password",value:g,onChange:o=>m(o.target.value)})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx("button",{type:"submit",className:"px-6 py-2 mt-10 w-full  bg-customYellow rounded-lg hover:border border-gray-300",children:"Register"})})]})})]})})},Te=""+new URL("home-pic-DLPRMGpV.png",import.meta.url).href,H=()=>e.jsx("div",{className:"w-full font-kode p-2 mb-10 lg:mb-0 lg:py-40",children:e.jsxs("div",{className:"flex flex-col lg:flex-row-reverse justify-evenly items-center",children:[e.jsx("div",{children:e.jsx("img",{src:Te,alt:"Broski",className:"lg:w-96"})}),e.jsxs("div",{className:"text-center lg:text-start",children:[e.jsx("h1",{className:"text-black underline decoration-customYellow text-3xl font-bold lg:text-6xl mb-20",children:"Welcome to Broski!"}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h2",{className:"font-bold mb-2",children:"Join Broski"}),e.jsx("p",{className:"mb-4",children:"Register to connect with your best friends and lovers."}),e.jsx(C,{className:"",to:"/register",children:e.jsx("button",{className:"bg-customYellow p-2 rounded-md hover:text-white",children:"Register"})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h2",{className:"font-bold",children:"Already a member?"}),e.jsx("p",{className:"mb-4",children:"Login to start chatting and sharing with your loved ones."}),e.jsx(C,{to:"/login",children:e.jsx("button",{className:"bg-customYellow p-2 rounded-md hover:text-white",children:"Login"})})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("h2",{className:"font-bold mb-2",children:"Stay Connected"}),e.jsx("p",{children:"Enjoy seamless chatting experiences with your close circle."})]})]})]})}),Fe=()=>!!localStorage.getItem("userInfo")?e.jsx(P,{to:"/chat",replace:!0}):e.jsx(H,{});function He(){const s=R(728);return e.jsx(ve,{children:e.jsxs(de,{children:[e.jsx(y,{path:"/",element:e.jsx(Fe,{})}),e.jsx(y,{path:"/home",element:e.jsx(H,{})}),e.jsx(y,{path:"/register",element:e.jsx(Oe,{})}),e.jsx(y,{path:"/login",element:e.jsx(Je,{})}),e.jsx(y,{path:"*",element:e.jsx(P,{to:"/"})}),s?e.jsx(y,{path:"/chat",element:e.jsx(M,{}),children:e.jsx(y,{path:":chatId",element:e.jsx(B,{})})}):e.jsxs(e.Fragment,{children:[e.jsx(y,{path:"/chat",element:e.jsx(M,{})}),e.jsx(y,{path:"/chat/:chatId",element:e.jsx(B,{})})]})]})})}const We=he({auth:we,chat:be,[S.reducerPath]:S.reducer}),Ve={key:"root",storage:ae,whitelist:["auth","chat"]},qe=re(Ve,We),W=ce({reducer:qe,middleware:s=>s({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE","persist/PAUSE","persist/PERSIST","persist/PURGE","persist/REGISTER"]}}).concat(S.middleware)}),Ke=ne(W),Ze=ee.createRoot(document.getElementById("root"));Ze.render(e.jsx($.StrictMode,{children:e.jsx(se,{children:e.jsx(te,{store:W,children:e.jsx(oe,{loading:null,persistor:Ke,children:e.jsx(He,{})})})})}));
//# sourceMappingURL=index-TxNflGQA.js.map
