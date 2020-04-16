(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){var t=e.children;return a.a.createElement("div",{className:"offset md:max-w-default mx-auto"},a.a.createElement("div",{className:"pt-10"},t))}},52:function(e,t,r){"use strict";var n=r(46),a=r.n(n),c=r(53),l=r.n(c),i=r(55),o=r.n(i);t.a=function(e){return{loadArticles:function(e){return o()(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://storage.googleapis.com/aller-structure-task/test_data.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.t0=e.sent,e.abrupt("return",{articles:e.t0});case 7:case"end":return e.stop()}}),e)})))()},modifyArticleTitle:function(e,t,r,n){var c=e.articles,l=a()(c);return l[0][r].columns[n].title=t,{articles:l}},deleteArticle:function(e,t,r){var n=e.articles,c=a()(n);return c[0][t].columns.splice(r,1),{articles:c}}}}},61:function(e,t,r){"use strict";r.r(t);var n=r(46),a=r.n(n),c=r(9),l=r.n(c),i=r(10),o=r.n(i),s=r(23),u=r.n(s),m=r(11),p=r.n(m),f=r(12),d=r.n(f),h=r(5),v=r.n(h),x=r(51),g=r.n(x),y=r(0),b=r.n(y),A=r(45),w=r(56),E=r.n(w),k=function(e){var t=e.imageUrl;return b.a.createElement(E.a,{src:"".concat(t,"&height=500 and/or &width=500"),className:"block w-full flex-1 object-cover mb-2",loader:b.a.createElement("div",{className:"lds-dual-ring"})})};function N(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var R=function(e){p()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(N()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return d()(this,e)});function n(e){var t;return l()(this,n),t=r.call(this,e),g()(u()(t),"handleChange",(function(e){t.props.modifyArticleTitle(e.currentTarget.value,t.props.row,t.props.column)})),g()(u()(t),"toggleEdit",(function(){t.setState({editingArticle:!t.state.editingArticle,url:t.props.article.url})})),g()(u()(t),"removeArticle",(function(){t.state.removingArticle?clearTimeout(t.timeout):t.timeout=setTimeout((function(){t.props.deleteArticle(t.props.row,t.props.column)}),3e3),t.setState({removingArticle:!t.state.removingArticle,url:t.props.article.url})})),t.timeout=null,t.state={editingArticle:!1,removingArticle:!1,url:void 0},t}return o()(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.article.url===t.url}},{key:"render",value:function(){var e=this.props.article,t=e.url,r=e.imageUrl,n=e.title,a=e.width;return b.a.createElement("div",{className:"relative md:flex md:flex-col md:h-full justify-stretch items-stretch pb-4"},b.a.createElement("div",{className:"flex py-2"},b.a.createElement("button",{onClick:this.toggleEdit,className:"text-xl text-gray-100 hover:text-gray-700 cursor-pointer hover:bg-gray-300 bg-gray-500 px-6 py-4 flex-1 text-center mr-2"},"Edit Title"),b.a.createElement("button",{className:"text-xl cursor-pointer hover:text-black hover:bg-red bg-gray-500 px-6 py-4 flex-1 text-center",onClick:this.removeArticle},this.state.removingArticle?"Oh no":"Delete Article")),this.state.removingArticle?b.a.createElement("button",{onClick:this.removeArticle,className:"z-10 absolute left-50 top-50 tranform-50 bg-white text-black text-xl rounded px-4 py-2 shadow-lg hover:text-red"},"Leave Article"):null,b.a.createElement("a",{href:this.state.editingArticle||this.state.removingArticle?null:t,target:"_blank",className:"rounded block group h-full hover:underline flex flex-col items-center justify-center ".concat(this.state.removingArticle?"opacity-50":"opacity-100"," opacity-transition")},b.a.createElement(k,{imageUrl:r,className:"mb-4"}),this.state.editingArticle?b.a.createElement("input",{type:"text",value:n,className:"border text-center group-hover:text-red px-2 break-all text-2xl",onChange:this.handleChange}):b.a.createElement("h3",{className:"text-center group-hover:text-red px-2 break-all text-".concat(Math.abs((a-2)%6),"xl font-bold text-3xl pt-4")},n)))}}]),n}(b.a.Component),C=r(13),T=r(52);function j(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var D=function(e){p()(n,e);var t,r=(t=n,function(){var e,r=v()(t);if(j()){var n=v()(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return d()(this,e)});function n(){var e;l()(this,n);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return e=r.call.apply(r,[this].concat(a)),g()(u()(e),"renderGrid",(function(t){return t.map((function(t,r){return b.a.createElement("div",{className:"flex flex-wrap pb-4",key:r},t.columns.map((function(t,n){return b.a.createElement("div",{className:"md:w-".concat(t.width,"/12 w-full px-1"),key:"".concat(t.url)},b.a.createElement(R,{article:t,row:r,column:n,modifyArticleTitle:e.props.modifyArticleTitle,deleteArticle:e.props.deleteArticle}))})))}))})),e}return o()(n,[{key:"componentDidMount",value:function(){this.props.articles&&!this.props.articles.length&&this.props.loadArticles()}},{key:"render",value:function(){var e=this.props.articles;return e&&!e.length?null:b.a.createElement(A.a,null,b.a.createElement("h1",{className:"md:text-5xl text-2xl text-center pb-14"},"Latest News"),b.a.createElement("div",{className:"mx-auto md:max-w-5xl"},this.renderGrid.apply(this,a()(e))))}}]),n}(b.a.Component);t.default=Object(C.connect)("articles",T.a)(D)}}]);