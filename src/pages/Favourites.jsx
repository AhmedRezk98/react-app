import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/Meetups/MeetupList";
function FavouritesPage(){
    const favouritectx = useContext(FavouritesContext);
    let content;
    if(favouritectx.totalFavourites === 0)
    {
        content = <p>no favourites</p>
    }
    else{
        content = <MeetupList items = {favouritectx.favourites}></MeetupList>
    }
    return <section>
        <h1>all favourites</h1>
        {content}
    </section>
}
export default FavouritesPage;