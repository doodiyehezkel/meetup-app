import { FC ,useContext} from "react";
import MeetupList from "../components/meetups/MeetupList";
import { FavoritesContext } from "../store/favorites-context"; 

const Favorites: FC = () => {
    const favoriteContext = useContext(FavoritesContext);

    
    
    return (
        <div>
            <h1>Favorites</h1>
            {favoriteContext.totalFavorites === 0 ? 
                <h3> You dont have favorites yet :) </h3> : 
                <MeetupList meetupList={favoriteContext.favorites}/>}
        </div>
    )
}

export default Favorites;