

// nested Html structure inside the react

/* 
<div id="parent">
    <div id="child">    
        <h1>I'm React Developer </h1>
        <h2>Namsthe React</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser Understands)

*/


const parent = React.createElement("div" ,
    {id:"parent"},
    [
        React.createElement("div",
    {id : "child"},
    [React.createElement("h1", {} ,"I'm React Developer "),
    React.createElement("h2", {} ,"Namsthe React"),
    ]),
    React.createElement("div",
    {id : "child"},
    [React.createElement("h1", {} ,"I'm React Developer "),
    React.createElement("h2", {} ,"Namsthe React"),
    ])
    ]
    
); 

// jsx 


console.log(parent);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);