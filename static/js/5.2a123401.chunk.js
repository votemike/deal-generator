(this["webpackJsonpproperty-investment-calculator"]=this["webpackJsonpproperty-investment-calculator"]||[]).push([[5],{30:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",(function(){return n}))},31:function(e,a,t){"use strict";function n(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,a,t){return a&&n(e.prototype,a),t&&n(e,t),e}t.d(a,"a",(function(){return l}))},50:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n);var r=t(7);var i=t(12);function s(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(i.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var m=t(30),c=t(31);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,a){return!a||"object"!==h(a)&&"function"!==typeof a?o(e):a}function f(e,a){return(f=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var b=function(e){var a=e.idx,t=e.label,n=e.object,r=e.handleChange,i=e.handleRemove,s=e.namePlaceHolder,m=e.nameHelpText,c=e.amountHelpText,o=e.prefix,d="".concat(o,"-name-").concat(a),u="".concat(o,"-amount-").concat(a);return l.a.createElement("div",{className:"field is-horizontal"},function(e,a){return e>0?l.a.createElement("div",{className:"field-label"}):l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},a))}(a,t),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:d,value:n.name,onChange:r,type:"text",placeholder:s,id:d,"data-idx":a,"data-name":"name",required:!0})),l.a.createElement("p",{className:"help"},m)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:u,value:n.amount,onChange:r,type:"number",step:"any",placeholder:"0",id:u,"data-idx":a,"data-name":"amount",required:!0})),l.a.createElement("p",{className:"help"},c)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},function(e,a){return e>0?l.a.createElement("input",{className:"button is-danger",type:"button",value:"Remove","data-idx":e,onClick:a}):l.a.createElement("input",{className:"button is-danger",type:"button",value:"Remove",disabled:"disabled"})}(a,i)))))},v=function(e){var a=e.idx,t=e.fee,n=e.handleFeeChange,r=e.handleRemoveFee;return l.a.createElement(b,{idx:a,label:"Fees",object:t,handleChange:n,handleRemove:r,namePlaceHolder:"X Fee",nameHelpText:"Fee name",amountHelpText:"Fee amount",prefix:"acquisitionFee"})},y=function(e){var a=e.idx,t=e.payment,n=e.handlePaymentChange,r=e.handleRemovePayment;return l.a.createElement(b,{idx:a,label:"Payments",object:t,handleChange:n,handleRemove:r,namePlaceHolder:"X Payment",nameHelpText:"Payment name",amountHelpText:"Annual amount",prefix:"annualPayment"})},E=function(e){!function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&f(e,a)}(n,e);var a,t=(a=n,function(){var e,t=d(a);if(u()){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state=a.getInitialFormState(),a.handleAddFee=a.handleAddFee.bind(o(a)),a.handleAddPayment=a.handleAddPayment.bind(o(a)),a.handleFeeChange=a.handleFeeChange.bind(o(a)),a.handleInputChange=a.handleInputChange.bind(o(a)),a.handlePaymentChange=a.handlePaymentChange.bind(o(a)),a.handleRemoveFee=a.handleRemoveFee.bind(o(a)),a.handleRemovePayment=a.handleRemovePayment.bind(o(a)),a.handleSubmit=a.handleSubmit.bind(o(a)),a}return Object(c.a)(n,[{key:"getInitialFormState",value:function(){return{name:"",price:"",acquisitionFees:[{name:"Bank Transfer Fee",amount:""},{name:"Broker Fee",amount:""},{name:"Land Registry Fee",amount:""},{name:"Solicitor Fee",amount:""},{name:"Sourcing Fee",amount:""},{name:"Survey Fee",amount:""}],refurbCost:"",refurbLoanCosts:"",estimatedFinalValue:"",mortgageAmount:"",initialMortgageRate:"",mortgageFee:"",rentalIncome:"",lettingFee:"",annualPayments:[{name:"Council Tax",amount:""},{name:"Ground Rent",amount:""},{name:"Insurance",amount:""},{name:"Maintenance Fee",amount:""}]}}},{key:"handleAddFee",value:function(){this.setState({acquisitionFees:[].concat(s(this.state.acquisitionFees),[{name:"",amount:""}])})}},{key:"handleAddPayment",value:function(){this.setState({annualPayments:[].concat(s(this.state.annualPayments),[{name:"",amount:""}])})}},{key:"handleFeeChange",value:function(e){var a=s(this.state.acquisitionFees);a[e.target.dataset.idx][e.target.dataset.name]=e.target.value,this.setState({acquisitionFees:a})}},{key:"handlePaymentChange",value:function(e){var a=s(this.state.annualPayments);a[e.target.dataset.idx][e.target.dataset.name]=e.target.value,this.setState({annualPayments:a})}},{key:"handleInputChange",value:function(e){var a=e.target,t="checkbox"===a.type?a.checked:a.value,n=a.name;this.setState(function(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}({},n,t))}},{key:"handleRemoveFee",value:function(e){var a=s(this.state.acquisitionFees);a.splice(e.target.dataset.idx,1),this.setState({acquisitionFees:a})}},{key:"handleRemovePayment",value:function(e){var a=s(this.state.annualPayments);a.splice(e.target.dataset.idx,1),this.setState({annualPayments:a})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.formHandler(this.state)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"box"},l.a.createElement("h2",{className:"title is-3"},"Enter the deal info"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h3",{className:"subtitle is-4"},"Property Info"),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Property Name")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"name",value:this.state.name,onChange:this.handleInputChange,placeholder:"Downing Street",required:!0})),l.a.createElement("p",{className:"help"},"Give this property a label")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Price")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"price",value:this.state.price,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"295000",id:"price",required:!0})),l.a.createElement("p",{className:"help"},"The price you will buy the property for")))),this.state.acquisitionFees.map((function(a,t){return l.a.createElement(v,{idx:t,fee:a,handleFeeChange:e.handleFeeChange,handleRemoveFee:e.handleRemoveFee,key:"acquisitionFee-".concat(t)})})),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label"}),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button",type:"button",value:"Add extra fee",onClick:this.handleAddFee}))))),l.a.createElement("h3",{className:"subtitle is-4"},"Refurb Info"),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Refurb Cost")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"refurbCost",value:this.state.refurbCost,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"17000",id:"refurbCost",required:!0})),l.a.createElement("p",{className:"help"},"How much will need to be spent on the property")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Loan Costs")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"refurbLoanCosts",value:this.state.refurbLoanCosts,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"1200",id:"refurbLoanCosts",required:!0})),l.a.createElement("p",{className:"help"},"How much will the interest on any loans during the refurbishment cost?")))),l.a.createElement("h3",{className:"subtitle is-4"},"End Result Info"),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Estimated Final Value")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"estimatedFinalValue",value:this.state.estimatedFinalValue,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"350000",id:"estimatedFinalValue",required:!0})),l.a.createElement("p",{className:"help"},"What is the estimated final value for the property after refurbishment?")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Mortgage")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"mortgageAmount",value:this.state.mortgageAmount,onChange:this.handleInputChange,type:"number",placeholder:"262500",id:"mortgageAmount",required:!0})),l.a.createElement("p",{className:"help"},"Mortgage Amount")),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"initialMortgageRate",value:this.state.initialMortgageRate,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"3.19",id:"initialMortgageRate",required:!0})),l.a.createElement("p",{className:"help"},"Initial Mortgage Rate")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Mortgage Fee")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"mortgageFee",value:this.state.mortgageFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"995",id:"mortgageFee",required:!0})),l.a.createElement("p",{className:"help"},"How much will the mortgage arrangement fee be?")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Rental Income")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"rentalIncome",value:this.state.rentalIncome,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"750",id:"rentalIncome",required:!0})),l.a.createElement("p",{className:"help"},"What is the expected monthly rental income?")))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label is-normal"},l.a.createElement("label",{className:"label"},"Letting Fee")),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",name:"lettingFee",value:this.state.lettingFee,onChange:this.handleInputChange,type:"number",step:"any",placeholder:"9",id:"lettingFee",required:!0})),l.a.createElement("p",{className:"help"},"What percentage is the letting fee?")))),this.state.annualPayments.map((function(a,t){return l.a.createElement(y,{idx:t,payment:a,handlePaymentChange:e.handlePaymentChange,handleRemovePayment:e.handleRemovePayment,key:"annualPayment-".concat(t)})})),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label"}),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"button",type:"button",value:"Add extra payment",onClick:this.handleAddPayment}))))),l.a.createElement("div",{className:"field is-horizontal"},l.a.createElement("div",{className:"field-label"}),l.a.createElement("div",{className:"field-body"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement("button",{type:"submit",className:"button is-primary"},"Generate")))))))}}]),n}(l.a.Component),N=Object(n.lazy)((function(){return t.e(4).then(t.bind(null,49))}));a.default=function(e){var a=e.formData,t=e.setFormData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"section pt-5"},l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h1",{className:"title is-1"},"Property Investment Calculator")),l.a.createElement("p",{className:"mb-4"},"Enter below all the expenses and the estimated end-value and rent for the property deal you are looking in to. Find the amount of money left in the deal, the monthly cashflow and the yearly ROI. If you would like, you can generate an investment document to give out to potential investors."),l.a.createElement(E,{formHandler:t}),a.name&&l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(N,{formData:a})),l.a.createElement("div",{className:"has-text-centered is-size-7"},"Assumptions: The property is in England and follows normal stamp duty costs with the added 3% for second homes. The property is a single property and will remain a single property. The purchase will be funded by a bridging loan and will be remortgaged once refurbishment is complete. The mortgage will be interest only. No other loans will exist apart from the mortgage."))))}}}]);
//# sourceMappingURL=5.2a123401.chunk.js.map