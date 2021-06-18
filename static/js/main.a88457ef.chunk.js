(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{17:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(6),i=n.n(s),a=(n(17),n(3)),u=(n(24),n(4)),o=(n(25),n(26),n(27),n(1)),l=function(e){return Object(o.jsx)("div",{className:"cell",onClick:e.handleClick,children:e.value})},d=function(e){var t=e.cells,n=e.handleClick;return Object(o.jsx)("div",{className:"field",children:t.map((function(e,t){return Object(o.jsx)(l,{value:e,handleClick:function(){return n(t)}},t)}))})},j=n(12),O=n(2),b={field:Array(9).fill(null)},f="START_NEW_GAME",h="CHANGE_FIELD",p=function(e){var t,n=e.dispatch,r=e.isAgainstTheComputer,s=e.xIsRunMenu,i=e.xIsRun,l=e.setxIsRun,O=e.turn,b=e.setTurn,p=e.setScoreX,v=e.setScoreO,x=e.setScoreDraw,m=e.scoreX,g=e.scoreO,_=e.scoreDraw,y=Object(a.c)((function(e){return e.field.field})),I=function(){var e;l(s),b([]),n({type:f,payload:e})},N=function(e,t){n(function(e,t){return{type:h,payload:e,index:t}}(e,t))},R=void 0;i?(t="O",R="X"):(t="X",R="O");for(var T=Object(u.a)(y),w=0;w<T.length;w++)null===T[w]&&(T[w]=w);var A=function(e,t){return e[0]===t&&e[1]===t&&e[2]===t||e[3]===t&&e[4]===t&&e[5]===t||e[6]===t&&e[7]===t&&e[8]===t||e[0]===t&&e[3]===t&&e[6]===t||e[1]===t&&e[4]===t&&e[7]===t||e[2]===t&&e[5]===t&&e[8]===t||e[0]===t&&e[4]===t&&e[8]===t||e[2]===t&&e[4]===t&&e[6]===t},C=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var c=Object(j.a)(t[n],3),r=c[0],s=c[1],i=c[2];if(e[r]&&e[r]===e[s]&&e[r]===e[i])return e[r]}return null}(y);Object(c.useEffect)((function(){"X"===C?p():"O"===C&&v(),9!==O.length||C||x()}),[O.length,C]);var X=function e(n,c){var r=function(e){return e.filter((function(e){return"O"!=e&&"X"!=e}))}(n);if(A(n,R))return{score:-1};if(A(n,t))return{score:1};if(0===r.length)return{score:0};for(var s=[],i=0;i<r.length;i++){var a=[];if(n[r[i]]=c,a.idx=r[i],c===R){var u=e(n,t);a.score=u.score}if(c===t){var o=e(n,R);a.score=o.score}n[r[i]]=a.idx,s.push(a)}var l=null;if(c===t)for(var d=-1/0,j=0;j<s.length;j++)s[j].score>d&&(d=s[j].score,l=j);else for(var O=1/0,b=0;b<s.length;b++)s[b].score<O&&(O=s[b].score,l=b);return s[l]};return Object(o.jsxs)("div",{className:"game-wrapper",children:[Object(o.jsxs)("div",{className:"score",children:[Object(o.jsxs)("div",{className:"score_descr",children:[Object(o.jsx)("div",{children:"X"}),Object(o.jsx)("div",{children:"Draw"}),Object(o.jsx)("div",{children:"O"})]}),Object(o.jsxs)("div",{className:"score_item",children:[Object(o.jsx)("div",{children:m}),Object(o.jsx)("div",{children:_}),Object(o.jsx)("div",{children:g})]})]}),Object(o.jsx)("button",{className:"start-game__btn",onClick:function(){return I()},children:"Start New Game"}),Object(o.jsx)(d,{cells:y,handleClick:r?function(e){var n=Object(u.a)(y),c=O;if(C||n[e])return null;if(n[e]=i?"X":"O",N(R,e),c.push(n[e]),b(c),9===c.length){if(C)return null}else!function(e){var n=Object(u.a)(e),c=O;T=Object(u.a)(n);for(var r=0;r<n.length;r++)null===n[r]&&(T[r]=r);var s=X(T,t);if(C||n[s.idx])return null;n[s.idx]=i?"O":"X",N(t,s.idx),c.push(n[s.idx]),b(c)}(n)}:function(e){var t=Object(u.a)(y);if(C||t[e])return null;N(i?"X":"O",e),l(!i);var n=O;n.push(t[e]),b(n)}}),Object(o.jsx)("p",{className:"field__info",children:C?"".concat(C," is the winner!"):9===O.length?"Draw!":"Your turn: ".concat(i?"X":"O")})]})},v=(n(29),function(e){var t=e.disabledInput,n=e.setMenuActive,c=e.isAgainstTheComputer,r=e.setIsAgainstTheComputer,s=e.xIsRunMenu,i=e.setxIsRunMenu,a=e.setxIsRun,u=e.setTurn,l=e.resetScore;return Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("div",{className:"close-menu__btn",onClick:function(){return n(!1)},children:"X"}),Object(o.jsxs)("div",{className:"main-menu__content",children:[Object(o.jsx)("div",{className:"title",children:Object(o.jsx)("h1",{children:"Tic Tac Toe Settings"})}),t?Object(o.jsx)("div",{className:"apply-changes",children:"Please, start a new game to change the settings"}):Object(o.jsx)(o.Fragment,{}),Object(o.jsxs)("div",{className:"content-item chekbox-content__item",children:[Object(o.jsx)("label",{htmlFor:"computerTurn",children:"Player VS Bot: "}),Object(o.jsx)("input",{id:"computerTurn",type:"checkbox",disabled:t,checked:c,onChange:function(e){r(e.target.checked),u([]),l()}})]}),Object(o.jsxs)("div",{className:"content-item chekbox-content__item",children:[Object(o.jsx)("label",{htmlFor:"xIsRun",children:"X runs first: "}),Object(o.jsx)("input",{className:"chekbox-content__item",id:"xIsRun",type:"checkbox",disabled:t,checked:s,onChange:function(e){i(e.target.checked),a(e.target.checked),l()}})]})]})]})}),x={draw:0,scoreX:0,scoreO:0},m="ADD_X",g="ADD_O",_="ADD_DRAW",y="RESET_SCORE",I={isAgainstTheComputer:!0,menuActive:!1,xIsRunMenu:!0,xIsRun:!0,turn:[]},N="BOT_ACTIVE",R="MENU_ACTIVE",T="X_IS_RUN_MENU",w="X_IS_RUN",A="SET_TURN";var C=function(){var e=Object(a.b)(),t=Object(a.c)((function(e){return e.settings.isAgainstTheComputer})),n=Object(a.c)((function(e){return e.settings.menuActive})),c=function(t){e(function(e){return{type:R,payload:e}}(t))},r=Object(a.c)((function(e){return e.settings.xIsRunMenu})),s=Object(a.c)((function(e){return e.settings.turn})),i=function(t){e(function(e){return{type:A,payload:e}}(t))},u=Object(a.c)((function(e){return e.settings.xIsRun})),l=function(t){e(function(e){return{type:w,payload:e}}(t))},d=!1;d=s.length>=1;var j=Object(a.c)((function(e){return e.score.draw})),O=Object(a.c)((function(e){return e.score.scoreX})),b=Object(a.c)((function(e){return e.score.scoreO}));return Object(o.jsxs)("div",{className:"main-page",children:[Object(o.jsx)("div",{className:"menu__settings-logo",onClick:function(){return c(!n)},children:Object(o.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/768px-Windows_Settings_app_icon.png",alt:""})}),Object(o.jsx)("div",{className:n?"main-menu active":"main-menu",children:Object(o.jsx)(v,{disabledInput:d,setMenuActive:c,isAgainstTheComputer:t,setIsAgainstTheComputer:function(t){e(function(e){return{type:N,payload:e}}(t))},xIsRunMenu:r,setxIsRunMenu:function(t){e(function(e){return{type:T,payload:e}}(t))},setxIsRun:l,setTurn:i,resetScore:function(){var t;e({type:y,payload:t})}})}),Object(o.jsx)(p,{dispatch:e,isAgainstTheComputer:t,xIsRunMenu:r,xIsRun:u,setxIsRun:l,turn:s,setTurn:i,scoreDraw:j,setScoreDraw:function(){var t;e({type:_,payload:t})},scoreX:O,setScoreX:function(){var t;e({type:m,payload:t})},scoreO:b,setScoreO:function(){var t;e({type:g,payload:t})}})]})},X=n(8),k=Object(X.a)({score:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(O.a)(Object(O.a)({},e),{},{scoreX:e.scoreX+1});case g:return Object(O.a)(Object(O.a)({},e),{},{scoreO:e.scoreO+1});case _:return Object(O.a)(Object(O.a)({},e),{},{draw:e.draw+1});case y:return Object(O.a)(Object(O.a)({},e),{},{draw:e.draw=0,scoreX:0,scoreO:0});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(O.a)(Object(O.a)({},e),{},{isAgainstTheComputer:t.payload});case R:return Object(O.a)(Object(O.a)({},e),{},{menuActive:t.payload});case T:return Object(O.a)(Object(O.a)({},e),{},{xIsRunMenu:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{xIsRun:t.payload});case A:return Object(O.a)(Object(O.a)({},e),{},{turn:t.payload});default:return e}},field:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(O.a)(Object(O.a)({},e),{},{field:b.field});case h:var n=Object(u.a)(e.field);return n[t.index]=t.payload,Object(O.a)(Object(O.a)({},e),{},{field:n});default:return e}}}),S=Object(X.b)(k);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(a.a,{store:S,children:Object(o.jsx)(C,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a88457ef.chunk.js.map