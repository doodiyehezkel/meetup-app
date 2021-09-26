import { FC } from "react";
import { useHistory } from 'react-router-dom'; 
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { MeetupItemProps } from "../components/meetups/MeetupItem"; 
const NewMeetup:FC = () => {
    const history = useHistory();
    const addMeetupHandler = (meetupData:MeetupItemProps) => {
        fetch(
            'https://meetup-app-a4818-default-rtdb.firebaseio.com/meetups.json'
            ,
            {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(meetupData)
            }
        ).then(() => { 
            history.replace('/');
        })
    
    }

    return (
        <>
            <h1>New Meetup</h1>
            <NewMeetupForm addMeetupHandler={addMeetupHandler}/>
        </>
    )
}

export default NewMeetup