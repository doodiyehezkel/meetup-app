import { FC, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups: FC = () => {
  
  const [loadedMeetups, setLoadedMeetups] = useState<{ id: number, address: string, description: string, image: string, title: string }[] | []>([]);
  const [isLoaded,setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch(
      'https://meetup-app-a4818-default-rtdb.firebaseio.com/meetups.json'
    )
      .then(response => {
        return response.json();
      }).then(data => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
        setIsLoaded(true)
      })
  }, []);

  if(isLoaded === false)
    return <p>Loading...</p>

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetupList={loadedMeetups} />
    </div>
  )
}

export default AllMeetups