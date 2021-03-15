(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{39:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a.n(s),i=a(31),n=a.n(i),r=a(33),l=a(2),u=(a(39),a(4)),d=a(8),o=a(12),j=a(11),b=a(0),h=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("footer",{className:"footer",children:Object(b.jsx)("span",{className:"text-muted",children:"N\xe3o tenho ideia do que colocar aqui!"})})})}}]),a}(s.Component),m=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsx)("header",{children:Object(b.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(b.jsx)("div",{children:Object(b.jsx)("h1",{className:"navbar-brand",children:"Crud em React JS"})})})})})}}]),a}(s.Component),O=a(19),x=a.n(O),v=a(32),f=a(10),p=a(13),g=a.n(p),N=function e(){Object(u.a)(this,e)};N.URL_BASE_PROD="https://crud-reactbackend.herokuapp.com";var M=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"retrieveArtistas",value:function(){return g.a.get("".concat(N.URL_BASE_PROD,"/artistas"))}},{key:"retrieveAlbumsByArtista",value:function(e){return g.a.get("".concat(N.URL_BASE_PROD,"/artistas/").concat(e,"/albums"))}}]),e}()),k=N.URL_BASE_PROD+"/musicas",y=new(function(){function e(){Object(u.a)(this,e)}return Object(d.a)(e,[{key:"createMusica",value:function(e){return g.a.post(k,e)}},{key:"retrieveMusicaById",value:function(e){return g.a.get("".concat(k,"/").concat(e))}},{key:"retriveMusicas",value:function(){return g.a.get(k)}},{key:"deleteMusica",value:function(e){return g.a.delete("".concat(k,"/").concat(e))}}]),e}()),A=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).salvarMusica=function(e){e.preventDefault();var t={id:s.state.id,nome:s.state.nomeMusica,artista:s.state.artistas.find((function(e){return String(e.id)===String(s.state.artista)})),album:s.state.albums.find((function(e){return String(e.id)===String(s.state.album)}))};y.createMusica(t).then((function(e){200===e.status?s.props.history.goBack():alert("Falha ao salvar!")}))},s.ChangeMusica=function(e){s.setState({nomeMusica:e.target.value})},s.ChangeArtista=function(e){s.setState({artista:e.target.value}),M.retrieveAlbumsByArtista(e.target.value).then((function(e){s.setState({albums:e.data,album:e.data[0].id})}))},s.ChangeAlbum=function(e){s.setState({album:e.target.value})},s.state={id:s.props.match.params.id,nomeMusica:"",artista:"",album:"",artistas:[],albums:[]},s.ChangeMusica=s.ChangeMusica.bind(Object(f.a)(s)),s.ChangeArtista=s.ChangeArtista.bind(Object(f.a)(s)),s.ChangeAlbum=s.ChangeAlbum.bind(Object(f.a)(s)),s.salvarMusica=s.salvarMusica.bind(Object(f.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(x.a.mark((function e(){var t,a,s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.state.id){e.next=18;break}return e.next=3,y.retrieveMusicaById(this.state.id);case 3:return t=e.sent.data,e.t0=this,e.t1=t.nome,e.next=8,M.retrieveArtistas();case 8:return e.t2=e.sent.data,e.t3=t.artista.id,e.next=12,M.retrieveAlbumsByArtista(t.artista.id);case 12:e.t4=e.sent.data,e.t5=t.album.id,e.t6={nomeMusica:e.t1,artistas:e.t2,artista:e.t3,albums:e.t4,album:e.t5},e.t0.setState.call(e.t0,e.t6),e.next=25;break;case 18:return e.next=20,M.retrieveArtistas();case 20:return a=e.sent.data,e.next=23,M.retrieveAlbumsByArtista(a[0].id);case 23:s=e.sent.data,this.setState({artistas:a,artista:a[0].id,albums:s,album:s[0].id});case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"cancel",value:function(){this.props.history.push("/musicas")}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"row",children:Object(b.jsxs)("div",{className:"card col-md-6 offset-md-3 offset-md-3",children:[Object(b.jsx)("br",{}),Object(b.jsx)("h3",{className:"text-center",children:"Adicionar M\xfasica"}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{children:"M\xfasica "}),Object(b.jsx)("input",{placeholder:"Nome da m\xfasica",name:"nomeMusica",className:"form-control",value:this.state.nomeMusica,onChange:this.ChangeMusica}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Artista "}),Object(b.jsx)("select",{className:"form-control",value:this.state.artista,onChange:this.ChangeArtista,children:this.state.artistas.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.nome},e.id)}))}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{children:"Album "}),Object(b.jsx)("select",{className:"form-control",onChange:this.ChangeAlbum,children:this.state.albums.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.titulo},e.id)}))})]}),Object(b.jsx)("button",{className:"btn btn-success",onClick:this.salvarMusica,children:"Salvar"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:this.cancel.bind(this),style:{marginLeft:"10px"},children:"Cancelar"})]})})]})})})]})}}]),a}(s.Component),C=a(16),S=function(e){Object(o.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(u.a)(this,a),(s=t.call(this,e)).state={musicas:[]},s.addMusica=s.addMusica.bind(Object(f.a)(s)),s.editMusica=s.editMusica.bind(Object(f.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.retriveMusicas().then((function(t){e.sortMusicas(t.data),e.setState({musicas:t.data})}))}},{key:"sortMusicas",value:function(e){e.sort((function(e,t){return e.artista.nome===t.artista.nome?0:e.artista.nome>t.artista.nome?1:-1}))}},{key:"addMusica",value:function(){this.props.history.push("/musicas/create")}},{key:"editMusica",value:function(e){this.props.history.push("/musicas/edit/".concat(e))}},{key:"deleteMusica",value:function(e){var t=this;y.deleteMusica(e).then((function(a){200===a.status?t.setState({musicas:t.state.musicas.filter((function(t){return t.id!==e}))}):alert("N\xe3o foi poss\xedvel remover esta m\xfasica")}))}},{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"filter",children:Object(b.jsx)("div",{className:"table-responsive",children:Object(b.jsxs)("div",{className:"table-wrapper",children:[Object(b.jsx)("div",{className:"table-title",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col-5",children:Object(b.jsx)("h2",{children:"M\xfasicas"})}),Object(b.jsx)("div",{className:"col-7",children:Object(b.jsxs)("button",{className:"btn btn-primary",onClick:this.addMusica,children:[Object(b.jsx)(C.b,{type:"button",className:"iconButton"}),"Adicionar M\xfasica"]})})]})}),Object(b.jsxs)("table",{className:"table table-striped table-hover",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"M\xfasica"}),Object(b.jsx)("th",{children:"Album"}),Object(b.jsx)("th",{children:"Artista"}),Object(b.jsx)("th",{children:"A\xe7\xf5es"})]})}),Object(b.jsx)("tbody",{children:this.state.musicas.map((function(t){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.state.musicas.indexOf(t)+1}),Object(b.jsx)("td",{children:t.nome}),Object(b.jsx)("td",{children:t.album.titulo}),Object(b.jsx)("td",{children:t.artista.nome}),Object(b.jsxs)("td",{children:[Object(b.jsx)(C.a,{color:"green",title:"Editar",className:"iconButton",onClick:function(){return e.editMusica(t.id)}}),Object(b.jsx)(C.c,{color:"red",title:"Excluir",className:"iconButton",onClick:function(){return e.deleteMusica(t.id)}})]})]},t.id)}))})]}),Object(b.jsxs)("div",{className:"clearfix",style:{background:"gainsboro"},children:[Object(b.jsx)("div",{className:"hint-text",children:"Exibindo 5 de 25 resultados"}),Object(b.jsxs)("ul",{className:"pagination",children:[Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{className:"page-link",href:"/",children:" Anterior"})}),Object(b.jsx)("li",{className:"page-item active",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"1"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"2"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"3"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"4"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"5"})}),Object(b.jsx)("li",{className:"page-item",children:Object(b.jsx)("a",{href:"/",className:"page-link",children:"Pr\xf3ximo"})})]})]})]})})})}}]),a}(s.Component);var B=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(r.a,{basename:"/crud-react-frontend",children:[Object(b.jsx)(m,{}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{exact:!0,path:["/","/musicas"],component:S}),Object(b.jsx)(l.a,{path:"/musicas/create",component:A}),Object(b.jsx)(l.a,{path:"/musicas/edit/:id",component:A})]})}),Object(b.jsx)(h,{})]})})};a(65);n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("app"))}},[[66,1,2]]]);
//# sourceMappingURL=main.44991e2d.chunk.js.map