(this.webpackJsonpstock=this.webpackJsonpstock||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/loader.34cf5337.gif"},33:function(e,t,a){e.exports=a(68)},38:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n),r=a(26),i=a.n(r),c=(a(38),a(6)),l=a(7),o=a(9),u=a(8),m=a(10),h=a(27),p=a.n(h).a.initializeApp({apiKey:"AIzaSyBWJF62zIPbBXWZ_h5W4D07FxsR7Tgyw78",authDomain:"stockauth-20eaa.firebaseapp.com",databaseURL:"https://stockauth-20eaa.firebaseio.com",projectId:"stockauth-20eaa",storageBucket:"stockauth-20eaa.appspot.com",messagingSenderId:"208623172815",appId:"1:208623172815:web:96092379d42d8d63050bba"}),d=a(15),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).login=function(e){e.preventDefault(),p.auth().signInWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){a.setState({fireErrors:e.message})}))},a.register=function(e){e.preventDefault(),p.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).catch((function(e){a.setState({fireErrors:e.message})}))},a.getAction=function(e){"reg"===e?a.setState({formTitle:"Register New User",loginBtn:!1,fireErrors:""}):a.setState({formTitle:"Login",loginBtn:!0,fireErrors:""})},a.handleChange=function(e){a.setState(Object(d.a)({},e.target.name,e.target.value))},a.state={email:"",password:"",fireErrors:"",loginBtn:!0},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.fireErrors?s.a.createElement("div",{className:"Error"}," ",this.state.fireErrors," "):null,a=this.state.loginBtn?s.a.createElement("input",{className:"loginBtn",type:"submit",onClick:this.login,value:"Enter"}):s.a.createElement("input",{className:"loginBtn",type:"submit",onClick:this.register,value:"Register"}),n=this.state.loginBtn?s.a.createElement("button",{className:"registerBtn",onClick:function(){return e.getAction("reg")}},"Register"):s.a.createElement("button",{className:"registerBtn",onClick:function(){return e.getAction("login")}},"Login");return s.a.createElement("div",{className:"form_block"},s.a.createElement("h1",null,"Login to check Stocks!"),s.a.createElement("div",{id:"title"},this.state.formTitle),s.a.createElement("div",{className:"body"},t,s.a.createElement("form",null,s.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email"}),s.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password"}),a),n))}}]),t}(n.Component),f=a(29),v=a(12),E=a(30),k=a.n(E),b=a(31),S=a.n(b);var C=function(e){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("form",{className:"SearchBar_Form"},s.a.createElement("input",{className:"SearchBar__Input",value:e.value,onChange:e.onChange}),s.a.createElement("button",{className:"SearchBar__Button",onClick:e.onClick},"search")))},y=function(e,t){return s.a.createElement("li",{className:"StockListItem"},s.a.createElement("div",{className:"StockListItem_Symbol"},s.a.createElement("span",null,"Stock: "),e.symbol),s.a.createElement("div",{className:"StockListItem_Price"},s.a.createElement("span",null,"Price: "),"$",parseInt(e.price).toFixed(2)),s.a.createElement("div",{className:"StockListItem_Volume"},s.a.createElement("span",null,"Vol: "),e.volume),s.a.createElement("div",{className:"StockListItem_Time"},s.a.createElement("span",null,"Time: "),e.timestamp))},w=function(e){var t=e.stockItems.map((function(e){return s.a.createElement(y,{key:e.symbol,symbol:e.symbol,price:e.price,volume:e.volume,timestamp:e.timestamp})}));return s.a.createElement("ul",{className:"StockList"},t)},N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).logout=function(){p.auth().signOut()},e.state={stocks:[],term:null,value:""},e.handleClick=e.handleClick.bind(Object(v.a)(e)),e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleClick",value:function(e){var t=this;e&&e.preventDefault(),this.setState({value:"",term:this.state.value});var a=this.state.value,n="https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=".concat(a,"&apikey=").concat("S9T01LQ9EYR3ZSPP");S.a.get(n).then((function(e){console.log(e.data);var a=k.a.flattenDeep(Array.from(e.data["Stock Quotes"]).map((function(e){return[{symbol:e["1. symbol"],price:e["2. price"],volume:e["3. volume"],timestamp:e["4. timestamp"]}]})));console.log(a),t.setState((function(e,t){return Object(f.a)({},e,{stocks:a})}))})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){this.state.stocks;var e=this.state.value;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"text"},s.a.createElement("h1",{className:"App__Title"},"Stock Search"),s.a.createElement(C,{value:e,onChange:this.handleChange,onClick:this.handleClick}),s.a.createElement(w,{stockItems:this.state.stocks}),s.a.createElement("button",{onClick:this.logout},"Logout")))}}]),t}(n.Component),O=(a(67),a(32)),j=a.n(O),B=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={user:null},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;p.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"render",value:function(){return this.state.loading?s.a.createElement("div",{className:"Spinner"},s.a.createElement("img",{src:j.a,alt:"Spinner"})):s.a.createElement("div",null,this.state.user?s.a.createElement(N,null):s.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.6e032bdd.chunk.js.map