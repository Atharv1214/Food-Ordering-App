import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";


const RestaurantsMenu = ()=>{

// state variable
const [resInfo,setresInfo] = useState(null);

const {resId} = useParams();

useEffect(()=>{
fetchMenu();

},[]);


const fetchMenu = async ()=>{
    const data = await fetch(
        MENU_API+resId
    );

    const json = await data.json();

    console.log(json);

    setresInfo(json.data)
};
if (resInfo === null)  <Shimmer/>;

const {name,cuisines,cloudinaryImageId,totalRatingsString} =
 resInfo?.cards[0]?.card?.card?.info ?? {};

const {itemCard} = 
resInfo?.cards[2]?.groupCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};

console.log(itemCard)

// const {name,cuisines,cloudinaryImageId}= 

// resInfo?.cards[0]?.card?.card?.info;

    return (
        <div className="menu">
          <h1>{name}</h1>
          <h2>{cloudinaryImageId}</h2>
          <h4>{totalRatingsString}</h4>
          <div>{cuisines}</div>

          <h1>Menu</h1>

          <ul>
            {itemCard &&itemCard.map((item) => 
<li key={item.card.info.id}>
    {item.card.info.name} - {"-"}
    {item.card.info.price/100 || item.card.info.defaultPrice/100}
</li>            
            )}
          </ul>
        </div>
    );
};

export default RestaurantsMenu;