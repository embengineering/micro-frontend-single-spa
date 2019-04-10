(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{23:function(e,t,a){"use strict";a.r(t);var n=a(5),r=a.n(n),o=a(13),l=a.n(o),i=a(17),c=a.n(i),s=a(22),m=a(7),u=a(8),d=a(10),h=a(9),b=a(11),p=function(e){var t=e.description,a=void 0===t?"":t,n=e.currentValue,o=void 0===n?0:n,l=e.defaultValue,i=void 0===l?0:l,c=e.onAddClick,s=e.onRemoveClick,m=e.onDeleteClick;return r.a.createElement("div",{className:"card",style:{marginBottom:"10px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},a," ",r.a.createElement("div",{className:"float-right badge badge-info"},"".concat(o," / ").concat(i))),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:c},"Add")," ",r.a.createElement("button",{type:"button",className:"btn btn-sm btn-secondary",onClick:s},"Remove"),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger float-right",onClick:m},"Delete")),r.a.createElement("div",{className:"progress",style:{borderTopLeftRadius:0,borderTopRightRadius:0}},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(o/i*100,"%")},"aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":i})))},f=a(21),g=a(18),v=a.n(g),C=function(e){var t=e.description,a=e.defaultValue,n=e.onFormDescriptionChange,o=e.onFormDefaultChange,l=e.onSaveForm,i=e.onCancelForm;return r.a.createElement("div",{className:"card",style:{marginBottom:"10px"}},r.a.createElement("div",{className:"card-body"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement("input",{value:t,onChange:n,name:"description",type:"text",className:"form-control",placeholder:"Enter description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Default"),r.a.createElement("input",{value:a,onChange:o,name:"default",type:"number",step:"1",className:"form-control",placeholder:"Enter default"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:l},"Save")," ",r.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:i},"Cancel"))))},y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleCancelForm=function(){return a.props.hideForm()},a.handleSaveForm=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("tallyItems")||"[]"),n={id:a.state.id||v()(),description:a.state.description.trim(),defaultValue:a.state.defaultValue,currentValue:a.state.currentValue},r=[].concat(Object(f.a)(t),[n]);localStorage.setItem("tallyItems",JSON.stringify(r)),a.props.updateItems(r),a.props.hideForm()},a.handleFormDescriptionChange=function(e){return a.setState({description:e.target.value})},a.handleFormDefaultChange=function(e){return a.setState({defaultValue:e.target.value})},a.state={id:"",description:"",defaultValue:0,currentValue:0},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(C,{onSaveForm:this.handleSaveForm,onCancelForm:this.handleCancelForm,description:this.state.description,defaultValue:this.state.defaultValue,onFormDescriptionChange:this.handleFormDescriptionChange,onFormDefaultChange:this.handleFormDefaultChange})}}]),t}(r.a.Component),N=function(e){var t=e.items,a=void 0===t?[]:t,n=e.formVisible,o=e.onAddClick,l=e.onRemoveClick,i=e.onDeleteClick,c=e.onNewCategory,s=e.onResetAll,m=e.hideForm,u=e.showForm,d=e.updateItems;return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-link",onClick:c},"New Category"),r.a.createElement("button",{className:"btn btn-link text-muted",onClick:s},"Reset All"),n&&r.a.createElement(y,{hideForm:m,showForm:u,updateItems:d}),a.length?a.map(function(e){return r.a.createElement(p,Object.assign({key:e.id},e,{onAddClick:o.bind(void 0,e.id),onRemoveClick:l.bind(void 0,e.id),onDeleteClick:i.bind(void 0,e.id)}))}):r.a.createElement("div",{className:"alert alert-primary"},"No categories were found."),r.a.createElement("div",{className:"alert alert-secondary"},r.a.createElement("strong",null,"TALLY! "),"Tally is a record of amounts or numbers which you keep changing and adding to as the activity which affects it progresses."))},k=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleAddClick=function(e){return a.setState({items:a.state.items.map(function(t){return t.id===e&&t.currentValue>0&&console.log("".concat(t.description," increased to ").concat(Number(t.currentValue)+1)),t.id===e?Object(s.a)({},t,{currentValue:Number(t.currentValue)+1}):t})},a.storeItemsInLocalStorage)},a.handleRemoveClick=function(e){return a.setState({items:a.state.items.map(function(t){return t.id===e&&t.currentValue>0&&console.log("".concat(t.description," decreased to ").concat(Number(t.currentValue)-1)),t.id===e&&t.currentValue>0?Object(s.a)({},t,{currentValue:Number(t.currentValue)-1}):t})},a.storeItemsInLocalStorage)},a.handleDeleteClick=function(e){return a.setState({items:a.state.items.filter(function(t){return t.id!==e})},a.storeItemsInLocalStorage)},a.handleNewCategoryClick=function(){return a.showForm()},a.handleResetAll=function(){return a.setState({items:a.state.items.map(function(e){return Object(s.a)({},e,{currentValue:0})})},a.storeItemsInLocalStorage)},a.hideForm=function(){return a.setState({formVisible:!1})},a.showForm=function(){return a.setState({formVisible:!0})},a.updateItems=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return a.setState({items:e},a.storeItemsInLocalStorage)},a.getItemsFromLocalStorage=function(){return JSON.parse(localStorage.getItem("tallyItems")||"[]")},a.storeItemsInLocalStorage=function(){localStorage.setItem("tallyItems",JSON.stringify(a.state.items)),console.log("Items updated in local storage:",a.state.items)},a.state={items:a.getItemsFromLocalStorage(),formVisible:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(N,{items:this.state.items,formVisible:this.state.formVisible,onAddClick:this.handleAddClick.bind(this),onRemoveClick:this.handleRemoveClick,onDeleteClick:this.handleDeleteClick,onNewCategory:this.handleNewCategoryClick,onResetAll:this.handleResetAll,hideForm:this.hideForm,showForm:this.showForm,updateItems:this.updateItems}))}}]),t}(r.a.Component);a.d(t,"bootstrap",function(){return F}),a.d(t,"mount",function(){return I}),a.d(t,"unmount",function(){return S});var E=c()({React:r.a,ReactDOM:l.a,rootComponent:k,domElementGetter:function(){return document.getElementById("root")}}),F=[E.bootstrap],I=[E.mount],S=[E.unmount]}}]);
//# sourceMappingURL=3.0fe80087.chunk.js.map