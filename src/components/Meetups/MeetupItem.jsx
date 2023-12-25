import { useContext } from "react";
import Card from "../ui/card/card";
import FavouritesContext from "../../store/favourite-context";
function MeetupItem(props){
   const favouritectx = useContext(FavouritesContext);
    const isfavourite = favouritectx.isfavouriteHandler(props.id);
    function toggleFavouriteStatusHandler(){
        if(isfavourite){
            favouritectx.removeFavourite(props.id);
        }
        else{
            favouritectx.addFavourite({
                id:props.id,
                title : props.title,
                image : props.image
            });
        }
    }
    return <li>
        <Card>
        <div>
            <img src={props.image} alt = {props.text}></img>
        </div>
        <div>
            <h3>
                {props.title}
            </h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div>
            <button onClick={toggleFavouriteStatusHandler}>{isfavourite?'remove from favourite' : 'to favourites'}</button>
        </div>
        </Card>
    </li>
    
}
export default MeetupItem;