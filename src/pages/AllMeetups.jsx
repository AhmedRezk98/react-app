import { useState , useEffect } from "react";
import MeetupList from "../components/Meetups/MeetupList";
function AllMeetupsPage(){
    const[isLoaded,setIsLoaded] = useState(true);
    const[loadedData,setLoadedData] = useState([]);
    useEffect(()=>{
        setIsLoaded(true);
        fetch("https://react-app-bec89-default-rtdb.firebaseio.com/meetups.json").then(response=>{
            return response.json();
        }).then(data=>{
            const meetups = [];
            for(const key in data){
                const meetup = {id:key , ...data[key]};
                meetups.push(meetup);
            }
            setIsLoaded(false);
            setLoadedData(data);
        });
    },[])
   
    if(isLoaded){
        return <div>
            <p>loading</p>
        </div>
    }
    return <div>
        <h1>AllMeetupsPage</h1>
        <MeetupList items = {loadedData}></MeetupList>
    </div>
}
export default AllMeetupsPage;