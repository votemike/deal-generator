(this["webpackJsonpdeal-generator"]=this["webpackJsonpdeal-generator"]||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},18:function(e,a,t){},19:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(8),i=t.n(s),r=(t(18),t(10)),c=(t(19),new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP"})),m=function(e){return c.format(e)},o=t(5),d=t(3),u=function(e){var a=e.formData;if(void 0===a.name)return null;var t=Object(o.calculate)(parseFloat(a.price),o.propertyTypes.RESIDENTIAL,o.countries.ENGLAND,o.buyerTypes.INVESTOR).tax,l=new d.f(parseFloat(a.price),[new d.a(parseFloat(a.solicitorFee)),new d.a(parseFloat(a.surveyFee)),new d.a(parseFloat(a.landRegistryFee)),new d.a(parseFloat(t))]),s=3*parseFloat(a.estimatedFinalValue)/4,i=12*parseFloat(a.loanCosts)*100/s,r=new d.a(parseFloat(a.mortgageFee)),c=new d.b(s,!1,0,i,[r]),u=new d.c(parseFloat(a.insurance),"monthly"),h=new d.e(parseFloat(a.rentalIncome),parseFloat(a.lettingFee)),p=new d.d([c],[u],[h]),E=l.calculateTotalCosts()+parseFloat(a.refurbCost)+parseFloat(a.refurbLoanCosts)+c.totalOneOffCosts,N=E-s,v=p.calculateMonthlyProfit();return n.a.createElement("div",{className:"box"},n.a.createElement("h2",{className:"title is-3"},"Deal results"),n.a.createElement("div",{className:"tile is-ancestor"},n.a.createElement("div",{className:"tile is-vertical is-8"},n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("div",{className:"tile is-child notification is-primary is-light"},n.a.createElement("p",{className:"title"},"Required Money"),n.a.createElement("p",{className:"subtitle"},m(E))),n.a.createElement("div",{className:"tile is-child notification is-warning"},n.a.createElement("p",{className:"title"},"Final Value"),n.a.createElement("p",{className:"subtitle"},m(a.estimatedFinalValue)))),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("div",{className:"tile is-child notification is-info"},n.a.createElement("p",{className:"title"},"Profit"),n.a.createElement("p",{className:"subtitle"},m(parseFloat(a.estimatedFinalValue)-E))))),n.a.createElement("div",{className:"tile"},n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("div",{className:"tile is-child notification is-danger"},n.a.createElement("p",{className:"title"},"Mortgage Amount"),n.a.createElement("p",{className:"subtitle"},m(s)))),n.a.createElement("div",{className:"tile is-parent is-vertical"},n.a.createElement("div",{className:"tile is-child notification is-info is-light"},n.a.createElement("p",{className:"title"},"Money Left In Deal"),n.a.createElement("p",{className:"subtitle"},m(N))),n.a.createElement("div",{className:"tile is-child notification is-primary"},n.a.createElement("p",{className:"title"},"Monthly Profit"),n.a.createElement("p",{className:"subtitle"},m(v)))))),n.a.createElement("div",{className:"tile is-parent"},n.a.createElement("div",{className:"tile is-child notification is-success"},n.a.createElement("p",{className:"title"},"Yearly ROI"),n.a.createElement("p",{className:"subtitle"},Math.round(100*v*12/N),"%")))))},h=t(9),p=t(1),E=t(2),N=t(4),v=t(11),f=t(12),b=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(e){var l;return Object(p.a)(this,t),(l=a.call(this,e)).state=l.getInitialFormState(),l.handleInputChange=l.handleInputChange.bind(Object(N.a)(l)),l.handleSubmit=l.handleSubmit.bind(Object(N.a)(l)),l}return Object(E.a)(t,[{key:"getInitialFormState",value:function(){return{name:"",price:"",solicitorFee:"",surveyFee:"",bankTransferFee:"",landRegistryFee:"",refurbCost:"",refurbLoanCosts:"",estimatedFinalValue:"",loanCosts:"",mortgageFee:"",rentalIncome:"",lettingFee:"",insurance:""}}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,l=a.name;this.setState(Object(h.a)({},l,t))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.formHandler(this.state)}},{key:"render",value:function(){return n.a.createElement("div",{className:"box"},n.a.createElement("h2",{className:"title is-3"},"Enter the deal info"),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("h3",{className:"subtitle is-4"},"Property Info"),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Property Name")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"name",value:this.state.name,onChange:this.handleInputChange,placeholder:"Downing Street",required:!0})),n.a.createElement("p",{className:"help"},"Give this property a label")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Price")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"price",value:this.state.price,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"295000",id:"price",required:!0})),n.a.createElement("p",{className:"help"},"The price you will buy the property for")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Fees")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"solicitorFee",value:this.state.solicitorFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"1495",id:"solicitorFee",required:!0})),n.a.createElement("p",{className:"help"},"Solicitor Fee")),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"surveyFee",value:this.state.surveyFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"395",id:"surveyFee",required:!0})),n.a.createElement("p",{className:"help"},"Survey Fee")),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"bankTransferFee",value:this.state.bankTransferFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"35",id:"bankTransferFee",required:!0})),n.a.createElement("p",{className:"help"},"Bank Transfer Fee")),n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"landRegistryFee",value:this.state.landRegistryFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"200",id:"landRegistryFee",required:!0})),n.a.createElement("p",{className:"help"},"Land Registry")))),n.a.createElement("h3",{className:"subtitle is-4"},"Refurb Info"),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Refurb Cost")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"refurbCost",value:this.state.refurbCost,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"17000",id:"refurbCost",required:!0})),n.a.createElement("p",{className:"help"},"How much will need to be spent on the property")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Loan Costs")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"refurbLoanCosts",value:this.state.refurbLoanCosts,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"1200",id:"refurbLoanCosts",required:!0})),n.a.createElement("p",{className:"help"},"How much will the interest on any loans during the refurbishment cost?")))),n.a.createElement("h3",{className:"subtitle is-4"},"End Result Info"),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Estimated Final Value")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"estimatedFinalValue",value:this.state.estimatedFinalValue,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"350000",id:"estimatedFinalValue",required:!0})),n.a.createElement("p",{className:"help"},"What is the estimated final value for the property after refurbishment?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Mortgage Cost")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"loanCosts",value:this.state.loanCosts,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"250",id:"loanCosts",required:!0})),n.a.createElement("p",{className:"help"},"How much will the mortgage payments cost each month?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Mortgage Fee")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"mortgageFee",value:this.state.mortgageFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"995",id:"mortgageFee",required:!0})),n.a.createElement("p",{className:"help"},"How much will the mortgage arrangement fee be?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Rental Income")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"rentalIncome",value:this.state.rentalIncome,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"750",id:"rentalIncome",required:!0})),n.a.createElement("p",{className:"help"},"What is the expected monthly rental income?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Letting Fee")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"lettingFee",value:this.state.lettingFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"9",id:"lettingFee",required:!0})),n.a.createElement("p",{className:"help"},"What percentage is the letting fee?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label is-normal"},n.a.createElement("label",{className:"label"},"Insurance")),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("input",{className:"input",name:"insurance",value:this.state.insurance,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"35",id:"insurance",required:!0})),n.a.createElement("p",{className:"help"},"How much will any insurance cost each month?")))),n.a.createElement("div",{className:"field is-horizontal"},n.a.createElement("div",{className:"field-label"}),n.a.createElement("div",{className:"field-body"},n.a.createElement("div",{className:"field"},n.a.createElement("div",{className:"control"},n.a.createElement("button",{type:"submit",className:"button is-primary"},"Generate")))))))}}]),t}(n.a.Component);var g=function(){var e=Object(l.useState)({}),a=Object(r.a)(e,2),t=a[0],s=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{className:"deal-generator section"},n.a.createElement("div",{className:"container"},n.a.createElement("header",null,n.a.createElement("h1",{className:"title is-1"},"Deal Generator")),n.a.createElement(b,{formHandler:s}),n.a.createElement(u,{formData:t}),n.a.createElement("div",{className:"has-text-centered is-size-7"},"Assumptions: The property is in England and follows normal stamp duty costs with the added 3% for second homes. The property has no ground-rent or maintenance charge. The property is a single property and will remain a single property. The purchase will be funded by a bridging loan and will be remortgaged once refurbishment is complete. The mortgage will be interest only with 75% LTV. No other loans will exist apart from the mortgage."))),n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"content has-text-centered"},n.a.createElement("p",null,"Created by ",n.a.createElement("a",{href:"https://votemike.co.uk"},"Michael Gwynne")),n.a.createElement("p",null,"You may also like ",n.a.createElement("a",{href:"https://votemike.github.io/amortisation-calculator/"},"Amortisation Calculator")," and ",n.a.createElement("a",{href:"https://votemike.github.io/stress-test/"},"Property Stress Test")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.aefb07e2.chunk.js.map