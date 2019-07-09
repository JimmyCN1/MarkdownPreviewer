(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{199:function(e,t){},217:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(59),o=a.n(i),l=(a(69),a(14)),c=a(15),s=a(17),d=a(16),u=a(18);a(70);var h=function(e){return r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",name:e.orientation,style:{border:"none"},onClick:function(){"orientation"===e.name||"order"===e.name&&e.changeOrder()}},r.a.createElement("i",{className:e.img}))};var m=function(e){var t=e.changeOrder;return r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",padding:"0px 10px",backgroundColor:"#FFC472"}},r.a.createElement("h1",null,r.a.createElement("a",{href:"./index.html",style:{textDecoration:"none",color:"black"}},"Markdown Previewer")),r.a.createElement(h,{name:"order",img:"fas fa-exchange-alt fa-2x",changeOrder:t}))},x=a(19),f=(a(71),a(63)),p=a(60),g=a.n(p);var v=function(e){return r.a.createElement("button",{type:"button",className:"btn btn-outline-dark",style:{border:"none"},onClick:function(t){e.handleButton(e.name)}},r.a.createElement("i",{className:e.icon}))};var b=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",width:"90%",maxWidth:"700px",padding:"0px 10px"}},r.a.createElement("h3",null,"Editor"),r.a.createElement(v,{name:"undo",icon:"fas fa-undo-alt",handleButton:e.handleButton}),r.a.createElement(v,{name:"redo",icon:"fas fa-redo-alt",handleButton:e.handleButton}),r.a.createElement(v,{name:"trash",icon:"far fa-trash-alt",handleButton:e.handleButton})),r.a.createElement("textarea",{rows:"40",style:{rows:"200",width:"90%",maxWidth:"700px",height:"90%",autofocus:"autofocus",overflow:"auto",margin:"0px 10px"},value:e.text,onChange:e.handleChange,placeholder:"Please type your markdown here...",autoFocus:!0}))},E=a(61),y=a(62),w=a.n(y);var O=function(e){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:"0px 10px"}},r.a.createElement("header",{style:{width:"90%",maxWidth:"700px",padding:"0px"}},r.a.createElement("h3",null,"Previewer")),r.a.createElement("div",{style:{width:"95%",maxWidth:"700px",backgroundColor:"white"}}," ",w()(e.preview)," "),r.a.createElement("div",{style:{alignSelf:"flex-start"}},r.a.createElement(E.Animated,{animationIn:"pulse"},r.a.createElement("div",{className:"btn btn-outline-dark",style:{border:"none",textAlign:"left",maxWidth:"100px",justifySelf:"left"}},r.a.createElement("i",{className:"fas fa-arrow-left fa-2x",style:{paddingTop:"5px"}}),r.a.createElement("h5",{style:{textAlign:"left"}},"Drag this divider to adjust the view")))))},S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){var t=a.state,n=t.pastTextStates,r=t.currentIndex,i=t.undoing;if(i){if(i){var o=r+1;a.setState({text:e.target.value,pastTextStates:[].concat(Object(x.a)(n.slice(0,o)),[e.target.value]),currentIndex:o,undoing:!1})}}else a.setState({text:e.target.value,pastTextStates:[].concat(Object(x.a)(a.state.pastTextStates),[e.target.value]),currentIndex:r+=1})},a.handleButton=function(e){var t=a.state,n=t.pastTextStates,r=t.currentIndex;switch(e){case"undo":r>0&&a.setState({text:n[r-1],currentIndex:r-=1,undoing:!0});break;case"redo":r>=0&&r<n.length-1&&a.setState({text:n[r+1],currentIndex:r+=1,undoing:!0});break;case"trash":a.setState({text:"",pastTextStates:[].concat(Object(x.a)(n),[""]),currentIndex:r+=1})}return document.querySelector("textarea").focus(),""},a.state={text:"",pastTextStates:[""],currentIndex:0,undoing:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=(new g.a).render(this.state.text),t=this.state.text,a=r.a.createElement(b,{text:t,handleChange:this.handleChange,handleButton:this.handleButton});return r.a.createElement(f.a,{split:"vertical",minSize:200,maxSize:-200,defaultSize:"50%"},this.props.editorFirst&&a,r.a.createElement(O,{preview:e}),!this.props.editorFirst&&a)}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).changeOrder=function(){a.setState({editorFirst:!a.state.editorFirst})},a.state={orientation:"verticle",editorFirst:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.orientation,a=e.editorFirst;return r.a.createElement("div",null,r.a.createElement(m,{orientation:t,editorFirst:a,changeOrder:this.changeOrder}),r.a.createElement(S,{orientation:t,editorFirst:a}))}}]),t}(r.a.Component);o.a.render(r.a.createElement(j,null),document.getElementById("root"))},64:function(e,t,a){e.exports=a(217)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.e5eb8870.chunk.js.map