import classes from './card.module.css';
function Card(props){
    return <div className={classes.header}>
        {props.children}
    </div>
}
export default Card;