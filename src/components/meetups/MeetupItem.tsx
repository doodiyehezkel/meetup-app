import { FC, useContext } from "react";
import Card from "../ui/Card";

import classes from "./MeetupItem.module.css"
import { FavoritesContext } from "../../store/favorites-context";

export interface MeetupItemProps {
    id?: number,
    address: string,
    description: string,
    image: string,
    title: string
}


const MeetupItem: FC<MeetupItemProps> = (props) => {

    const favoriteContext = useContext(FavoritesContext);

    const isMeetupFavorite = favoriteContext.itemIsFavoriteHandler(props.id);

    const onClickHandler = () => {

        if (isMeetupFavorite)
            favoriteContext.removeFavoriteHandler(props.id);
        else
            favoriteContext.addFavoriteHandler(props);

    }

    return (
        <Card>
            <li>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={isMeetupFavorite ? classes.active :classes.actions }>
                    <button onClick={onClickHandler}>{isMeetupFavorite ? 'Remove Favorite' : 'Add To Favorite'}</button>
                </div>
            </li>
        </Card>
    )
}

export default MeetupItem;
