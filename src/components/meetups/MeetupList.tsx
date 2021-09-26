import { FC } from "react";

import MeetupItem, { MeetupItemProps } from "./MeetupItem"
import classes from "./MeetupList.module.css"



const MeetupList: FC<{ meetupList: MeetupItemProps[] }> = (props) => {
    return (
        <ul className={classes.list}>
            {
                props.meetupList.map(meetup => {
                    return (
                        <MeetupItem
                            key={meetup.id}
                            id={meetup.id}
                            address={meetup.address}
                            description={meetup.description}
                            image={meetup.image}
                            title={meetup.title}
                        />
                    )
                })
            }
        </ul>
    )
}

export default MeetupList;