(this["webpackJsonpfrontend-compilation"]=this["webpackJsonpfrontend-compilation"]||[]).push([[0],{82:function(t,e,n){},83:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){},96:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var a,i,s,r,c,o,l=n(0),u=n.n(l),d=n(61),h=n.n(d),b=(n(82),n(83),n(26)),j=n(71),p=n(41),f=n(34),m=f.a.nav(a||(a=Object(b.a)(["\nbackground: #63D471;\nheight: 85px;\ndisplay: flex;\njustify-content: space-between;\npadding: 0.2rem calc((100vw - 1000px) / 2);\nz-index: 12;\n/* Third Nav */\n/* justify-content: flex-start; */\n"]))),v=Object(f.a)(p.b)(i||(i=Object(b.a)(["\ncolor: #808080;\ndisplay: flex;\nalign-items: center;\ntext-decoration: none;\npadding: 0 1rem;\nheight: 100%;\ncursor: pointer;\n&.active {\n\tcolor: #000000;\n}\n"]))),O=Object(f.a)(j.a)(s||(s=Object(b.a)(["\ndisplay: none;\ncolor: #808080;\n@media screen and (max-width: 768px) {\n\tdisplay: block;\n\tposition: absolute;\n\ttop: 0;\n\tright: 0;\n\ttransform: translate(-100%, 75%);\n\tfont-size: 1.8rem;\n\tcursor: pointer;\n}\n"]))),x=f.a.div(r||(r=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: -24px;\n/* Second Nav */\n/* margin-right: 24px; */\n/* Third Nav */\n/* width: 100vw;\nwhite-space: nowrap; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),k=f.a.nav(c||(c=Object(b.a)(["\ndisplay: flex;\nalign-items: center;\nmargin-right: 24px;\n/* Third Nav */\n/* justify-content: flex-end;\nwidth: 100vw; */\n@media screen and (max-width: 768px) {\n\tdisplay: none;\n}\n"]))),y=Object(f.a)(p.b)(o||(o=Object(b.a)(["\nborder-radius: 4px;\nbackground: #808080;\npadding: 10px 22px;\ncolor: #000000;\noutline: none;\nborder: none;\ncursor: pointer;\ntransition: all 0.2s ease-in-out;\ntext-decoration: none;\n/* Second Nav */\nmargin-left: 24px;\n&:hover {\n\ttransition: all 0.2s ease-in-out;\n\tbackground: #fff;\n\tcolor: #808080;\n}\n"]))),g=n(1),C=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(m,{children:[Object(g.jsx)(O,{}),Object(g.jsxs)(x,{children:[Object(g.jsx)(v,{to:"/",activeStyle:!0,children:"Home"}),Object(g.jsx)(v,{to:"/drum",activeStyle:!0,children:"Drum"}),Object(g.jsx)(v,{to:"/quote",activeStyle:!0,children:"Quote Generator"}),Object(g.jsx)(v,{to:"/calc",activeStyle:!0,children:"Calculator"}),Object(g.jsx)(v,{to:"/markdown",activeStyle:!0,children:"Markdown to HTML"}),Object(g.jsx)(v,{to:"/timer",activeStyle:!0,children:"Timer"})]}),Object(g.jsx)(k,{children:Object(g.jsx)(y,{to:"/signin",children:"Sign In"})})]})})},S=n(12),w=n(14),T=n(58),I=n(22),_=n(23),A=n(25),M=n(24),L=(n(91),[[{AC:"clear"},{"/":"divide"},{"*":"multiply"}],[{7:"seven"},{8:"eight"},{9:"nine"},{"-":"subtract"}],[{4:"four"},{5:"five"},{6:"six"},{"+":"add"}],[{1:"one"},{2:"two"},{3:"three"},{"=":"equals"}],[{0:"zero"},{".":"decimal"}]]),q=function(t){return"+"===t||"*"===t||"/"===t||"-"===t},N=function(t){return Object(g.jsx)("button",{className:"square",onClick:t.onClick,id:t.id,children:"*"===t.value?"x":t.value})},B=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"renderSquare",value:function(t){var e=this,n=Object.keys(t)[0];return Object(g.jsx)(N,{value:n,id:t[n],onClick:function(){return e.props.onClick(n)}})}},{key:"render",value:function(){var t,e=[],n=Object(T.a)(this.props.squares);try{for(n.s();!(t=n.n()).done;){var a,i=t.value,s=Object(T.a)(i);try{for(s.s();!(a=s.n()).done;){var r=a.value;e.push(this.renderSquare(r))}}catch(c){s.e(c)}finally{s.f()}}}catch(c){n.e(c)}finally{n.f()}return Object(g.jsx)("div",{id:"buttons",children:e})}}]),n}(u.a.Component),P=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(t){var a;return Object(I.a)(this,n),(a=e.call(this,t)).state={grid:L,display:"0",calculation:"",inputs:["0"],result:!1},a.handleClick=a.handleClick.bind(Object(w.a)(a)),a}return Object(_.a)(n,[{key:"handleClick",value:function(t){if("0"===this.state.display){if("0"===t||"AC"===t)return;q(t)||"."==t?this.setState((function(e){return{inputs:e.inputs.concat([t]),display:e.display+t,calculation:"0"+t}})):this.setState((function(e){return{inputs:[t],display:t,calculation:t}}))}else{if("."==t&&this.state.inputs.lastIndexOf(".")>=function(t){var e=Math.max(t.lastIndexOf("+"),t.lastIndexOf("-"),t.lastIndexOf("*"),t.lastIndexOf("/"));return-1==e?t.includes(".")?-1:t.length:e}(this.state.inputs))return;if("="===t)try{var e=(n=this.state.inputs,new Function("return "+n.join(""))());this.setState((function(t){return{display:String(e),calculation:t.calculation+"="+String(e),inputs:[String(e)],result:!0}}))}catch(a){this.setState({display:"Error"})}else"AC"===t?this.setState({inputs:["0"],display:"0",calculation:"",result:!1}):q(this.state.inputs[this.state.inputs.length-1])&&q(t)&&"-"!==t&&!this.state.result?this.setState({inputs:this.state.inputs.slice(0,this.state.inputs.length-1).concat([t]),display:this.state.display.slice(0,-1)+t,calculation:this.state.calculation.slice(0,-1)+t}):this.state.result?(this.setState({result:!1}),q(t)?this.setState((function(t){return{calculation:t.display}})):q(t)||"."==t?this.setState((function(e){return{inputs:["0"].concat([t]),display:"0"+t,calculation:"0"+t}})):this.setState({inputs:[t],display:t,calculation:t})):this.setState((function(e){return{inputs:e.inputs.concat([t]),display:e.display+t,calculation:e.calculation+t}}))}var n}},{key:"render",value:function(){var t=this;return console.log(this.state),Object(g.jsxs)("div",{id:"calculator",children:[Object(g.jsx)("div",{id:"calculation",children:this.state.calculation}),Object(g.jsx)("div",{id:"display",children:this.state.display}),Object(g.jsx)(B,{squares:this.state.grid,onClick:function(e){return t.handleClick(e)}})]})}}]),n}(u.a.Component),D=n(13),E=(n(92),n(70)),Q=n(124),z=n(122),F=n(120),H=n(119),R=n.p+"static/media/bass.cbe998cb.mp3",V=n.p+"static/media/closed-hihat.395f033e.mp3",W=n.p+"static/media/cymbal-crash.a855bbbf.mp3",U=n.p+"static/media/cymbal-scrape.1a764715.mp3",J=n.p+"static/media/floor-tom.37328fc6.mp3",Y=n.p+"static/media/medium-tom.1fd14687.mp3",G=n.p+"static/media/open-hihat.9dd64439.mp3",X=n.p+"static/media/snare.bedcdb90.mp3",Z=n.p+"static/media/sticks.26a3b56c.mp3",K=n(123),$={Q:["bass",R],W:["closed_hihat",V],E:["cymbal_crash",W],A:["cymbal_scrape",U],S:["floor_tom",J],D:["medium_tom",Y],Z:["open_hihat",G],X:["snare",X],C:["sticks",Z]},tt=E.a(),et=function(t){return Object(g.jsxs)("div",{children:[Object(g.jsx)(Q.a,{id:"continuous-slider",gutterBottom:!0,children:"Volume"}),Object(g.jsx)(z.a,{container:!0,spacing:2,children:Object(g.jsx)(z.a,{item:!0,xs:!0,children:Object(g.jsx)(F.a,{value:t.value,onChange:t.onChange,"aria-label":"Volume",min:0,max:100,valueLabelDisplay:"auto"})})})]})},nt=function(t){return Object(g.jsx)("button",{className:"drum-pad",id:t.value,onClick:t.onClick,children:t.keypress})},at=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(){return Object(I.a)(this,n),e.apply(this,arguments)}return Object(_.a)(n,[{key:"renderPad",value:function(t){var e=this;return Object(g.jsx)(nt,{value:t[1][0],keypress:t[0],onClick:function(){return e.props.onClick(t[1][0],t[1][1])}},t[1][0])}},{key:"render",value:function(){for(var t=[],e=0,n=Object.entries(this.props.board);e<n.length;e++){var a=Object(D.a)(n[e],2),i=a[0],s=a[1];t.push(this.renderPad([i,s]))}return Object(g.jsx)("div",{id:"board",children:t})}}]),n}(u.a.Component),it=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(t){var a;return Object(I.a)(this,n),(a=e.call(this,t)).state={board:$,display:"",on:!1,volume:40},a.handlePress=a.handlePress.bind(Object(w.a)(a)),a.handleClick=a.handleClick.bind(Object(w.a)(a)),a.handleChange=a.handleChange.bind(Object(w.a)(a)),a.handleVolumeChange=a.handleVolumeChange.bind(Object(w.a)(a)),a}return Object(_.a)(n,[{key:"handlePress",value:function(t){if(this.state.on){var e=this.state.board[t.key.toUpperCase()];if(e){this.setState({display:e[0]});var n=new Audio(e[1]);n.volume=this.state.volume/100,n.play().catch((function(t){console.log("Audio unable to load "+t)}))}}}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handlePress,!1)}},{key:"handleChange",value:function(){this.setState((function(t){return{on:!t.on,display:""}}))}},{key:"handleVolumeChange",value:function(t,e){this.setState({volume:e})}},{key:"handleClick",value:function(t,e){if(this.state.on){this.setState({display:t});var n=new Audio(e);n.volume=this.state.volume/100,n.play().catch((function(t){console.log("Audio failed to load: "+t)}))}}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{id:"drum-machine",children:[Object(g.jsx)(at,{board:this.state.board,onClick:function(e,n){return t.handleClick(e,n)}}),Object(g.jsxs)("div",{id:"controls",children:[Object(g.jsx)(Q.a,{component:"div",children:Object(g.jsxs)(z.a,{component:"label",container:!0,alignItems:"center",spacing:1,children:[Object(g.jsx)(z.a,{item:!0,children:"Off"}),Object(g.jsx)(z.a,{item:!0,children:Object(g.jsx)(K.a,{theme:tt,children:Object(g.jsx)(H.a,{onChange:this.handleChange,name:"switch"})})}),Object(g.jsx)(z.a,{item:!0,children:"On"})]})}),Object(g.jsx)("div",{id:"display",children:this.state.display}),Object(g.jsx)(et,{value:this.state.volume,onChange:function(e,n){return t.handleVolumeChange(e,n)}})]})]})}}]),n}(u.a.Component),st=(n(93),n(68)),rt=n.n(st),ct=n(69),ot=n.n(ct);function lt(t){return{__html:rt.a.sanitize(ot()(t,{gfm:!0,breaks:!0}),{USE_PROFILES:{html:!0}})}}function ut(t){return Object(g.jsx)("textarea",{id:"editor",value:t.input,onChange:t.onChange})}function dt(t){return Object(g.jsx)("div",{id:"preview",dangerouslySetInnerHTML:t.text})}var ht=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(t){var a;return Object(I.a)(this,n),(a=e.call(this,t)).state={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n",output:{__html:""}},a.handleChange=a.handleChange.bind(Object(w.a)(a)),a}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.setState((function(t){return{output:lt(t.input)}}))}},{key:"handleChange",value:function(t){var e=t.target.value;this.setState({input:e,output:lt(e)})}},{key:"render",value:function(){var t=this;return Object(g.jsxs)("div",{id:"container",children:[Object(g.jsx)(ut,{input:this.state.input,onChange:function(e){return t.handleChange(e)}}),Object(g.jsx)(dt,{text:this.state.output})]})}}]),n}(u.a.Component),bt=(n(94),n.p+"static/media/beep.2af29179.mp3"),jt=function(t){return new Date(1e3*t).toISOString().substring(14,19)},pt=function(t){return Object(g.jsxs)("div",{className:"adjustment",children:[Object(g.jsx)("button",{id:"".concat(t.label,"-decrement"),onClick:function(){return t.onClick(t.label,"dec")},children:"\u2193"}),Object(g.jsx)("span",{id:"".concat(t.label,"-length"),children:jt(t.time)}),Object(g.jsx)("button",{id:"".concat(t.label,"-increment"),onClick:function(){return t.onClick(t.label,"inc")},children:"\u2191"})]})},ft=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(t){var a;return Object(I.a)(this,n),(a=e.call(this,t)).audio=new Audio(bt),a.state={break:300,session:1500,setting:"Session",belowMinute:!1,start:!1},a.sessionTimer=a.state.session,a.breakTimer=a.state.break,a.handleClick=a.handleClick.bind(Object(w.a)(a)),a.handleSession=a.handleSession.bind(Object(w.a)(a)),a.handleStart=a.handleStart.bind(Object(w.a)(a)),a.handleReset=a.handleReset.bind(Object(w.a)(a)),a}return Object(_.a)(n,[{key:"handleClick",value:function(t,e){if("break"===t)if("inc"===e){if(3600===this.state.break)return;this.setState({break:this.state.break+60}),this.breakTimer+=60}else{if(60===this.state.break)return;this.setState({break:this.state.break-60}),this.breakTimer-=60}else if("inc"===e){if(3600===this.state.session)return;this.setState({session:this.state.session+60}),this.sessionTimer+=60}else{if(60===this.state.session)return;this.setState({session:this.state.session-60}),this.sessionTimer-=60}}},{key:"handleReset",value:function(){this.audio.load(),this.setState({break:300,session:1500,setting:"Session",belowMinute:!1,start:!1}),this.sessionTimer=1500,this.breakTimer=300}},{key:"handleStart",value:function(){var t=this;this.setState({start:!this.state.start},(function(){"Session"===t.state.setting&&t.state.start?t.handleSession():t.handleBreak()}))}},{key:"handleSession",value:function(){var t=this,e=setInterval((function(){t.state.start?t.setState((function(t){return{session:t.session-1}})):clearInterval(e),t.state.session<60&&t.setState({belowMinute:!0}),t.state.session<=0&&(clearInterval(e),t.audio.play(),t.setState({setting:"Break",session:t.sessionTimer,belowMinute:!1}),t.handleBreak())}),1e3)}},{key:"handleBreak",value:function(){var t=this,e=setInterval((function(){t.state.start?t.setState((function(t){return{break:t.break-1}})):clearInterval(e),t.state.break<60&&t.setState({belowMinute:!0}),t.state.break<=0&&(clearInterval(e),t.audio.play(),t.setState({setting:"Session",break:t.breakTimer,belowMinute:!1}),t.handleSession())}),1e3)}},{key:"render",value:function(){var t=this.state.belowMinute?"#8B0000":"#000000";return Object(g.jsxs)("div",{id:"Clock",children:[Object(g.jsx)("div",{id:"title",children:"25 + 5 Clock"}),Object(g.jsxs)("div",{id:"break-label",children:["Break Length",Object(g.jsx)(pt,{time:this.breakTimer,onClick:this.handleClick,label:"break"})]}),Object(g.jsxs)("div",{id:"session-label",children:["Session Length",Object(g.jsx)(pt,{time:this.sessionTimer,onClick:this.handleClick,label:"session"})]}),Object(g.jsxs)("div",{id:"timer",style:{color:t},children:[Object(g.jsx)("div",{id:"timer-label",children:this.state.setting}),Object(g.jsx)("div",{id:"time-left",children:"Session"===this.state.setting?jt(this.state.session):jt(this.state.break)})]}),Object(g.jsx)("button",{id:"start_stop",onClick:this.handleStart,children:"Start/Stop"}),Object(g.jsx)("button",{id:"reset",onClick:this.handleReset,children:"Reset"})]})}}]),n}(u.a.Component),mt=n(43),vt=n.n(mt),Ot=n(59),xt=(n(96),["#420420","#008080","#8a2be2","#047806","#000080"]),kt=function(t){Object(A.a)(n,t);var e=Object(M.a)(n);function n(t){var a;return Object(I.a)(this,n),(a=e.call(this,t)).state={author:"",content:"",index:0},a.randomQuote=a.randomQuote.bind(Object(w.a)(a)),a}return Object(_.a)(n,[{key:"randomQuote",value:function(){var t=Object(Ot.a)(vt.a.mark((function t(){var e,n;return vt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.quotable.io/random");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState((function(t){return{author:n.author,content:n.content,index:(t.index+1)%xt.length}}));case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=Object(Ot.a)(vt.a.mark((function t(){var e,n;return vt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.quotable.io/random");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,this.setState({author:n.author,content:n.content});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=xt[this.state.index];return Object(g.jsx)("div",{id:"page",style:{backgroundColor:t},children:Object(g.jsxs)("div",{id:"quote-box",children:[Object(g.jsx)("blockquote",{id:"text",style:{color:t},children:this.state.content}),Object(g.jsxs)("cite",{id:"author",style:{color:t},children:["- ",this.state.author]}),Object(g.jsx)("button",{id:"new-quote",className:"button",style:{backgroundColor:t},onClick:this.randomQuote,children:"New Quote"}),Object(g.jsx)("a",{href:"https://twitter.com/share?ref_src=twsrc%5Etfw",className:"twitter-share-button fa fa-twitter","data-show-count":"false",children:"Tweet"}),Object(g.jsx)("script",{async:!0,src:"https://platform.twitter.com/widgets.js",charset:"utf-8"})]})})}}]),n}(u.a.Component);var yt=function(){return Object(g.jsxs)(p.a,{children:[Object(g.jsx)(C,{}),Object(g.jsxs)(S.c,{children:[Object(g.jsx)(S.a,{path:"/",exact:!0,component:it}),Object(g.jsx)(S.a,{path:"/drum",component:it}),Object(g.jsx)(S.a,{path:"/quote",component:kt}),Object(g.jsx)(S.a,{path:"/calc",component:P}),Object(g.jsx)(S.a,{path:"/markdown",component:ht}),Object(g.jsx)(S.a,{path:"/timer",component:ft})]})]})},gt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),s(t),r(t)}))};n(97);h.a.render(Object(g.jsx)(u.a.StrictMode,{children:Object(g.jsx)(yt,{})}),document.getElementById("root")),gt()}},[[98,1,2]]]);
//# sourceMappingURL=main.cc471faa.chunk.js.map