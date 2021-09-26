import { FC ,useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css"
import { MeetupItemProps } from "./MeetupItem"; 

const NewMeetupForm: FC<{addMeetupHandler:(meetupData:MeetupItemProps)=> void}> = (props) => {

    const titleRef = useRef<HTMLInputElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLTextAreaElement>(null);

    const onSubmitHandler:React.FormEventHandler<HTMLFormElement> | undefined = (event) => {
        event.preventDefault();
        if(titleRef.current===null){
            alert("title can't be empty");
            return;
        }
        if(imageRef.current===null){
            alert("image can't be empty");
            return;
        }
        if(addressRef.current===null){
            alert("address can't be empty");
            return;
        }
        if(descriptionRef.current===null){
            alert("description can't be empty");
            return;
        }

        props.addMeetupHandler({
            title:titleRef.current.value,
            image:imageRef.current.value,
            address:addressRef.current.value,
            description:descriptionRef.current.value 
        })
    } 

    return (
        <Card>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' id='title' required ref={titleRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='text' id='image' required ref={imageRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' id='address' required ref={addressRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea rows={5} id='description' required ref={descriptionRef}>

                    </textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Meetup</button>                    
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm;