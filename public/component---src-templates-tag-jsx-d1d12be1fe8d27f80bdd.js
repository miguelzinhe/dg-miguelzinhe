"use strict";(self.webpackChunkgatsby_garden=self.webpackChunkgatsby_garden||[]).push([[814],{43:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),o=n(1082),r=n(3964);function l(e){var t=e.notes;return a.createElement("div",{className:"block note-cards note-list"},t.map((function(e,t){var n;return a.createElement("div",{className:"note-area box-feed",key:t,role:"button",tabIndex:t,onClick:function(){(0,o.c4)(e.node.fields.slug)},onKeyDown:function(t){13===t.keycode&&(0,o.c4)(e.node.fields.slug)}},a.createElement("h4",{className:"note-title"},a.createElement(o.rU,{to:""+e.node.fields.slug},e.node.fields.title)),a.createElement("p",{className:"note-excerpt"},e.node.fields.description),null!==(n=e.node.frontmatter.tags)&&void 0!==n&&n.length?a.createElement("p",{className:"note-tag-list"},"assuntos relacionados:"," ",e.node.frontmatter&&e.node.frontmatter.tags?e.node.frontmatter.tags.map((function(t,n){return a.createElement("span",{key:n},a.createElement(o.rU,{to:"/tags/"+t},"#",t),n<e.node.frontmatter.tags.length-1?", ":"")})):"sem tags"):null,a.createElement("p",{className:"note-date"},"publicado em ",r(new Date(e.node.fields.date)).fromNow()))})))}},9102:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),o=n(1082);function r(e){var t=e.context;return a.createElement("div",{className:"pager"},t.previousPagePath?a.createElement(o.rU,{to:t.previousPagePath},"< Previous "):null,t.nextPagePath?a.createElement(o.rU,{to:t.nextPagePath}," Next >"):null)}},1427:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),o=n(1082),r=n(7435),l=n(43),s=n(9102);function c(e){var t=e.pageContext,n=e.data,c=t.tag,u=n.allMdx,d=u.edges,i=u.totalCount,m=i+" note"+(1===i?"":"s")+' tags "'+c+'"';return a.createElement(r.Z,{title:'Tags "'+c+'"',type:"tag"},a.createElement("div",{className:"column is-half"},a.createElement("h1",null,m),a.createElement(l.Z,{notes:d}),a.createElement(s.Z,{context:t}),a.createElement("p",null,a.createElement(o.rU,{to:"/tags"},"veja todos os assuntos"))))}}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-d1d12be1fe8d27f80bdd.js.map