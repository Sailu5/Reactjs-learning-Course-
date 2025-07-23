import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";  
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
// local state variable 
    const [listOfRestaurent, setListOFRestaurent] =useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText , setSearchText] =useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            
        );
        const json = await data.json();


    setListOFRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurent.length === 0 ?(
         <Shimmer />
    ) : (
   

   
    <div className="body">
        <div className="filters">
            <div className="search"></div>
            <input type="text" className="search-box" 
                value={searchText} 
                onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
            <button onClick={() =>{
                const filteredRestaurant = listOfRestaurent.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase( )));
                    setFilteredRestaurant(filteredRestaurant);


            }}>
                Search </button>
            <button className="filter-btn" 
                onClick={() => {
                    // filter logic here
                    const filteredList = listOfRestaurent.filter(
                        (res) => res.info?.avgRating > 4
                    );
                    setListOFRestaurent(filteredList);
                   
                }}
                >
                Top Rated Restaurants</button>
        </div>
        < div className="res-container">            
            {
            filteredRestaurant.map((restaurant) => 
              (
              <Link key ={restaurant.info.id} to = { "/restaurants/" + restaurant.info.id }>

                <RestaurantCard  resData={restaurant.info} />
            </Link>
            ))
       
        }
        </div>

    </div>
    );
};

export default Body;    