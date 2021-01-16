(this["webpackJsonpdue-date"]=this["webpackJsonpdue-date"]||[]).push([[0],{51:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},78:function(e,t,r){"use strict";r.r(t);var a=r(0),s=r(1),n=r.n(s),o=r(39),c=r.n(o),i=(r(51),r(52),r(21)),l=r(3);r(53);var d=function(){return Object(a.jsx)("div",{className:"mt-20",children:Object(a.jsx)("footer",{className:"footer bg-gray-800 py-2 text-center text-gray-200 bottom-0 w-full fixed",children:Object(a.jsxs)("span",{children:["\xa9 ",(new Date).getFullYear()," Asad Ahmed"]})})})},u=(r(29),r(5)),b=r(12);r(40);r(41);var h=r(10),m=r.n(h),j=r(16),p=r(17),x=r(24),v=r(20),f=r(19),O=r(11),g=r.n(O),w=r(23),y=r(42),k=r(45),S=function(e){var t=e.name,r=e.label,s=e.error,n=e.focus,o=Object(k.a)(e,["name","label","error","focus"]);return Object(a.jsxs)("div",{className:"md:flex md:justify-between mx-5 mt-5 text-left",children:[Object(a.jsx)("label",{htmlFor:t,className:"text-gray-400 text-xl font-semibold ",children:r}),Object(a.jsx)("input",Object(u.a)(Object(u.a)({},o),{},{name:t,autoFocus:n,className:"input border border-blue-500 focus:border-indigo-600 focus:outline-none text-black tracking-widest font-bold px-3 md:py-1 py-5 rounded-lg w-full md:mr-5 md:mt-0 mb-5",id:t,"aria-describedby":"emailHelp"})),s&&Object(a.jsx)("div",{className:"text-red-500",children:s})]})},N=function(e){Object(v.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(p.a)(this,r);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={data:{},errors:{}},e.validate=function(){var t=g.a.validate(e.state.data,e.schema,{abortEarly:!1}).error;if(!t)return null;var r,a={},s=Object(y.a)(t.details);try{for(s.s();!(r=s.n()).done;){var n=r.value;a[n.path[0]]=n.message}}catch(o){s.e(o)}finally{s.f()}return a},e.valideProperty=function(t){var r=t.name,a=t.value,s=Object(w.a)({},r,a),n=Object(w.a)({},r,e.schema[r]),o=g.a.validate(s,n).error;return o?o.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var r=e.validate();e.setState({errors:r||{}}),r||e.doSubmit()},e.handleChange=function(t){var r=t.currentTarget,a=Object(u.a)({},e.state.errors),s=e.valideProperty(r);s?a[r.name]=s:delete a[r.name];var n=Object(u.a)({},e.state.data);n[r.name]=r.value,e.setState({data:n,errors:a})},e.renderButton=function(t){return Object(a.jsx)("button",{disabled:e.validate(),className:"md:h-10 h-16 w-11/12 md:w-2/5 px-5 m-2 text-white bg-blue-600 rounded-lg focus:outline-none hover:bg-blue-700 mt-5",children:t})},e.renderInput=function(t,r){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",n=e.state,o=n.data,c=n.errors;return Object(a.jsx)(S,{type:s,focus:!0,name:t,value:o[t],label:r,onChange:e.handleChange,error:c[t]})},e}return r}(s.Component),I=(r(43),r(14)),P=r.n(I);P.a.interceptors.response.use(null,(function(e){e.response&&e.response.status>=400&&e.response.status;return Promise.reject(e)}));var C={get:P.a.get,post:P.a.post,put:P.a.put,delete:P.a.delete};var F,A="http://localhost:5000/login";function B(e,t){return L.apply(this,arguments)}function L(){return(L=Object(j.a)(m.a.mark((function e(t,r){var a,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(A,{email:t,password:r});case 2:a=e.sent,s=a.data,localStorage.setItem("token",s);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}F=localStorage.getItem("token"),P.a.defaults.headers.common["x-auth-token"]=F;var q=function(e){Object(v.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{email:"",password:""},errors:{}},e.schema={email:g.a.string().required().email().label("email"),password:g.a.string().required().label("Password")},e.doSubmit=Object(j.a)(m.a.mark((function t(){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,B(e.state.data.email,e.state.data.password);case 3:r=e.props.location.state,window.location=r?r.from.pathname:"/",t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&400==t.t0.response.status&&(Object(u.a)({},e.state.errors),a=t.t0.response.data,e.setState({errors:a})),console.log("nooo");case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(x.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Log in Here"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.renderInput("password","Password","password"),this.state.errors&&Object(a.jsx)("div",{className:"text-red-500 ml-5",children:this.state.errors.msg}),this.renderButton("Login")]})]})}}]),r}(N),E=r(18);var D=function(e){var t=e.showMenu,r=e.status;return Object(a.jsxs)("header",{className:"bg-gray-900 ",children:[Object(a.jsxs)("div",{className:"flex items-center justify-between px-4 py-3",children:[Object(a.jsx)("div",{className:"text-xl text-gray-400 hover:text-white",children:Object(a.jsx)(b.d,{})}),Object(a.jsx)("div",{children:Object(a.jsx)("butt",{type:"button",className:"text-gray-400 hover:text-white",onClick:t,children:Object(a.jsx)(b.c,{})})})]}),Object(a.jsxs)("div",{className:r?"block px-4 pb-3":"hidden",children:[Object(a.jsx)(E.b,{to:"/login",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:"Login"}),Object(a.jsx)(E.b,{to:"/register",className:"block text-white font-semibold hover:bg-gray-700 px-3 py-4 rounded-md",children:"Register"})]})]})};function H(e){return C.post("http://localhost:5000/register",{email:e.email,password:e.password})}var M=function(e){Object(v.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(p.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={data:{email:"",password:""},errors:{}},e.schema={email:g.a.string().required().email().label("email"),password:g.a.string().required().min(5).label("Password")},e.doSubmit=Object(j.a)(m.a.mark((function t(){var r,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H(e.state.data);case 3:r=t.sent,localStorage.setItem("token",r.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400==t.t0.response.status&&(Object(u.a)({},e.state.errors),a=t.t0.response.data,e.setState({errors:a}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(x.a)(r,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register Here"}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("email","Email"),this.state.errors&&Object(a.jsx)("div",{className:"text-red-500 ml-5",children:this.state.errors.msg}),this.renderInput("password","Password","password"),this.renderButton("Register")]})]})}}]),r}(N);var R=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),r=t[0],n=t[1];return Object(a.jsxs)("div",{className:"relative min-h-screen",children:[Object(a.jsx)(D,{showMenu:function(){n(!r),console.log(r)},status:r}),Object(a.jsx)("div",{children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{path:"/register",component:M}),Object(a.jsx)(l.a,{path:"/login",component:q})]})}),Object(a.jsx)(d,{})]})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,79)).then((function(t){var r=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;r(e),a(e),s(e),n(e),o(e)}))};c.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(E.a,{children:Object(a.jsx)(R,{})})}),document.getElementById("root")),T()}},[[78,1,2]]]);
//# sourceMappingURL=main.689650f3.chunk.js.map