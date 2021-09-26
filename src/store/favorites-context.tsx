import { FC ,createContext ,useState,useEffect } from "react"
import { MeetupItemProps } from "../components/meetups/MeetupItem"

export const FavoritesContext = createContext<{
    favorites:MeetupItemProps[]
    ,totalFavorites:number
    ,addFavoriteHandler:Function
    ,removeFavoriteHandler:Function
    ,itemIsFavoriteHandler:Function}>({
    favorites: [],
    totalFavorites: 0,
    addFavoriteHandler : (favoriteMeetup:MeetupItemProps) => {},
    removeFavoriteHandler : (meetupId:number) => {},
    itemIsFavoriteHandler : (meetupId:number) => {},
})

const FavoritesContextProvider: FC = (props) => {
    
    const userFavoritesLS = localStorage.getItem('userFavorites');
    
    const [userFavorites,setUserFavorites] = useState<MeetupItemProps[] | []>(userFavoritesLS !== null ? JSON.parse(userFavoritesLS) : [])
    
    useEffect(()=>{
        localStorage.setItem('userFavorites',JSON.stringify(userFavorites));
    },
    [userFavorites]);
    
    const addFavoriteHandler = (favoriteMeetup: MeetupItemProps) => {
        setUserFavorites(prevUserFavorites => {
            return [...prevUserFavorites,favoriteMeetup]
        })
    }

    const removeFavoriteHandler = (meetupId:number) => {
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup =>meetup.id!==meetupId)
        })
    }

    const itemIsFavoriteHandler = (meetupId:number) =>{
        return userFavorites.some(meetup =>meetup.id===meetupId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavoriteHandler,
        removeFavoriteHandler,
        itemIsFavoriteHandler
    }

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;