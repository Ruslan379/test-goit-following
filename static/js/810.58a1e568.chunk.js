/*! For license information please see 810.58a1e568.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktest_goit_following=self.webpackChunktest_goit_following||[]).push([[810],{3917:function(e,n,a){a.d(n,{R:function(){return j}});var s=a(885),t=a(2791),o=a(9434),r=a(8174),l=(a(5462),a(5822)),c=a(4289),i=a(4164),d={Overlay:"ModalNullBalance_Overlay__MY3ZA",Modal:"ModalNullBalance_Modal__Ow1Wp"},u=a(3329),m=document.querySelector("#modal-root");function p(e){var n=e.children,a=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,i.createPortal)((0,u.jsx)("div",{className:d.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,u.jsx)("div",{className:d.Modal,children:n})}),m)}var _="ModalNullBalanceWindow_FormEdit__kofm7",h=function(){return(0,u.jsx)("div",{className:_,children:"Hello! To get started, enter the current balance of your account!"})},v="BalanceForm_Form__sTjkN",x="BalanceForm_FormLabel__D+IkA",f="BalanceForm_FormBtn__7m8A3",T="BalanceForm_FormInput__bqPQk",b="BalanceForm_btnConfirmActive__b9hJv",g="BalanceForm_btnConfirmDisabled__+QPff",j=function(e){var n=e.balance;console.log("BalanceForm ==> ({BALANCE}):",n);var a=(0,o.I0)(),i=(0,t.useState)(!1),d=(0,s.Z)(i,2),m=d[0],_=d[1];(0,t.useEffect)((function(){a((0,l.mH)())}));var j=(0,o.v9)(c.QM);console.log("BalanceForm ==> balanceNew:",j),console.log("BalanceForm ==> typeof balanceNew:",typeof Number(j));var N=(0,o.v9)(c.wU);console.log("BalanceForm ==> isRefreshing:",N);var F=(0,o.v9)(c.NF);console.log("BalanceForm ==> isNotNewUser:",F);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{className:v,onSubmit:function(e){e.preventDefault();var n=e.currentTarget,s=n.elements.balance.value;j||F||a((0,l.he)({isNotNewUser:!0})),a((0,l.Fg)({balance:s})),r.Am.success("Your balance has been successfully updated to ".concat(s," UAN")),n.reset()},children:[(0,u.jsxs)("label",{className:x,children:["Balance:\xa0\xa0\xa0",(0,u.jsx)("input",{className:T,type:"text",name:"balance",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)",disabled:F,placeholder:j})]}),(0,u.jsx)("button",{className:f,type:"submit",disabled:F,children:F?(0,u.jsx)("span",{className:g,children:"NO CONFIRM"}):(0,u.jsx)("span",{className:b,children:"CONFIRM"})})]}),!j&&!F&&(0,u.jsx)(p,{onClose:function(){_(!m)},children:(0,u.jsx)(h,{})}),(0,u.jsx)(r.Ix,{autoClose:1500,theme:"colored"})]})}},5700:function(e,n,a){a.d(n,{W:function(){return o}});a(2791);var s="Container_Container__dPyVg",t=a(3329),o=function(e){var n=e.children;return(0,t.jsx)("div",{className:s,children:n})}},1258:function(e,n,a){a.d(n,{v:function(){return g}});var s=a(2982),t=a(885),o=a(9434),r=a(8174),l=(a(5462),a(2426)),c=a.n(l),i=a(5822),d=a(7614),u=a(4289),m=a(3982),p="TransactionForm_Form__HDr-h",_="TransactionForm_FormLabel__33C-l",h="TransactionForm_FormBtn__kZSQ7",v="TransactionForm_FormInput__IXxud",x="TransactionForm_FormInputSum__RcDsc",f="TransactionForm_selectText__NeAXk",T="TransactionForm_selectPlaceholder__ilaY3",b=a(3329),g=function(e){var n=e.balance,a=e.transactionsType,l=(0,o.I0)(),g=(0,m.a)(),j=g.isRefreshing,N=g.user,F=g.balance,y=N.balance;console.log("TransactionForm ==> balanceUser:",y),console.log("TransactionForm ==> balanceAuth:",F),console.log("TransactionForm ==> isRefreshingAuth:",j);var L=(0,o.v9)(u.QM);console.log("TransactionForm ==> balance1:",L);var w=(0,o.v9)(u.wU);console.log("TransactionForm ==> isRefreshing:",w);var D=c()().format("DD.MM.YYYY hh:mm:ss");console.log("currentFullDate:",D);var I=D.split(" ");console.log("currentFullDateSplit:",I);var C=D.split(" "),A=(0,t.Z)(C,2),M=A[0],S=A[1];console.log("currentDate:",M),console.log("currentTime:",S);var k=M.split(".");k.reverse(),console.log("currentFullDateSplitDate:",k);var B=S.split(":");console.log("currentFullDateSplitTime:",B);var E=[].concat((0,s.Z)(k),(0,s.Z)(B));console.log("currentFullDateSplitAll:",E);var O=Number(E.join(""));console.log("currentFullDateJoin:",O);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("form",{className:p,id:"transactionForm",onSubmit:function(e){e.preventDefault();var s=e.currentTarget,t=D;if(s.elements.date.value!==M){t=s.elements.date.value,console.log("TransactionForm ==> date:",t);var o=t.split(".");o.reverse(),console.log("TransactionForm ==> dateSplit:",o),O=Number(o.join("")+"000000"),console.log("currentFullDateJoin:",O)}var c=s.elements.description.value,u=s.elements.category.value,m=s.elements.sum.value;if(c)if("true"!==u)if(m)if(n-m<0)r.Am.error("Transaction NOT ALLOWED!!!\n Your expenses exceed your balance");else{var p={transactionsType:a,date:t,sortDate:O,description:c,category:u,sum:m};console.log("transaction:",p),l((0,d.dT)(p)),"expenses"===a&&r.Am.info("Your Expenses transaction has been successfully added"),"income"===a&&r.Am.success("Your Income transaction has been successfully added"),s.reset(),l((0,i.mH)())}else r.Am.warning("Please enter the transaction amount");else r.Am.warning("Please choose a product category");else r.Am.warning("Please enter a product description")},children:[(0,b.jsx)("label",{className:_,children:(0,b.jsx)("input",{className:v,type:"text",name:"date",defaultValue:M})}),(0,b.jsx)("label",{className:_,children:(0,b.jsx)("input",{className:v,type:"text",name:"description",placeholder:"Product description"})}),(0,b.jsx)("label",{className:_}),(0,b.jsxs)("select",{className:f,id:"productCategory",name:"category",form:"transactionForm",children:[(0,b.jsx)("option",{className:T,value:!0,disabled:!0,selected:!0,children:"Product category"}),(0,b.jsx)("option",{value:"Transport",disabled:"income"===a,children:"Transport"}),(0,b.jsx)("option",{value:"Products",disabled:"income"===a,children:"Products"}),(0,b.jsx)("option",{value:"Health",disabled:"income"===a,children:"Health"}),(0,b.jsx)("option",{value:"Alcohol",disabled:"income"===a,children:"Alcohol"}),(0,b.jsx)("option",{value:"Entertainment",disabled:"income"===a,children:"Entertainment"}),(0,b.jsx)("option",{value:"Housing",disabled:"income"===a,children:"Housing"}),(0,b.jsx)("option",{value:"Technique",disabled:"income"===a,children:"Technique"}),(0,b.jsx)("option",{value:"Communal, communication",disabled:"income"===a,children:"Communal, communication"}),(0,b.jsx)("option",{value:"Sports, hobbies",disabled:"income"===a,children:"Sports, hobbies"}),(0,b.jsx)("option",{value:"Education",disabled:"income"===a,children:"Education"}),(0,b.jsx)("option",{value:"Other",disabled:"income"===a,children:"Other"}),(0,b.jsx)("option",{value:"Salary",disabled:"expenses"===a,children:"Salary"}),(0,b.jsx)("option",{value:"Add.Income",disabled:"expenses"===a,children:"Add.Income"})]}),(0,b.jsx)("label",{className:_,children:(0,b.jsx)("input",{className:x,type:"text",name:"sum",placeholder:"0,00",pattern:"^(([0-9]*)|(([0-9]*)\\.([0-9]*)))$",title:"\u0412alance must be whole numbers (or decimal numbers)"})}),(0,b.jsx)("button",{className:h,type:"submit",children:"INPUT"}),(0,b.jsx)("input",{className:h,type:"reset",value:"CLEAR",form:"transactionForm"})]}),(0,b.jsx)(r.Ix,{autoClose:1500,theme:"colored"})]})}},6590:function(e,n,a){a.d(n,{z:function(){return I}});var s=a(885),t=a(2791),o=a(9434),r=a(1941),l=a(4164),c={Overlay:"ModalTransactionLDelete_Overlay__2H6-n",Modal:"ModalTransactionLDelete_Modal__-XWSS"},i=a(3329),d=document.querySelector("#modal-root");function u(e){var n=e.children,a=e.onClose;(0,t.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[a]);return(0,l.createPortal)((0,i.jsx)("div",{className:c.Overlay1,onClick:function(e){e.currentTarget===e.target&&a()},children:(0,i.jsx)("div",{className:c.Modal,children:n})}),d)}var m=a(7614),p=a(966),_="ModalTransactionLDeleteWindow_modalWindow__pZbt3",h="ModalTransactionLDeleteWindow_modalTitle__KTziP",v="ModalTransactionLDeleteWindow_modalBtnYes__seQMO",x="ModalTransactionLDeleteWindow_modalBtnNo__5+gwW",f=function(e){var n=e.id,a=e.toggleModal,s=(0,o.I0)(),t=(0,o.v9)(r.O);console.log("ModalTransactionLDeleteWindow ==> isLoading:",t);return(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)(p.a,{}),(0,i.jsxs)("div",{className:_,children:[(0,i.jsx)("p",{className:h,children:"Are you sure?"}),(0,i.jsx)("button",{className:v,type:"button",onClick:function(){s((0,m.Ks)(n)),a()},children:"YES"}),(0,i.jsx)("button",{className:x,type:"button",onClick:a,children:"NO"})]})]})},T="TransactionListItem_TransactionListItem__7P-i+",b="TransactionListItem_TransactionListItemText__pk84L",g="TransactionListItem_TransactionListItemTextSumExpenses__shLQA",j="TransactionListItem_TransactionListItemTextSumIncome__2F-2F",N="TransactionListItem_ContactListDeleteBtn__6pp5k",F=function(e){var n=e.id,a=e.date,l=e.transactionsType,c=e.description,d=e.category,m=e.sum,p=a.split(" "),_=(0,s.Z)(p,1)[0];console.log("TransactionListItem ==> date:",_);var h=(0,t.useState)(!1),v=(0,s.Z)(h,2),x=v[0],F=v[1],y=function(){F(!x)},L=(0,o.v9)(r.O);return console.log("TransactionListItem ==> isLoading:",L),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("li",{className:T,children:[(0,i.jsx)("p",{className:b,children:_}),(0,i.jsx)("p",{className:b,children:c}),(0,i.jsx)("p",{className:b,children:d}),(0,i.jsx)("p",{className:"expenses"===l?g:j,children:"expenses"===l?-m:m}),(0,i.jsx)("button",{type:"button",className:N,onClick:y,disabled:L,children:"Delete"})]}),x&&(0,i.jsx)(u,{onClose:y,children:(0,i.jsx)(f,{id:n,toggleModal:y})})]})},y="TransactionList_ContactList__6JVJP",L="TransactionList_TransactionListHeader__lXBuk",w="TransactionList_TransactionListText__PdA0x",D="TransactionList_TransactionListTextDate__I+Yet",I=function(e){var n=e.transactions,a=e.transactionsType,o=(0,t.useState)(!1),r=(0,s.Z)(o,2),l=r[0],c=r[1];console.log("TransactionList ==> transactions:",n);var d=n.filter((function(e){return"expenses"===e.transactionsType}));console.log("TransactionList ==> transactionsExpenses:",d);var u=n.filter((function(e){return"income"===e.transactionsType}));console.log("TransactionList ==> transactionsIncome:",u);var m=[];"expenses"===a&&(m=d),"income"===a&&(m=u);return l&&(m=m.reverse()),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:L,children:[(0,i.jsx)("p",{className:D,onClick:function(){c(!l),console.log("TransactionList-reverse ==> reverseSort:",l)},children:l?[(0,i.jsx)("span",{children:"\u21d3\xa0"}),"Date"]:[(0,i.jsx)("span",{children:"\u21d1\xa0"}),"Date"]}),(0,i.jsx)("p",{className:w,children:"Description"}),(0,i.jsx)("p",{className:w,children:"Category"}),(0,i.jsx)("p",{className:w,children:"Sum"}),(0,i.jsx)("p",{className:w})]}),(0,i.jsx)("ul",{className:y,children:m.map((function(e){var n=e._id,a=e.transactionsType,s=e.date,t=e.description,o=e.category,r=e.sum;return(0,i.jsx)(F,{id:n,transactionsType:a,date:s,description:t,category:o,sum:r},n)}))})]})}},1941:function(e,n,a){a.d(n,{O:function(){return s},a:function(){return t}});var s=function(e){return e.transactions.isLoading},t=function(e){return e.transactions.allTransactions}}}]);
//# sourceMappingURL=810.58a1e568.chunk.js.map