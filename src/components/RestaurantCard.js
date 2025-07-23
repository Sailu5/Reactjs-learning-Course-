import { CDN_URL } from "../utils/Constants";
const RestaurantCard = (props) => {
    const{ resData } = props; //destructuring

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData ; //destructuring
    return (
        <div>
            <div className="res-card" style={{ backgroundColor:"orange" }}>

                <img  className="res-log " 
                alt="res-logo"
                src={ CDN_URL+cloudinaryImageId} 
                />

                <h3>{name}</h3>
                <p>{cuisines.join(",")}</p>
                <p>{avgRating}stars</p>
                <h4>{costForTwo}</h4>
                <p>{deliveryTime}</p> 
                
            </div>
            
        </div>
         
    );
};

export default RestaurantCard;