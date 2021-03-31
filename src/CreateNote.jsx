
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [note, setnote] = useState({

        title:"",
        content:"",
    });
    const InputEvent = (event) => {

        const {name, value} = event.target;

        setnote((prevdata) =>{

            return{
                ...prevdata,
                [name]:value,
            }

        });
    }
    const AddEvent = () =>{
        props.passnote(note);
        setnote({

            title:"",
            content:"",
        });

    }

    return(
        <>
        <div className="main_note">
            <form >
                <input 
                type="text"
                name="title"
                value={note.title} 
                onChange={InputEvent} 
                placeholder="Title" 
                autoComplete="off"/>

                <textarea  
                rows="" 
                cols="" 
                name="content"
                value={note.content} 
                onChange={InputEvent} 
                placeholder="Write a Note..">

                </textarea>
                    <Button onClick={AddEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>

                
            </form>
            
        </div>
        </>
    );
}
export default CreateNote;