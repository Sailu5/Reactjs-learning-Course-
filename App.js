

import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div" ,{id:"parent"},[
    React.createElement("div",{id : "child"},
    [React.createElement("h1", {} ,"I'm React Developer "),
    React.createElement("h2", {} ,"Namsthe React"),
    ]),
    React.createElement("div",{id : "child"},
    [React.createElement("h1", {} ,"I'm React Developer "),
    React.createElement("h2", {} ,"Namsthe React"),
    ])]
    
);
console.log(parent);  //object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);