(this["webpackJsonpdue-date"]=this["webpackJsonpdue-date"]||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(40),o=a.n(c),l=(a(51),a(52),a(18)),i=a(3),d=(a(53),a(4)),u=a(25),b=a(11),m=a.n(b),j=a(21),x=a(41),h=a(19),p=a.n(h);p.a.interceptors.response.use(null,(function(e){e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));var f={get:p.a.get,post:p.a.post,put:p.a.put,delete:p.a.delete};var O,g="http://localhost:5000/login";function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(j.a)(m.a.mark((function e(t,a){var r,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post(g,{email:t,password:a});case 2:r=e.sent,n=r.data,localStorage.setItem("token",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){try{var e=localStorage.getItem("token");return Object(x.a)(e)}catch(t){return null}}O=localStorage.getItem("token"),p.a.defaults.headers.common["x-auth-token"]=O;var N=function(e){e.path;var t=e.component,a=e.render,n=Object(u.a)(e,["path","component","render"]);return Object(r.jsx)(i.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return w()?t?Object(r.jsx)(t,Object(d.a)({},e)):a(e):Object(r.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var k=function(){return Object(r.jsx)("div",{className:"mt-20",children:Object(r.jsx)("footer",{className:"footer bg-gray-800 py-2 text-center text-gray-200 bottom-0 w-full fixed",children:Object(r.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," Asad Ahmed"]})})})},S=a(30),D=a(13),C=a(43);var I=function(e){var t=e.tasks,a=e.onDelete,n=(e.date,function(e){var t=e.days,a=e.hours,n=e.minutes,s=e.seconds;return e.completed?("true",Object(r.jsx)("span",{className:"text-red-600 font-semibold",children:"Deadline Passed"})):Object(r.jsxs)("span",{className:"font-semibold text-green-600",children:[Object(r.jsxs)("span",{className:"bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2 ",children:["Days: "," ",t]}),Object(r.jsxs)("span",{className:"bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2",children:[" Hours: ",a]}),Object(r.jsxs)("span",{className:"bg-blue-600 text-white p-1 rounded-lg text-xs md:mr-2 mt-2",children:[" Minutes: ",n]}),Object(r.jsxs)("span",{className:"bg-blue-600 text-white p-1 rounded-lg text-xs",children:[" Seconds: ",s]})]})});return Object(r.jsx)("div",{className:"container mx-5",children:Object(r.jsx)("ul",{children:t.map((function(e){return Object(r.jsxs)("li",{className:"border-l-4 border-b-4 border-blue-500 rounded-lg p-3 mt-5 bg-gray-50 w-11/12 md:w-1/2 flex place-items-center justify-between relative ",children:[Object(r.jsxs)("div",{className:"mr-16 text-left text-xl",children:[Object(r.jsx)("h3",{className:"font-bold text-blue-900 pb-3 uppercase underline",children:e.name}),Object(r.jsx)("p",{className:"text-gray-500 py-3",children:e.description}),Object(r.jsxs)("h3",{className:"text-gray-400",children:[Object(r.jsx)("span",{className:"text-black font-semibold pr-2",children:"Due on: "}),e.dueDate]}),Object(r.jsx)("h3",{className:"text-red-700 capitalize font-bold my-3",children:"".concat(e.name," is due in: ")}),Object(r.jsx)(C.a,{date:e.dueDate,renderer:n})]}),Object(r.jsxs)("div",{className:"md:ml-16 md:mt-10 absolute bottom-0 right-5",children:[Object(r.jsx)("button",{onClick:function(){return a(e.id)},className:"md:mr-5 mb-5 text-red-500 hover:text-red-600 focus:outline-none",children:Object(r.jsx)(D.f,{})}),Object(r.jsx)("button",{className:" text-blue-700 hover:text-blue-500 focus:outline-none ml-5",children:Object(r.jsx)(D.e,{})})]})]},e.id)}))})})},P=a(44),F=a.n(P);var L=function(){var e=Object(n.useState)({name:"",description:"",dueDate:"",id:""}),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),o=Object(l.a)(c,2),i=o[0],u=o[1],b=Object(n.useState)(!0),m=Object(l.a)(b,2),j=m[0],x=m[1];return Object(r.jsxs)("div",{className:"text-center mt-5",children:[Object(r.jsx)("button",{className:"md:text-5xl text-8xl text-gray-500 md:border border-blue-500 rounded-full p-1 m-5 hover:bg-gray-200 hover:text-gray-600 focus:outline-none hover:animate-bounce",onClick:function(){return x(!j),j},children:j?Object(r.jsx)(D.a,{className:"animate-bounce"}):Object(r.jsx)(D.b,{})}),Object(r.jsx)("div",{className:j?"hidden":"",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),u((function(e){return[a].concat(Object(S.a)(e))})),s({name:"",description:"",dueDate:""})},className:"md:flex md:justify-between mx-5 mt-5 text-left",children:[Object(r.jsx)("label",{className:"text-gray-400 text-xl font-semibold md:hidden",children:"Task Name:"}),Object(r.jsx)("input",{className:"input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-0 mb-5",type:"text",placeholder:"task name",onChange:function(e){var t=e.currentTarget.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},{name:t})}))},value:a.name,name:"taskname"}),Object(r.jsx)("label",{className:"text-gray-400 text-xl font-semibold md:hidden",children:"Description:"}),Object(r.jsx)("input",{className:"input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-1 mb-3 mt-1",type:"text",placeholder:"task description",onChange:function(e){var t=e.target.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},{description:t})}))},value:a.description}),Object(r.jsx)("label",{className:"text-gray-400 text-xl font-semibold md:hidden",children:"Choose Date:"}),Object(r.jsx)("input",{className:"input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-2 md:py-1 py-5 rounded-lg w-full md:mr-5 mt-1",type:"datetime-local",placeholder:"Due date",onChange:function(e){var t=e.target.value;s((function(e){return Object(d.a)(Object(d.a)({},e),{},{dueDate:t,id:F()()})}))},value:a.dueDate}),Object(r.jsx)("button",{className:"md:h-10 h-16 w-11/12 md:w-2/5 px-5 m-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5",disabled:!a.name||!a.dueDate,children:"Submit"})]})}),Object(r.jsx)("div",{children:i.length>0?Object(r.jsx)(I,{tasks:i,onDelete:function(e){var t=Object(S.a)(i).filter((function(t){return t.id!==e}));u(t)},date:a.dueDate}):Object(r.jsx)("sp",{className:"font-semibold text-lg text-gray-300 text-left",children:"No Tasks to display"})})]})},T=a(14),A=a(22),B=a(16),E=a(15),M=a(12),q=a.n(M),H=a(24),R=a(45),J=function(e){var t=e.name,a=e.label,n=e.error,s=e.focus,c=Object(u.a)(e,["name","label","error","focus"]);return Object(r.jsxs)("div",{className:"md:flex md:justify-between mx-5 mt-5 text-left",children:[Object(r.jsx)("label",{htmlFor:t,className:"text-gray-400 text-xl font-semibold ",children:a}),Object(r.jsx)("input",Object(d.a)(Object(d.a)({},c),{},{name:t,autoFocus:s,className:"input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-0 mb-5",id:t,"aria-describedby":"emailHelp"})),n&&Object(r.jsx)("div",{className:"text-red-500",children:n})]})},z=function(e){Object(B.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(T.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={data:{},errors:{}},e.validate=function(){var t=q.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var a,r={},n=Object(R.a)(t.details);try{for(n.s();!(a=n.n()).done;){var s=a.value;r[s.path[0]]=s.message}}catch(c){n.e(c)}finally{n.f()}return r},e.valideProperty=function(t){var a=t.name,r=t.value,n=Object(H.a)({},a,r),s=Object(H.a)({},a,e.schema[a]),c=q.a.validate(n,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var a=e.validate();e.setState({errors:a||{}}),a||e.doSubmit()},e.handleChange=function(t){var a=t.currentTarget,r=Object(d.a)({},e.state.errors),n=e.valideProperty(a);n?r[a.name]=n:delete r[a.name];var s=Object(d.a)({},e.state.data);s[a.name]=a.value,e.setState({data:s,errors:r})},e.renderButton=function(t){return Object(r.jsx)("button",{disabled:e.validate(),className:"md:h-10 h-16 w-11/12 md:w-28 px-5 m-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5",children:t})},e.renderInput=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",s=e.state,c=s.data,o=s.errors;return Object(r.jsx)(J,{type:n,focus:!0,name:t,value:c[t],label:a,onChange:e.handleChange,error:o[t]})},e}return a}(n.Component),Y=function(e){Object(B.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:"",password:""},errors:{}},e.schema={email:q.a.string().required().email().label("email"),password:q.a.string().required().label("Password")},e.doSubmit=Object(j.a)(m.a.mark((function t(){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v(e.state.data.email,e.state.data.password);case 3:t.sent,a=e.props.location.state,window.location=a?a.from.pathname:"/tasks",t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400==t.t0.response.status&&(Object(d.a)({},e.state.errors),r=t.t0.response.data,e.setState({errors:r})),console.log("nooo");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(A.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Log in Here"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.state.errors&&Object(r.jsx)("div",{className:"text-red-500 ml-5",children:this.state.errors.msg}),this.renderButton("Login")]})]})}}]),a}(z),G=function(e){Object(B.a)(a,e);var t=Object(E.a)(a);function a(){return Object(T.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"componentDidMount",value:function(){localStorage.removeItem("token"),window.location="/"}},{key:"render",value:function(){return null}}]),a}(n.Component),K=a(10);var Q=function(e){var t=e.showMenu,a=e.status,n=e.user;return Object(r.jsxs)("header",{className:"bg-gray-900 ",children:[Object(r.jsxs)("div",{className:"flex items-center justify-between px-4 py-3",children:[Object(r.jsx)("div",{className:"text-xl text-gray-400 hover:text-white",children:Object(r.jsx)(D.d,{})}),Object(r.jsx)("div",{children:Object(r.jsx)("butt",{type:"button",className:"text-gray-400 hover:text-white",onClick:t,children:Object(r.jsx)(D.c,{})})})]}),Object(r.jsxs)("div",{className:a?"block px-4 pb-3":"hidden",children:[!n&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(K.b,{to:"/login",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:"Login"}),Object(r.jsx)(K.b,{to:"/register",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:"Register"})]}),n&&Object(r.jsxs)(s.a.Fragment,{children:[Object(r.jsx)(K.b,{to:"/tasks",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:Object(r.jsx)("span",{className:"text-gray-200",children:n.email})}),Object(r.jsx)(K.b,{to:"/logout",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:"Logout"})]})]})]})};function U(e){return f.post("http://localhost:5000/register",{email:e.email,password:e.password})}var V=function(e){Object(B.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(T.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:{email:"",password:""},errors:{}},e.schema={email:q.a.string().required().email().label("email"),password:q.a.string().required().min(5).label("Password")},e.doSubmit=Object(j.a)(m.a.mark((function t(){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U(e.state.data);case 3:a=t.sent,localStorage.setItem("token",a.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400==t.t0.response.status&&(Object(d.a)({},e.state.errors),r=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(A.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"text-center",children:[Object(r.jsx)("h1",{children:"Register Here"}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.state.errors&&Object(r.jsx)("div",{className:"text-red-500 ml-5",children:this.state.errors.msg}),this.renderInput("password","Password","password"),this.renderButton("Register")]})]})}}]),a}(z);var W=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(""),o=Object(l.a)(c,2),d=o[0],u=o[1];return Object(n.useEffect)((function(){var e=w();u(e)}),[]),Object(r.jsxs)("div",{className:"relative min-h-screen",children:[Object(r.jsx)(Q,{showMenu:function(){s(!a)},status:a,user:d}),Object(r.jsx)("div",{children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/register",component:V}),Object(r.jsx)(i.b,{path:"/login",component:Y}),Object(r.jsx)(i.b,{path:"/logout",component:G}),Object(r.jsx)(N,{path:"/tasks",component:L})]})}),Object(r.jsx)(k,{})]})},X=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(K.a,{children:Object(r.jsx)(W,{})})}),document.getElementById("root")),X()}},[[78,1,2]]]);
//# sourceMappingURL=main.2a83e6ec.chunk.js.map