(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),l=a.n(o),s=(a(37),a(38),a(41),a(2)),i=a.n(s),c=a(10),d=a(3),u=a(4),h=a(6),m=a(5),p=a(7),g=(a(43),function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){if(0===this.props.engineType.length)return null;var e="",t="";"duckduckgo"===this.props.engineType&&(e="DuckDuckGO",t="https://duckduckgo.com"),"google"===this.props.engineType&&(e="Google",t="https://google.com/search"),"custom"===this.props.engineType&&(e=this.props.engineUrl.split("//")[1].split("/")[0],t=this.props.engineUrl);var a="https://external-content.duckduckgo.com/ip3/".concat(t.split("://")[1].split("/")[0],".ico");return r.a.createElement("form",{action:t,id:"search-bar-container",className:"homepage-card"},r.a.createElement("input",{name:"q",placeholder:"Search at ".concat(e),autoComplete:"off"}),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:a,className:"icon",alt:"".concat(e," icon")})))}}]),t}(n.Component)),f=(a(44),a(8)),b=a(9),v=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleNameChange=function(e){a.setState({name:e.target.value})},a.handleURLChange=function(e){a.setState({url:e.target.value})},a.handleIconChange=function(e){a.setState({icon:e.target.value})},a.handleDelete=function(){a.props.onClose({name:a.state.name,icon:a.state.icon})},a.handleSave=function(){if(0!==a.state.name.trim().length&&0!==a.state.url.trim().length){var e=a.state.url;e.startsWith("http")||(e="https://"+e),a.props.onSave({url:e,name:a.state.name,icon:a.state.icon})}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({name:this.props.name,url:this.props.url,icon:this.props.icon})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:this.props.id,tabIndex:-1,role:"dialog","aria-labelledby":"bookmark-editor-modal-label","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"bookmark-editor-modal-label"},"Bookmark editor"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},r.a.createElement(f.a,{icon:b.e})))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("div",{className:"bookmark-settings-entry"},r.a.createElement("input",{type:"text",placeholder:"Bookmark name",className:"bookmark-entry-name",onChange:this.handleNameChange,defaultValue:this.props.name}),r.a.createElement("input",{type:"text",placeholder:"Bookmark URL",className:"bookmark-entry-url",onChange:this.handleURLChange,defaultValue:this.props.url}),r.a.createElement("input",{type:"text",placeholder:"Bookmark icon (leave empty to use the site favicon)",className:"bookmark-entry-icon",onChange:this.handleIconChange,defaultValue:this.props.icon}))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:this.handleDelete},this.props.closeButtonText),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSave},"Save changes")))))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleEdit=function(){},a.handleSave=function(e){e.id=a.props.id,a.props.onUpdate(e)},a.handleDelete=function(e){e.id=a.props.id,a.props.onDelete(e)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.icon;return""===e&&(e="https://external-content.duckduckgo.com/ip3/".concat(this.props.url.split("://")[1].split("/")[0],".ico")),r.a.createElement("div",{className:"bookmark-entry"},r.a.createElement("a",{href:this.props.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e,alt:"".concat(this.props.name," icon")})),r.a.createElement("div",{className:"bookmark-edit","data-toggle":"modal","data-target":"#bookmark-edit-modal-".concat(this.props.id)},r.a.createElement(f.a,{icon:b.c})),r.a.createElement(v,{id:"bookmark-edit-modal-".concat(this.props.id),name:this.props.name,url:this.props.url,icon:this.props.icon,closeButtonText:"Delete",onSave:this.handleSave,onClose:this.handleDelete}))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={editable:!1,entries:new Array},a.saveBookmarks=function(){localStorage.setItem("bookmarks",JSON.stringify(a.state.entries))},a.handleEditToggle=function(){a.setState({editable:!a.state.editable})},a.handleBookmarkDelete=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(n=a.state.entries).filter((function(e){return e.id!==t.id})),e.next=4,a.setState({entries:n});case 4:a.saveBookmarks();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleBookmarkUpdate=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=(n=a.state.entries).filter((function(e){return e.id!==t.id}))).push(t),e.next=5,a.setState({entries:n});case 5:a.saveBookmarks();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleNewBookmark=function(e){var t="";do{t=Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)}while(0!==a.state.entries.filter((function(e){return e.id===t})).length);e.id=t;var n=a.state.entries;n.push(e),a.setState({entries:n}),a.saveBookmarks(),window.location.reload()},a.getEntries=function(){var e=a.state.entries;e.length>14&&(e=e.slice(0,15));var t=e.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,name:e.name,url:e.url,icon:e.icon,onUpdate:a.handleBookmarkUpdate,onDelete:a.handleBookmarkDelete})}));return e.length>14?r.a.createElement(r.a.Fragment,null,t,r.a.createElement("h4",null,"...")):t},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("bookmarks");if(null!==e){var t=JSON.parse(e);this.setState({entries:t})}else this.saveBookmarks()}},{key:"render",value:function(){return r.a.createElement("div",{id:"bookmark-bar",className:"homepage-card"},r.a.createElement("div",{className:"bookmark-list ".concat(this.state.editable?"editable":"")},this.getEntries()),r.a.createElement("div",{className:"homepage-card-header"},r.a.createElement("div",{id:"bookmark-edit-toggle",className:"homepage-card-settings-holder",onClick:this.handleEditToggle},r.a.createElement(f.a,{icon:this.state.editable?b.a:b.c,className:"homepage-card-settings"})),r.a.createElement("div",{className:"homepage-card-settings-holder","data-toggle":"modal","data-target":"#bookmark-add-modal"},r.a.createElement(f.a,{icon:b.d,className:"homepage-card-settings"}))),r.a.createElement(v,{id:"bookmark-add-modal",name:"",url:"",icon:"",closeButtonText:"Close",onSave:this.handleNewBookmark,onClose:function(){}}))}}]),t}(n.Component),E=(a(50),a(13)),S=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1},a.handleDone=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({done:!a.state.done});case 2:a.props.onDoneToggle(a.props.id,a.state.done);case 3:case"end":return e.stop()}}),e)}))),a.handleDelete=function(){a.props.onDelete(a.props.id)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({done:this.props.done})}},{key:"render",value:function(){return r.a.createElement("div",{className:"todo-entry"},r.a.createElement("div",{className:"todo-entry-holder"},r.a.createElement("div",{className:"todo-checkbox",onClick:this.handleDone},r.a.createElement(f.a,{icon:this.state.done?E.a:E.b})),r.a.createElement("div",{className:this.state.done?"checked":""},this.props.text)),r.a.createElement("div",{className:"todo-entry-actions"},r.a.createElement("div",{className:"todo-entry-action",onClick:this.handleDelete},r.a.createElement(f.a,{icon:b.f}))))}}]),t}(n.Component),O=(a(51),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={entries:new Array},a.saveTodoList=function(){localStorage.setItem("todo-list",JSON.stringify(a.state.entries))},a.handleInputKey=function(e){if(13===e.keyCode){var t=function(){var t=e.target.value;if(0===t.trim().length)return{v:void 0};var n="";do{n=Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)+Math.random().toString(36).substring(2,12)}while(0!==a.state.entries.filter((function(e){return e.id===n})).length);var r=a.state.entries;r.push({text:t,done:!1,id:n}),a.setState({entries:r}),a.saveTodoList(),e.target.value=""}();if("object"===typeof t)return t.v}},a.handleDelete=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(n=a.state.entries).filter((function(e){return e.id!==t})),e.next=4,a.setState({entries:n});case 4:a.saveTodoList();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleDoneToggle=function(){var e=Object(c.a)(i.a.mark((function e(t,n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=a.state.entries).map((function(e){return e.id===t&&(e.done=n),e})),e.next=4,a.setState({entries:r});case 4:a.saveTodoList();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todo-list");if(null!==e){var t=JSON.parse(e);this.setState({entries:t})}else this.saveTodoList()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"todo-box",className:"homepage-card"},r.a.createElement("h4",null,"TODO:"),r.a.createElement("input",{id:"todo-new-entry",className:"",type:"text",placeholder:"Add new things to your TODO",autoComplete:"off",onKeyUp:this.handleInputKey}),r.a.createElement("div",null,this.state.entries.map((function(t){return r.a.createElement(S,{onDelete:e.handleDelete,onDoneToggle:e.handleDoneToggle,text:t.text,done:t.done,id:t.id,key:t.id})}))))}}]),t}(n.Component));a(52);function N(e,t){for(var a=e.toString();a.length<t;)a="0"+a;return a}var j=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).parseDate=function(e){var t=new Date(Date.parse(e));return"".concat(t.getFullYear(),"/").concat(N(t.getMonth()+1,2),"/").concat(N(t.getDate(),2))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.card;return r.a.createElement("div",{className:"trello-card"},r.a.createElement("div",{className:"trello-card-content"},r.a.createElement("div",{className:"trello-card-name"},e.name),r.a.createElement("div",{className:"trello-card-actions"},r.a.createElement("a",{target:"blank",href:this.props.card.shortUrl,className:"trello-card-action-anchor"},r.a.createElement("div",{className:"trello-card-action"},r.a.createElement(f.a,{icon:E.c}))))),null===e.due?"":r.a.createElement("div",{className:"trello-card-due"},this.parseDate(e.due)))}}]),t}(n.Component),C=(a(53),a(14)),w=a.n(C),B=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={apiKey:"",listId:"",loadedApiKey:"",loginState:0,boards:new Array,lists:new Array,selectedBoard:"",boardsLoaded:!1},a.handleSave=function(){var e=0;e=0===a.state.apiKey.trim().length?-2:null===localStorage.getItem("trello_token")?-1:1,a.setState({loadedApiKey:a.state.apiKey,loginState:e}),a.props.onSave(a.state.apiKey,a.state.listId)},a.handleKeyChange=function(e){a.setState({apiKey:e.target.value})},a.componentDidMount=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,t=0===a.props.apiKey.trim().length?-2:null===localStorage.getItem("trello_token")?-1:1,e.next=4,a.setState({loginState:t,apiKey:a.props.apiKey,listId:a.props.listId,loadedApiKey:a.props.apiKey});case 4:case"end":return e.stop()}}),e)}))),a.handleLogin=function(){a.state.boardsLoaded||a.loadBoards(),a.props.onReady(C.Trello)},a.loadBoards=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.Trello.get("members/me/boards",(function(e){console.log("get boards"),a.setState({boardsLoaded:!0,boards:e})}),(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),a.loadLists=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.Trello.get("boards/".concat(a.state.selectedBoard,"/lists"),(function(e){console.log("get lists"),a.setState({lists:e})}),(function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),a.handleBoardChange=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({selectedBoard:t.target.value});case 2:a.loadLists();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleListChange=function(){var e=Object(c.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({listId:t.target.value});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.getTrelloClient=function(){return-2===a.state.loginState||0===a.state.loginState?null:r.a.createElement(w.a,{apiKey:a.state.loadedApiKey,clientVersion:1,apiEndpoint:"https://api.trello.com",authEndpoint:"https://trello.com",intentEndpoint:"https://trello.com",authorizeName:"Homepage",authorizeType:"popup",authorizePersist:!0,authorizeInteractive:!0,authorizeScopeRead:!0,authorizeScopeWrite:!0,authorizeScopeAccount:!0,authorizeExpiration:"never",authorizeOnSuccess:a.handleLogin,authorizeOnError:function(){return console.log("Login error!")},autoAuthorize:!0,authorizeButton:!0,buttonStyle:"metamorph",buttonColor:"green",buttonText:"Login with Trello"})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"trello-settings-modal",tabIndex:-1,role:"dialog","aria-labelledby":"trello-setings-modal-label","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"trello-settings-modal-label"},"Trello settings"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},r.a.createElement(f.a,{icon:b.e})))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("label",null,"Get a API key in"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://trello.com/app-key"},"https://trello.com/app-key")),r.a.createElement("input",{defaultValue:this.state.apiKey,onChange:this.handleKeyChange,placeholder:"API key (insert a value and save before login)"}),r.a.createElement("div",{id:"trello-login-container",className:-1!==this.state.loginState?"hidden":""},this.getTrelloClient()),r.a.createElement("div",{id:"board-selector-holder",className:1===this.state.loginState||-1===this.state.loginState?"":"hidden"},r.a.createElement("label",null,"Board:"),r.a.createElement("select",{id:"title",name:"title",defaultValue:"",onChange:this.handleBoardChange},r.a.createElement("option",{value:""},"--"),this.state.boards.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})))),r.a.createElement("div",{id:"list-selector-holder",className:""!==this.state.selectedBoard?"":"hidden"},r.a.createElement("label",null,"List:"),r.a.createElement("select",{id:"title",name:"title",defaultValue:"",onChange:this.handleListChange},r.a.createElement("option",{value:""},"--"),this.state.lists.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return window.location.reload()}},"Close"),r.a.createElement("button",{onClick:this.handleSave,type:"button",className:"btn btn-primary"},"Save changes")))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={logged:!1,cards:new Array},a.loadCards=function(e){a.state.logged||e.get("lists/".concat(a.props.listId,"/cards"),(function(e){console.log("get cards");var t=e;a.setState({logged:!0,cards:t})}),(function(e){console.log("ERROR:",e)}))},a.showTrelloInfo=function(){return 0===a.props.apiKey.trim().length||0===a.props.listId.trim().length?r.a.createElement("h6",null,"Setup Trello config to start using"):r.a.createElement("div",{id:"trello-cards-container"},a.state.cards.map((function(e){return r.a.createElement(j,{key:e.id,card:e})})))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"homepage-trello",className:"homepage-card"},r.a.createElement("div",{className:"homepage-card-header"},r.a.createElement("h4",null,"Trello:"),r.a.createElement("div",{className:"homepage-card-settings-holder","data-toggle":"modal","data-target":"#trello-settings-modal"},r.a.createElement(f.a,{icon:b.b,className:"homepage-card-settings"}))),r.a.createElement(B,{apiKey:this.props.apiKey,listId:this.props.listId,onSave:this.props.onSettingsChange,onReady:this.loadCards}),this.showTrelloInfo())}}]),t}(n.Component),U=a(30),I=a.n(U),T=(a(72),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={date:new Date},a.timerId=void 0,a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerId=setInterval((function(){return e.setState({date:new Date})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.date,t="".concat(N(e.getHours(),2),":").concat(N(e.getMinutes(),2),":").concat(N(e.getSeconds(),2));return r.a.createElement("h3",{id:"calendar-clock"},t)}}]),t}(n.Component)),D=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"calendar-container",className:"homepage-card"},r.a.createElement("h4",null,"Calendar:"),r.a.createElement(T,null),r.a.createElement(I.a,{locale:"en-US",value:new Date,className:"homepage-calendar"}))}}]),t}(n.Component),A=(a(73),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={engineType:"",engineUrl:""},a.saveEngine=function(){localStorage.setItem("search-engine",JSON.stringify(a.state))},a.handleChange=function(e){a.setState({engineType:e.target.value})},a.handleUrlChange=function(e){a.setState({engineUrl:e.target.value})},a.handleSave=Object(c.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.state.engineUrl.startsWith("https://")||a.state.engineUrl.startsWith("http://")){e.next=3;break}return e.next=3,a.setState({engineUrl:"https://".concat(a.state.engineUrl)});case 3:return e.next=5,a.saveEngine();case 5:a.props.onSave(a.state);case 6:case"end":return e.stop()}}),e)}))),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("search-engine"))){e.next=7;break}return e.next=4,this.setState({engineType:"duckduckgo"});case 4:this.saveEngine(),e.next=10;break;case 7:return a=JSON.parse(t),e.next=10,this.setState({engineType:a.engineType,engineUrl:a.engineUrl});case 10:this.props.onSave(this.state);case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return 0===this.state.engineType.length?null:r.a.createElement("div",{className:"modal fade",id:"homepage-settings-modal",tabIndex:-1,role:"dialog","aria-labelledby":"homepage-settings-modal-label","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"homepage-settings-modal-label"},"Homepage settings"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},r.a.createElement(f.a,{icon:b.e})))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("select",{id:"search-engine",onChange:this.handleChange,defaultValue:this.state.engineType},r.a.createElement("option",{value:"duckduckgo"},"DuckDuckGO"),r.a.createElement("option",{value:"google"},"Google"),r.a.createElement("option",{value:"custom"},"Custom")),r.a.createElement("input",{placeholder:"Insert custom search engine URL",defaultValue:this.state.engineUrl,onChange:this.handleUrlChange,className:"".concat("custom"===this.state.engineType?"":"hidden")})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSave},"Save changes")))))}}]),t}(n.Component)),K=a(31),L=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={"day-url":"","day-author":"","day-authorUrl":"","night-url":"","night-author":"","night-authorUrl":""},a.handleChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(K.a)({},t,n))},a.handleSave=function(){a.props.onSave({url:a.state["day-url"],author:a.state["day-author"],authorUrl:a.state["day-authorUrl"]},{url:a.state["night-url"],author:a.state["night-author"],authorUrl:a.state["night-authorUrl"]})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.setState({"day-url":this.props.day.url,"day-author":this.props.day.author,"day-authorUrl":this.props.day.authorUrl,"night-url":this.props.night.url,"night-author":this.props.night.author,"night-authorUrl":this.props.night.authorUrl})}},{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"background-settings-modal",tabIndex:-1,role:"dialog","aria-labelledby":"background-settings-modal-label","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"background-settings-modal-label"},"Background settings"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},r.a.createElement(f.a,{icon:b.e})))),r.a.createElement("div",{className:"modal-body"},r.a.createElement("label",null,"Day background"),r.a.createElement("input",{name:"day-url",placeholder:"Image URL",onChange:this.handleChange,defaultValue:this.state["day-url"]}),r.a.createElement("input",{name:"day-author",placeholder:"Author name",onChange:this.handleChange,defaultValue:this.state["day-author"]}),r.a.createElement("input",{name:"day-authorUrl",placeholder:"Author page URL",onChange:this.handleChange,defaultValue:this.state["day-authorUrl"]}),r.a.createElement("label",null,"Night background"),r.a.createElement("input",{name:"night-url",placeholder:"Image URL",onChange:this.handleChange,defaultValue:this.state["night-url"]}),r.a.createElement("input",{name:"night-author",placeholder:"Author name",onChange:this.handleChange,defaultValue:this.state["night-author"]}),r.a.createElement("input",{name:"night-authorUrl",placeholder:"Author page URL",onChange:this.handleChange,defaultValue:this.state["night-authorUrl"]})),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),r.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:this.handleSave},"Save changes")))))}}]),t}(n.Component),M=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-info"},r.a.createElement("div",{className:"homepage-card-settings-holder","data-toggle":"modal","data-target":"#homepage-settings-modal"},r.a.createElement(f.a,{icon:b.b,className:"homepage-card-settings"})),"Homepage made by"," ",r.a.createElement("a",{href:"https://github.com/Pauloo27/homepage",target:"_blank",rel:"noopener noreferrer"},"Pauloo27")," ","under GPL-2 license")}}]),t}(n.Component),V=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"background-info",className:"footer-info"},r.a.createElement("div",{className:"homepage-card-settings-holder","data-toggle":"modal","data-target":"#background-settings-modal"},r.a.createElement(f.a,{icon:b.b,className:"homepage-card-settings"})),"Image by"," ",r.a.createElement("a",{href:this.props.backgroundAuthorUrl,target:"_blank",rel:"noopener noreferrer"},this.props.backgroundAuthor))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={dayBackground:{url:"",author:"",authorUrl:""},nightBackground:{url:"",author:"",authorUrl:""},currentBackground:{url:"",author:"",authorUrl:""},engineType:"",engineUrl:void 0},a.setBackground=function(){var e,t=new Date;e=t.getHours()>=6&&t.getHours()<18?a.state.dayBackground:a.state.nightBackground,a.setState({currentBackground:e}),document.getElementsByTagName("body")[0].background=e.url},a.saveBackgrounds=function(){localStorage.setItem("backgrounds",JSON.stringify({dayBackground:a.state.dayBackground,nightBackground:a.state.nightBackground}))},a.handleTrelloSave=function(e,t){localStorage.setItem("trello-config",JSON.stringify({apiKey:e,listId:t}))},a.handleSearchEngineSave=function(e){a.setState(e)},a.handleBackgroundSave=function(){var e=Object(c.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({dayBackground:t,nightBackground:n});case 2:return e.next=4,a.saveBackgrounds();case 4:a.setBackground();case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.loadTrelloIntegration=function(){var e=localStorage.getItem("trello-config");if(null===e)return r.a.createElement(x,{apiKey:"",listId:"",onSettingsChange:a.handleTrelloSave});var t=JSON.parse(e);return r.a.createElement(x,{apiKey:t.apiKey,listId:t.listId,onSettingsChange:a.handleTrelloSave})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==(t=localStorage.getItem("backgrounds"))){e.next=7;break}return e.next=4,this.setState({dayBackground:{url:"https://images.unsplash.com/photo-1518012961-5efdfd47ba75",author:"Alex Knight",authorUrl:"https://unsplash.com/@agkdesign"},nightBackground:{url:"https://images.unsplash.com/Ys-DBJeX0nE.JPG",author:"Alex Knight",authorUrl:"https://unsplash.com/@agkdesign"}});case 4:this.saveBackgrounds(),e.next=9;break;case 7:return e.next=9,this.setState(JSON.parse(t));case 9:this.setBackground();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return""===this.state.currentBackground.url?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"header-container"},r.a.createElement(g,{engineType:this.state.engineType,engineUrl:this.state.engineUrl}),r.a.createElement(k,null)),r.a.createElement("div",{id:"middle-container"},r.a.createElement(O,null),r.a.createElement(D,null),this.loadTrelloIntegration()),r.a.createElement("div",{id:"footer-container"},r.a.createElement(M,null),r.a.createElement(V,{backgroundAuthor:this.state.currentBackground.author,backgroundAuthorUrl:this.state.currentBackground.authorUrl})),r.a.createElement(A,{onSave:this.handleSearchEngineSave}),r.a.createElement(L,{day:this.state.dayBackground,night:this.state.nightBackground,onSave:this.handleBackgroundSave}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c5fbf9dd.chunk.js.map