(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),l=n(7),o=n.n(l),a=(n(12),n(13),n(0));function s(e){return Object(a.jsx)("div",{id:e.id,className:e.className,children:"Please enter a title for the expense and amount of money spent for it"})}var j=function(e){return Object(a.jsxs)("h2",{id:e.id,className:e.className,children:["Total Balance:",Object(a.jsx)("span",{id:"balance"})]})};function r(e){return Object(a.jsxs)("div",{className:e.className,children:[Object(a.jsx)("h3",{children:"Currency"}),Object(a.jsxs)("select",{id:"currency",defaultValue:"EUR",children:[Object(a.jsx)("option",{value:"AED",children:"AED"}),Object(a.jsx)("option",{value:"ARS",children:"ARS"}),Object(a.jsx)("option",{value:"AUD",children:"AUD"}),Object(a.jsx)("option",{value:"BGN",children:"BGN"}),Object(a.jsx)("option",{value:"BRL",children:"BRL"}),Object(a.jsx)("option",{value:"BSD",children:"BSD"}),Object(a.jsx)("option",{value:"CAD",children:"CAD"}),Object(a.jsx)("option",{value:"CHF",children:"CHF"}),Object(a.jsx)("option",{value:"CLP",children:"CLP"}),Object(a.jsx)("option",{value:"CNY",children:"CNY"}),Object(a.jsx)("option",{value:"COP",children:"COP"}),Object(a.jsx)("option",{value:"CZK",children:"CZK"}),Object(a.jsx)("option",{value:"DKK",children:"DKK"}),Object(a.jsx)("option",{value:"DOP",children:"DOP"}),Object(a.jsx)("option",{value:"EGP",children:"EGP"}),Object(a.jsx)("option",{value:"EUR",children:"EUR"}),Object(a.jsx)("option",{value:"FJD",children:"FJD"}),Object(a.jsx)("option",{value:"GBP",children:"GBP"}),Object(a.jsx)("option",{value:"GTQ",children:"GTQ"}),Object(a.jsx)("option",{value:"HKD",children:"HKD"}),Object(a.jsx)("option",{value:"HRK",children:"HRK"}),Object(a.jsx)("option",{value:"HUF",children:"HUF"}),Object(a.jsx)("option",{value:"IDR",children:"IDR"}),Object(a.jsx)("option",{value:"ILS",children:"ILS"}),Object(a.jsx)("option",{value:"INR",children:"INR"}),Object(a.jsx)("option",{value:"ISK",children:"ISK"}),Object(a.jsx)("option",{value:"JPY",children:"JPY"}),Object(a.jsx)("option",{value:"KRW",children:"KRW"}),Object(a.jsx)("option",{value:"KZT",children:"KZT"}),Object(a.jsx)("option",{value:"MXN",children:"MXN"}),Object(a.jsx)("option",{value:"MYR",children:"MYR"}),Object(a.jsx)("option",{value:"NOK",children:"NOK"}),Object(a.jsx)("option",{value:"NZD",children:"NZD"}),Object(a.jsx)("option",{value:"PAB",children:"PAB"}),Object(a.jsx)("option",{value:"PEN",children:"PEN"}),Object(a.jsx)("option",{value:"PHP",children:"PHP"}),Object(a.jsx)("option",{value:"PKR",children:"PKR"}),Object(a.jsx)("option",{value:"PLN",children:"PLN"}),Object(a.jsx)("option",{value:"PYG",children:"PYG"}),Object(a.jsx)("option",{value:"RON",children:"RON"}),Object(a.jsx)("option",{value:"RUB",children:"RUB"}),Object(a.jsx)("option",{value:"SAR",children:"SAR"}),Object(a.jsx)("option",{value:"SEK",children:"SEK"}),Object(a.jsx)("option",{value:"SGD",children:"SGD"}),Object(a.jsx)("option",{value:"THB",children:"THB"}),Object(a.jsx)("option",{value:"TRY",children:"TRY"}),Object(a.jsx)("option",{value:"TWD",children:"TWD"}),Object(a.jsx)("option",{value:"UAH",children:"UAH"}),Object(a.jsx)("option",{value:"USD",children:"USD"}),Object(a.jsx)("option",{value:"UYU",children:"UYU"}),Object(a.jsx)("option",{value:"VND",children:"VND"}),Object(a.jsx)("option",{value:"ZAR",children:"ZAR"})]})]})}var d=n(2),u=n(3),b=n(5),O=n(4);function h(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:e.title}),Object(a.jsx)("input",{onChange:e.onChange,id:e.id,className:e.className,type:e.type,placeholder:e.placeholder})]})}var x=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={incomeEntered:0,expensesTotal:0},e.updateState=function(t){e.setState({incomeEntered:t.target.value}),console.log("incomeEntered entered by user value ",t.target.value),e.showCurrentBalance(),"has-value"!==t.target.class&&(t.target.className="has-value")},e.showCurrentBalance=function(){console.log("incomeEntered state value",e.state.incomeEntered),console.log("-----")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state;return Object(a.jsxs)("div",{className:"income-expenses-container",children:[Object(a.jsx)(h,{onChange:this.updateState,value:e.incomeEntered,title:"Income",id:"income",type:"text",placeholder:"Your income"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Expenses"}),Object(a.jsx)("div",{id:"expensesTotal",children:e.expensesTotal})]})]})}}]),n}(c.Component),p=function(e){Object(b.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,i=new Array(c),l=0;l<c;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={expenseEntered:0},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(h,{title:"Expense",id:"expenseItem",type:"text",placeholder:"Enter item"})}}]),n}(c.Component);function v(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:"Amount"}),Object(a.jsx)("input",{id:"expenseAmount",type:"number",min:"1"})]})}function m(e){return Object(a.jsx)("button",{id:"addExpenseButton",className:"btn",onClick:e.onClick,children:e.content})}function N(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(s,{id:"error-message",className:"error-message"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Expense Tracker"}),Object(a.jsx)(j,{id:"balance-container",className:"balance-container"}),Object(a.jsx)(r,{className:"currency-container"}),Object(a.jsx)(x,{})]}),Object(a.jsxs)("form",{children:[Object(a.jsx)(p,{}),Object(a.jsx)(v,{}),Object(a.jsx)(m,{content:"Add expense",onClick:function(e){e.preventDefault(),console.log("addItemToList works ")}})]}),Object(a.jsx)("div",{id:"list"})]})}var f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),l(e),o(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.3593a694.chunk.js.map