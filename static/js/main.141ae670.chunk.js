(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(1),s=a(2),i=a(4),c=a(3),u=a(5),l=a(0),o=a.n(l),m=a(7),d=a.n(m);a(15);function h(e){return o.a.createElement("button",{className:"square",onClick:function(){return e.onClick()}},e.value)}var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={squares:Array(9).fill(null),isXNext:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();b(t)||t[e]||(t[e]=this.state.isXNext?"X":"O",this.setState({squares:t,isXNext:!this.state.isXNext}))}},{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=b(this.state.squares);return e=t?"Winner: ".concat(t):"Players turn: ".concat(this.state.isXNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"status"},e),o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),f=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,null)),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null),o.a.createElement("ol",null)))}}]),t}(o.a.Component);function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var n=Object(r.a)(t[a],3),s=n[0],i=n[1],c=n[2];if(e[s]&&e[s]===e[i]&&e[s]===e[c])return e[s]}return null}d.a.render(o.a.createElement(f,null),document.getElementById("root"))},15:function(e,t,a){},9:function(e,t,a){e.exports=a(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.141ae670.chunk.js.map