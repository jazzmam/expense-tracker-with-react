(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),l=t(3),j=t.n(l),o=(t(8),t(9),t(0));function s(e){return Object(o.jsx)("div",{id:e.id,className:e.className,children:"Please enter a title for the expense and amount of money spent for it"})}var a=function(e){return Object(o.jsxs)("h2",{id:e.id,className:e.className,children:["Total Balance:",Object(o.jsx)("span",{id:"balance"})]})};function r(e){return Object(o.jsxs)("div",{className:e.className,children:[Object(o.jsx)("h3",{children:"Currency"}),Object(o.jsxs)("select",{id:"currency",defaultValue:"EUR",children:[Object(o.jsx)("option",{value:"AED",children:"AED"}),Object(o.jsx)("option",{value:"ARS",children:"ARS"}),Object(o.jsx)("option",{value:"AUD",children:"AUD"}),Object(o.jsx)("option",{value:"BGN",children:"BGN"}),Object(o.jsx)("option",{value:"BRL",children:"BRL"}),Object(o.jsx)("option",{value:"BSD",children:"BSD"}),Object(o.jsx)("option",{value:"CAD",children:"CAD"}),Object(o.jsx)("option",{value:"CHF",children:"CHF"}),Object(o.jsx)("option",{value:"CLP",children:"CLP"}),Object(o.jsx)("option",{value:"CNY",children:"CNY"}),Object(o.jsx)("option",{value:"COP",children:"COP"}),Object(o.jsx)("option",{value:"CZK",children:"CZK"}),Object(o.jsx)("option",{value:"DKK",children:"DKK"}),Object(o.jsx)("option",{value:"DOP",children:"DOP"}),Object(o.jsx)("option",{value:"EGP",children:"EGP"}),Object(o.jsx)("option",{value:"EUR",children:"EUR"}),Object(o.jsx)("option",{value:"FJD",children:"FJD"}),Object(o.jsx)("option",{value:"GBP",children:"GBP"}),Object(o.jsx)("option",{value:"GTQ",children:"GTQ"}),Object(o.jsx)("option",{value:"HKD",children:"HKD"}),Object(o.jsx)("option",{value:"HRK",children:"HRK"}),Object(o.jsx)("option",{value:"HUF",children:"HUF"}),Object(o.jsx)("option",{value:"IDR",children:"IDR"}),Object(o.jsx)("option",{value:"ILS",children:"ILS"}),Object(o.jsx)("option",{value:"INR",children:"INR"}),Object(o.jsx)("option",{value:"ISK",children:"ISK"}),Object(o.jsx)("option",{value:"JPY",children:"JPY"}),Object(o.jsx)("option",{value:"KRW",children:"KRW"}),Object(o.jsx)("option",{value:"KZT",children:"KZT"}),Object(o.jsx)("option",{value:"MXN",children:"MXN"}),Object(o.jsx)("option",{value:"MYR",children:"MYR"}),Object(o.jsx)("option",{value:"NOK",children:"NOK"}),Object(o.jsx)("option",{value:"NZD",children:"NZD"}),Object(o.jsx)("option",{value:"PAB",children:"PAB"}),Object(o.jsx)("option",{value:"PEN",children:"PEN"}),Object(o.jsx)("option",{value:"PHP",children:"PHP"}),Object(o.jsx)("option",{value:"PKR",children:"PKR"}),Object(o.jsx)("option",{value:"PLN",children:"PLN"}),Object(o.jsx)("option",{value:"PYG",children:"PYG"}),Object(o.jsx)("option",{value:"RON",children:"RON"}),Object(o.jsx)("option",{value:"RUB",children:"RUB"}),Object(o.jsx)("option",{value:"SAR",children:"SAR"}),Object(o.jsx)("option",{value:"SEK",children:"SEK"}),Object(o.jsx)("option",{value:"SGD",children:"SGD"}),Object(o.jsx)("option",{value:"THB",children:"THB"}),Object(o.jsx)("option",{value:"TRY",children:"TRY"}),Object(o.jsx)("option",{value:"TWD",children:"TWD"}),Object(o.jsx)("option",{value:"UAH",children:"UAH"}),Object(o.jsx)("option",{value:"USD",children:"USD"}),Object(o.jsx)("option",{value:"UYU",children:"UYU"}),Object(o.jsx)("option",{value:"VND",children:"VND"}),Object(o.jsx)("option",{value:"ZAR",children:"ZAR"})]})]})}function d(e){return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:e.title}),Object(o.jsx)("input",{onClick:e.onClick,id:e.id,className:e.className,type:e.type,placeholder:e.placeholder})]})}function x(e){return Object(o.jsxs)("div",{className:e.className,children:[Object(o.jsx)(d,{onClick:function(){},title:"Income",id:"income",className:"income",type:"text",placeholder:"Your income"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Expenses"}),Object(o.jsx)("div",{id:"expensesTotal",children:"0"})]})]})}function b(){return Object(o.jsx)(d,{title:"Expense",id:"expenseItem",type:"text",placeholder:"Enter item"})}function u(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:"Amount"}),Object(o.jsx)("input",{id:"expenseAmount",type:"number",min:"1"})]})}function O(e){return Object(o.jsx)("button",{id:"addExpenseButton",className:"btn",children:e.content})}function p(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(s,{id:"error-message",className:"error-message"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Expense Tracker"}),Object(o.jsx)(a,{id:"balance-container",className:"balance-container"}),Object(o.jsx)(r,{className:"currency-container"}),Object(o.jsx)(x,{className:"income-expenses-container"})]}),Object(o.jsxs)("form",{children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{})]}),Object(o.jsx)(O,{content:"Add expense"}),Object(o.jsx)("div",{id:"list"})]})}var h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,l=n.getLCP,j=n.getTTFB;t(e),c(e),i(e),l(e),j(e)}))};j.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),h()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.c8f7b60d.chunk.js.map