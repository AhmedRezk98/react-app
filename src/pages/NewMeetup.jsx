import {useHistory} from 'react-router-dom';
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
function NewMeetupsPage(){
    const history = useHistory();
    function AddMeetup(data){
        fetch("https://react-app-bec89-default-rtdb.firebaseio.com/meetups.json",{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
                'Content-Type' : 'application/json'
            },
            
        }).then(()=>{
            history.replace('/');
        });
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm OnAdd = {AddMeetup} />
    </section>
}
export default NewMeetupsPage;