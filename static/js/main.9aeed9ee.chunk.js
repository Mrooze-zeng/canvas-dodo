(this["webpackJsonpcanvas-dodo"]=this["webpackJsonpcanvas-dodo"]||[]).push([[0],{14:function(t,i,e){},16:function(t,i,e){"use strict";e.r(i);var n=e(7),o=e.n(n),a=e(9),h=e.n(a),s=(e(14),e(1)),c=e(3),r=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.type,n=void 0===e?"event":e,o=i.data,a=void 0===o?{}:o;Object(s.a)(this,t),this.type=n,this.data=a,this.isStopPropagation=!1}return Object(c.a)(t,[{key:"stopPropagation",value:function(){this.isStopPropagation=!0}}]),t}(),l=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.name,n=void 0===e?this.constructor.name:e,o=i.bgColor,a=void 0===o?"#ff0000":o,h=i.strokeColor,c=void 0===h?"#00ff00":h,r=i.textColor,l=void 0===r?"#ffa500":r,v=i.lineWidth,d=void 0===v?5:v,u=i.activeStyle,y=void 0===u?"#59c7f9":u,g=i.at,f=void 0===g?{x:0,y:0}:g;Object(s.a)(this,t),this.type=this.constructor.name,this.id=this._uuid(),this.eventListener=new Map,this.ctx=null,this.active=!1,this.name=n,this.bgColor=a,this.strokeColor=c,this.textColor=l,this.lineWidth=d,this.activeStyle=y,this.at=f}return Object(c.a)(t,[{key:"_uuid",value:function(){return Date.now().toString(36)+Math.random().toString(36).slice(2)}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.ctx=t,this.ctx}},{key:"moveBy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,e=void 0===i?0:i,n=t.y,o=void 0===n?0:n;return this.at.x+=e,this.at.y+=o,this}},{key:"moveTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.x,e=void 0===i?0:i,n=t.y,o=void 0===n?0:n;return this.at.x=e,this.at.y=o,this}},{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.bgColor,e=void 0===i?this.bgColor:i,n=t.strokeColor,o=void 0===n?this.strokeColor:n,a=t.textColor,h=void 0===a?this.textColor:a,s=t.lineWidth,c=void 0===s?this.lineWidth:s;this.bgColor=e,this.strokeColor=o,this.textColor=h,this.lineWidth=c}},{key:"setActive",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.active=t}},{key:"drawActive",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=this.ctx;i.beginPath(),i.lineWidth=2,i.strokeStyle=this.activeStyle;for(var e=0;e<t.length;e++){var n=t[e];0!==e?i.lineTo(n.x,n.y):i.moveTo(n.x,n.y)}i.closePath(),i.stroke()}},{key:"on",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};this.eventListener.set(t,i)}},{key:"off",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.eventListener.delete(t)}},{key:"isPointInRegion",value:function(){return!1}},{key:"trigger",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1?arguments[1]:void 0,e=this.eventListener.get(t)||function(){};this.setActive(!0),e.call(this,i)}}]),t}(),v=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=i.width,n=void 0===e?250:e,o=i.height,a=void 0===o?250:o;Object(s.a)(this,t),this.ratio=window.devicePixelRatio||1,this.width=n,this.height=a,this.canvas=document.createElement("canvas"),this.canvas.width=n,this.canvas.height=a,this.canvas.style.width=n+"px",this.canvas.style.height=a+"px",this.canvas.tabIndex=1e3,this.canvas.style.outline="none",this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.ratio,this.ratio),this.shapes=[],this.drawGrid(this.ctx)}return Object(c.a)(t,[{key:"getContainer",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement;if(!t instanceof Element)throw new Error("Mount point should be set");return t}},{key:"drawGrid",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"lightgray",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5,a=t.lineWidth;t.lineWidth=o;var h=function(i){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},h=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},s=o,c=0;s<e;s+=i,c++)t.beginPath(),a(s),h(s),t.strokeStyle=c%5===0?"darkgrey":n,t.stroke()};h(i,t.canvas.width,(function(i){t.moveTo(i,0)}),(function(i){t.lineTo(i,t.canvas.height)})),h(e,t.canvas.height,(function(i){t.moveTo(0,i)}),(function(i){t.lineTo(t.canvas.width,i)})),t.lineWidth=a}},{key:"mount",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=this.getContainer(t);i.querySelector("canvas")||(i.appendChild(this.canvas),this.setupCanvasEvent())}},{key:"setupCanvasEvent",value:function(){this.canvas.addEventListener("click",this.handleClick.bind(this)),this.canvas.addEventListener("keydown",this.handleKeyDown.bind(this))}},{key:"handleKeyDown",value:function(t){console.log(t.key)}},{key:"handleClick",value:function(t){for(var i=this.canvas.getBoundingClientRect(),e={x:t.clientX-i.left,y:t.clientY-i.top},n=new r({type:t.type,data:{point:e}}),o=0;o<this.shapes.length;o++){var a=this.shapes[this.shapes.length-1-o];a.setActive(!1),n.isStopPropagation||a.isPointInRegion(e)&&a.trigger("click",n)}this.redraw()}},{key:"shapeDetect",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!(t instanceof l))throw new Error("It's not illegal shape!")}},{key:"add",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.shapeDetect(t),this.shapes.findIndex((function(i){return i===t}))<0?(this.shapes.push(t),this.draw(t)):console.warn("Fail to add shape, duplicate: ".concat(t.type))}},{key:"addAll",value:function(){for(var t=this,i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];e.forEach((function(i){t.add(i)}))}},{key:"moveActiveShape",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:1,y:0};this.shapes.forEach((function(i){i.active&&i.moveBy(t)})),this.redraw()}},{key:"removeActiveShape",value:function(){this.shapes=this.shapes.filter((function(t){return!t.active})),this.redraw()}},{key:"draw",value:function(t){this.shapeDetect(t),t.draw(this.ctx)}},{key:"redraw",value:function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.drawGrid(this.ctx),this.shapes.forEach((function(i){return t.draw(i)}))}}]),t}(),d=e(4),u=e(0),y=e(6),g=e(5),f=function(t){Object(y.a)(e,t);var i=Object(g.a)(e);function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,e),t=i.call(this,n);var o=n.radius,a=void 0===o?50:o,h=n.at,c=void 0===h?{x:0,y:0}:h;return t.radius=a,t.at=c,t}return Object(c.a)(e,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(d.a)(Object(u.a)(e.prototype),"update",this).call(this,t);var i=t.radius,n=void 0===i?50:i,o=t.at,a=void 0===o?{x:0,y:0}:o;this.at=a,this.radius=n}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(d.a)(Object(u.a)(e.prototype),"draw",this).call(this,t),t.beginPath(),t.arc(this.at.x,this.at.y,this.radius,0,2*Math.PI,!1),t.fillStyle=this.bgColor,t.fill(),this.active&&this.drawActive()}},{key:"drawActive",value:function(){var t=this.ctx;t.strokeStyle=this.activeStyle,t.lineWidth=2,t.stroke()}},{key:"isPointInRegion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return Math.sqrt(Math.pow(t.x-this.at.x,2)+Math.pow(t.y-this.at.y,2))<this.radius}}]),e}(l),x=function(t){Object(y.a)(e,t);var i=Object(g.a)(e);function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,e),t=i.call(this,n);var o=n.points,a=void 0===o?[]:o;return t.points=a,t.at=a[0],t}return Object(c.a)(e,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(d.a)(Object(u.a)(e.prototype),"update",this).call(this,t);var i=t.points,n=void 0===i?[]:i;this.points=n}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(d.a)(Object(u.a)(e.prototype),"draw",this).call(this,t),t.fillStyle=this.bgColor,t.beginPath();for(var i=0;i<this.points.length;i++){var n=this.points[i];0!==i?t.lineTo(n.x,n.y):t.moveTo(n.x,n.y)}t.fill(),this.drawActive()}},{key:"moveBy",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return this.points.map((function(i){return i.x+=t.x,i.y+=t.y,i})),this}},{key:"moveTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return this.moveBy({x:t.x-this.at.x,y:t.y-this.at.y}),this}},{key:"drawActive",value:function(){this.active&&Object(d.a)(Object(u.a)(e.prototype),"drawActive",this).call(this,this.points)}},{key:"cross",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{x:0,y:0},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0};return(i.x-t.x)*(e.y-t.y)-(e.x-t.x)*(i.y-t.y)}},{key:"isPointInRegion",value:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0},e=0;return this.points.forEach((function(n,o){var a=t.points[(o+1)%t.points.length];n.y<=i.y?a.y>i.y&&t.cross(n,a,i)>0&&(e+=1):a.y<=i.y&&t.cross(n,a,i)<0&&(e-=1)})),0!==e}}]),e}(l),p=function(t){Object(y.a)(e,t);var i=Object(g.a)(e);function e(){var t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(s.a)(this,e),t=i.call(this,n);var o=n.width,a=void 0===o?50:o,h=n.height,c=void 0===h?50:h,r=n.at,l=void 0===r?{x:0,y:0}:r;return t.width=a,t.height=c,t.at=l,t}return Object(c.a)(e,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(d.a)(Object(u.a)(e.prototype),"update",this).call(this,t);var i=t.width,n=void 0===i?50:i,o=t.height,a=void 0===o?50:o,h=t.at,s=void 0===h?{x:0,y:0}:h;this.width=n,this.height=a,this.at=s}},{key:"draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;Object(d.a)(Object(u.a)(e.prototype),"draw",this).call(this,t),t.fillStyle=this.bgColor,t.fillRect(this.at.x,this.at.y,this.width,this.height),this.drawActive()}},{key:"drawActive",value:function(){this.active&&Object(d.a)(Object(u.a)(e.prototype),"drawActive",this).call(this,[{x:this.at.x,y:this.at.y},{x:this.at.x+this.width,y:this.at.y},{x:this.at.x+this.width,y:this.at.y+this.height},{x:this.at.x,y:this.at.y+this.height}])}},{key:"isPointInRegion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};return t.x>this.at.x&&t.x<this.at.x+this.width&&t.y>this.at.y&&t.y<this.at.y+this.height}}]),e}(l),b=function(t){Object(y.a)(e,t);var i=Object(g.a)(e);function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width,o=void 0===n?100:n,a=t.height,h=void 0===a?25:a,c=t.at,r=void 0===c?{x:0,y:0}:c,l=t.name,v=void 0===l?"":l;return Object(s.a)(this,e),i.call(this,{name:v,points:[r,{x:r.x+o,y:r.y},{x:r.x+o,y:r.y+h},{x:r.x,y:r.y+h}]})}return e}(x),w=e(2);var k=function(){var t=Object(n.useRef)(),i=new v({width:800,height:500}),e=new p({name:"s1",width:50}),o=new p({name:"s2",at:{x:130,y:120},width:50}),a=new p({name:"s3",at:{x:230,y:120}}),h=new f({name:"c1",bgColor:"green",at:{x:130,y:120}}).moveTo({x:300,y:150}),s=new x({name:"polygon",points:[{x:0,y:0},{x:100,y:400},{x:100,y:500},{x:400,y:400},{x:700,y:500},{x:300,y:500},{x:300,y:400}]}).moveTo({x:400,y:150}),c=new b({name:"textarea",at:{x:0,y:0}}).moveTo({x:400,y:150});e.on("click",(function(t){console.log("s1 clicked....",t,i.shapes)})),o.on("click",(function(t){console.log("s2 clicked....",this,i.shapes)})),h.on("click",(function(t){t.stopPropagation(),console.log("c1 clicked....")})),s.on("click",(function(t){console.log("=------")}));var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0};i.moveActiveShape(t)};return console.log(c),i.addAll(o,e,a,h,s,c),Object(n.useEffect)((function(){i.mount(t.current)})),Object(w.jsx)("div",{ref:t,style:{padding:15},children:Object(w.jsxs)("div",{style:{paddingBottom:15},children:[Object(w.jsx)("button",{onClick:function(){return r({x:0,y:-1})},children:"Up+1"}),Object(w.jsx)("button",{onClick:function(){return r({x:1,y:0})},children:"right+1"}),Object(w.jsx)("button",{onClick:function(){return r({x:0,y:1})},children:"Down+1"}),Object(w.jsx)("button",{onClick:function(){return r({x:-1,y:0})},children:"Left+1"}),Object(w.jsx)("button",{onClick:function(){i.removeActiveShape()},children:"Delete"}),Object(w.jsx)("button",{onClick:function(){i.redraw()},children:"ReDraw"})]})})},j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(i){var e=i.getCLS,n=i.getFID,o=i.getFCP,a=i.getLCP,h=i.getTTFB;e(t),n(t),o(t),a(t),h(t)}))};h.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),j()}},[[16,1,2]]]);
//# sourceMappingURL=main.9aeed9ee.chunk.js.map