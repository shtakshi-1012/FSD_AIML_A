const parent=document.getElementById('root');

//linking
const root=ReactDOM.createRoot(parent);

//mounting-- rendering
const element=React.createElement("h1",{},"This is new Heading");
const shoppingCart=React.createElement("h2",{},"Shopping Cart");

const item1=React.createElement("li",{},"Apple");
const item2=React.createElement("li",{},"Apple");
const item3=React.createElement("li",{},"Apple");

const yourCart=React.createElement("ul",{},item1,item2,item3);

const para=<p>this is a paragraph.</p>
//const container=React.createElement("div",{},element,shoppingCart,yourCart);
// root.render(container);

root.render([element,shoppingCart,yourCart,para]);