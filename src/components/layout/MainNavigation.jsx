import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
function MainNavigation(){
    return <header className={classes.header}>
        <div>
            <ul>
                <li>
                   <Link to='/'>All Meetups</Link> 
                </li>
                <li>
                   <Link to='/new-meetup'>add new Meetup</Link> 
                </li>
                <li>
                   <Link to='/favourites'>All favourites</Link> 
                </li>
            </ul>
        </div>
    </header>
}
export default MainNavigation;