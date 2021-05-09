(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{15:function(t,e,n){t.exports={link:"Navigation_link__3Qkdh"}},16:function(t,e,n){"use strict";var c={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name},getAuthError:function(t){return t.auth.error},getAuthLoading:function(t){return t.auth.loading}};e.a=c},17:function(t,e,n){"use strict";var c=n(2),r={fetchContactsRequest:Object(c.b)("contacts/fetchContactsRequest"),fetchContactsSuccess:Object(c.b)("contacts/fetchContactsSuccess"),fetchContactsError:Object(c.b)("contacts/fetchContactsError"),addContactRequest:Object(c.b)("contacts/addContactRequest"),addContactSuccess:Object(c.b)("contacts/addContactSuccess"),addContactError:Object(c.b)("contacts/addContactError"),updateContactRequest:Object(c.b)("contacts/updateContactRequest"),updateContactSuccess:Object(c.b)("contacts/updateContactSuccess"),updateContactError:Object(c.b)("contacts/updateContactError"),deleteContactRequest:Object(c.b)("contacts/deleteContactRequest"),deleteContactSuccess:Object(c.b)("contacts/deleteContactSuccess"),deleteContactError:Object(c.b)("contacts/deleteContactError"),changeFilter:Object(c.b)("contacts/changeFilter")};e.a=r},27:function(t,e,n){"use strict";var c=n(18),r=n.n(c),a=n(24),o=n(20),s=n.n(o),u=n(4);s.a.defaults.baseURL="https://connections-api.herokuapp.com/";var i=function(t){s.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){s.a.defaults.headers.common.Authorization=""},l={register:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.registerRequest()),e.prev=1,e.next=4,s.a.post("/users/signup",t);case 4:c=e.sent,i(c.data.token),n(u.a.registerSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.registerError(e.t0.massage));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(a.a)(r.a.mark((function e(n){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(u.a.loginRequest()),e.prev=1,e.next=4,s.a.post("/users/login",t);case 4:c=e.sent,i(c.data.token),n(u.a.loginSuccess(c.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(u.a.loginError(e.t0.massage));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(u.a.logoutRequest()),t.prev=1,t.next=4,s.a.post("/users/logout");case 4:b(),e(u.a.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(u.a.logoutError(t.t0.massage));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(r.a.mark((function t(e,n){var c,a,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),a=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return i(a),e(u.a.getUserRequest()),t.prev=5,t.next=8,s.a.get("/users/current");case 8:o=t.sent,e(u.a.getUserSuccess(o.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(u.a.getUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}};e.a=l},31:function(t,e,n){t.exports={AppBar:"AppBar_AppBar__1VbF-",line:"AppBar_line__YaQur"}},34:function(t,e,n){t.exports={container:"App_container__zH-66"}},4:function(t,e,n){"use strict";var c=n(2),r={registerRequest:Object(c.b)("auth/registerRequest"),registerSuccess:Object(c.b)("auth/registerSuccess"),registerError:Object(c.b)("auth/registerError"),loginRequest:Object(c.b)("auth/loginRequest"),loginSuccess:Object(c.b)("auth/loginSuccess"),loginError:Object(c.b)("auth/loginError"),logoutRequest:Object(c.b)("auth/logoutRequest"),logoutSuccess:Object(c.b)("auth/logoutSuccess"),logoutError:Object(c.b)("auth/logoutError"),getUserRequest:Object(c.b)("auth/getUserRequest"),getUserSuccess:Object(c.b)("auth/getUserSuccess"),getUserError:Object(c.b)("auth/getUserError")};e.a=r},58:function(t,e,n){},59:function(t,e,n){},65:function(t,e,n){},93:function(t,e,n){"use strict";n.r(e);var c,r,a,o,s,u,i,b=n(0),l=n.n(b),j=n(26),d=n.n(j),O=(n(58),n(47)),f=n(48),h=n(53),p=n(52),g=(n(59),n(34)),x=n.n(g),m=n(9),v=n(6),C=(n(65),n(16)),k=n(27),S=n(95),y=n(1),E=Object(m.b)((function(t){return{userName:C.a.getUserName(t)}}),(function(t){return{onLogOut:function(){return t(k.a.logout())}}}))((function(t){var e=t.userName,n=t.onLogOut;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("p",{children:["\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, ",e]}),Object(y.jsx)(S.a,{variant:"primary",type:"button",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})})),A=n(14),R=n(15),q=n.n(R),U=Object(m.b)((function(t){return{isAuthenticated:C.a.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(y.jsx)("div",{children:Object(y.jsxs)("nav",{children:[Object(y.jsx)(A.b,{exact:!0,to:"/",className:q.a.link,activeClassName:q.a.activeLink,children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),e&&Object(y.jsx)(A.b,{to:"/contacts",className:q.a.link,activeClassName:q.a.activeLink,children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430\u044f \u043a\u043d\u0438\u0433\u0430"})]})})})),N=function(){return Object(y.jsx)("div",{className:q.a.authContainer,children:Object(y.jsxs)("nav",{children:[Object(y.jsx)(A.b,{to:"/register",className:q.a.link,activeClassName:q.a.activeLink,children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(y.jsx)(A.b,{to:"/login",className:q.a.link,activeClassName:q.a.activeLink,children:"\u0412\u0445\u043e\u0434"})]})})},w=n(31),_=n.n(w),L=Object(m.b)((function(t){return{isAuthenticated:C.a.getIsAuthenticated(t)}}))((function(t){var e=t.isAuthenticated;return Object(y.jsxs)("header",{children:[Object(y.jsx)("span",{className:_.a.logo,role:"icon","aria-label":"logo"}),Object(y.jsxs)("div",{className:_.a.AppBar,children:[Object(y.jsx)(U,{}),e?Object(y.jsx)(E,{}):Object(y.jsx)(N,{})]}),Object(y.jsx)("hr",{className:_.a.line})]})})),z=n(21),B=n(30),T=Object(m.b)((function(t){return{isAuthenticated:C.a.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(B.a)(t,["component","isAuthenticated","redirectTo"]);return Object(y.jsx)(v.b,Object(z.a)(Object(z.a)({},r),{},{render:function(t){return n?Object(y.jsx)(e,Object(z.a)({},t)):Object(y.jsx)(v.a,{to:c})}}))})),I=Object(m.b)((function(t){return{isAuthenticated:C.a.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,c=t.redirectTo,r=Object(B.a)(t,["component","isAuthenticated","redirectTo"]);return Object(y.jsx)(v.b,Object(z.a)(Object(z.a)({},r),{},{render:function(t){return n&&r.restricted?Object(y.jsx)(v.a,{to:c}):Object(y.jsx)(e,Object(z.a)({},t))}}))})),F=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,109))})),P=Object(b.lazy)((function(){return n.e(5).then(n.bind(null,105))})),G=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,106))})),J=Object(b.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,107))})),M=Object(b.lazy)((function(){return n.e(8).then(n.bind(null,108))})),Q=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:x.a.container,children:[Object(y.jsx)(L,{}),Object(y.jsx)(b.Suspense,{fallback:Object(y.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(y.jsxs)(v.d,{children:[Object(y.jsx)(I,{exact:!0,path:"/",component:P}),Object(y.jsx)(I,{path:"/register",restricted:!0,redirectTo:"/",component:G}),Object(y.jsx)(I,{path:"/login",restricted:!0,redirectTo:"/contacts",component:J}),Object(y.jsx)(T,{path:"/contacts",redirectTo:"/login",component:F}),Object(y.jsx)(I,{component:M})]})})]})}}]),n}(b.Component),D=Object(m.b)(null,(function(t){return{onGetCurrentUser:function(){return t(k.a.getCurrentUser())}}}))(Q),H=n(50),V=n(29),Y=n(2),K=n(19),W=n(51),X=n.n(W),Z=n(5),$=n(8),tt=n(17),et=Object(Y.c)([],(c={},Object(Z.a)(c,tt.a.fetchContactsSuccess,(function(t,e){return e.payload})),Object(Z.a)(c,tt.a.addContactSuccess,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name.toLowerCase().includes(n.name.toLowerCase())})))return[n].concat(Object(V.a)(t));alert("".concat(n.name," is already in contacts"))})),Object(Z.a)(c,tt.a.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return n!==t.id}))})),c)),nt=Object(Y.c)("",(r={},Object(Z.a)(r,tt.a.changeFilter,(function(t,e){return e.payload})),Object(Z.a)(r,tt.a.deleteContactSuccess,(function(t,e){e.payload;return""})),r)),ct=Object(Y.c)("",(a={},Object(Z.a)(a,tt.a.fetchContactsError,(function(t,e){return e.payload})),Object(Z.a)(a,tt.a.addContactError,(function(t,e){return e.payload})),Object(Z.a)(a,tt.a.deleteContactError,(function(t,e){return e.payload})),a)),rt=Object($.b)({items:et,filter:nt,error:ct}),at=n(4),ot={name:"",email:""},st=Object(Y.c)(ot,(o={},Object(Z.a)(o,at.a.registerSuccess,(function(t,e){return e.payload.user})),Object(Z.a)(o,at.a.loginSuccess,(function(t,e){return e.payload.user})),Object(Z.a)(o,at.a.logoutSuccess,(function(){return ot})),Object(Z.a)(o,at.a.getUserSuccess,(function(t,e){return e.payload})),o)),ut=Object(Y.c)(null,(s={},Object(Z.a)(s,at.a.registerSuccess,(function(t,e){return e.payload.token})),Object(Z.a)(s,at.a.loginSuccess,(function(t,e){return e.payload.token})),Object(Z.a)(s,at.a.logoutSuccess,(function(){return null})),s)),it=Object(Y.c)(null,(u={},Object(Z.a)(u,at.a.registerError,(function(t,e){return e.payload})),Object(Z.a)(u,at.a.loginError,(function(t,e){return e.payload})),Object(Z.a)(u,at.a.logoutError,(function(t,e){return e.payload})),Object(Z.a)(u,at.a.getUserError,(function(t,e){return e.payload})),u)),bt=Object(Y.c)(!1,(i={},Object(Z.a)(i,at.a.registerSuccess,(function(){return!0})),Object(Z.a)(i,at.a.loginSuccess,(function(){return!0})),Object(Z.a)(i,at.a.getUserSuccess,(function(){return!0})),Object(Z.a)(i,at.a.registerError,(function(){return!1})),Object(Z.a)(i,at.a.loginError,(function(){return!1})),Object(Z.a)(i,at.a.getUserError,(function(){return!1})),Object(Z.a)(i,at.a.logoutSuccess,(function(){return!1})),i)),lt=Object($.b)({user:st,isAuthenticated:bt,token:ut,error:it}),jt=Object(V.a)(Object(Y.d)({serializableCheck:{ignoredActions:[K.a,K.f,K.b,K.c,K.d,K.e]}})),dt={key:"token",storage:X.a,whitelist:["token"]},Ot=Object(Y.a)({reducer:{auth:Object(K.g)(dt,lt),contacts:rt},middleware:jt}),ft={store:Ot,persistor:Object(K.h)(Ot)};n(92);d.a.render(Object(y.jsx)(l.a.StrictMode,{children:Object(y.jsx)(m.a,{store:ft.store,children:Object(y.jsx)(H.a,{persistor:ft.persistor,children:Object(y.jsx)(A.a,{children:Object(y.jsx)(D,{})})})})}),document.getElementById("root"))}},[[93,2,3]]]);
//# sourceMappingURL=main.9baafd54.chunk.js.map