import { createContext , useState } from "react";
const FavouritesContext = createContext({
    favourites : [],
    totalFavourites : 0,
    addFavourite : (meetup) => {},
    removeFavourite : (meetupid) => {},
    isfavouriteHandler : (meetupid) => {},
});
export function FavouritesContextProvider(props){
    const[userFavourites , setUserFavourites] = useState([]);
    function addMeetupHandler(meetup){
        setUserFavourites((prevuserfavourites)=>{
            return prevuserfavourites.concat(meetup);
        })
    }
    function removeMeetupHandler(meetupId){
        setUserFavourites((prevuserfavourites) => {
            return prevuserfavourites.filter(meetup=>meetup.id !== meetupId)
        })
    }
    function isFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favourites : userFavourites,
        totalFavourites : userFavourites.length,
        addFavourite : addMeetupHandler,
        removeFavourite : removeMeetupHandler,
        isfavouriteHandler : isFavouriteHandler,
    };
    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}
export default FavouritesContext;