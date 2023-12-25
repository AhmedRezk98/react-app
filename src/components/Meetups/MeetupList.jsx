import MeetupItem from "./MeetupItem";
function MeetupList(props){
    return <ul>
        {props.items.map(item=>
             <MeetupItem key = {item.id} id = {item.id} image = {item.image} title = {item.title} />)}
    </ul>
}
export default MeetupList;