import { Link } from 'react-router-dom';
import { FC ,useContext} from 'react';
import classes from './MainNavigation.module.css'
import { FavoritesContext } from '../../store/favorites-context';

const MainNavigation:FC = () => {
    const favoriteContext = useContext(FavoritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Meetup App</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">My Favorites <span className={classes.badge}>{favoriteContext.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;