

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { BrowserRouter , Routes, Route, Outlet} from "react-router-dom";



//not using keys (not acceptable) <<<< index as a key <<<< unique key(best practice)


const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet />   
    </div>
};



const root = ReactDOM.createRoot(document.getElementById("root"));

// Render with BrowserRouter
root.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" 
        element={<AppLayout />}>
            <Route 
                index element={<Body />} />  {/* default child */}
            <Route 
                path="about" 
                element={<About />} />
            <Route 
                path="contact" 
                element={<Contact />} />
            <Route 
                path="*" 
                element={<Error />} />
            <Route
                path="/restaurants/:resId" 
                element={<RestaurantMenu />}/>
      </Route>
    </Routes>
  </BrowserRouter>
);
 




































































