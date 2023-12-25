import { useRef } from 'react';
import Card from '../ui/card/card';
function NewMeetupForm(props){
    const titleRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    function SubmitHandler(e){
        e.preventDefault();
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageRef.current.value;
        const entereddescription = descriptionRef.current.value;
        const meetup = {
            title: enteredTitle,
            image : enteredImage,
            description : entereddescription
        };
        props.OnAdd(meetup);
    }
   return <Card>
    <form className='lk' onSubmit={SubmitHandler}>
    <div>
        <label htmlFor='title'>meetup title</label>
        <input type='text' required id='title' ref={titleRef}></input>
    </div>
    <div>
        <label htmlFor='image'>meetup image</label>
        <input type='url' required id='image' ref={imageRef}></input>
    </div>
    <div>
        <label htmlFor='description'>meetup description</label>
        <textarea required rows='5' ref={descriptionRef}>description</textarea>
    </div>
    <div>
        <input type='submit'>add</input>
    </div>
    </form>
   </Card>
}
export default NewMeetupForm;