
import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return(
        <>
        <div className="note">

            <h2>{ props.title }</h2>
            <br/>
            <p>{ props.content }</p>

          <button className="btn" onClick={deleteNote}>
          <DeleteOutlineIcon className="deleteIcon "/>
          </button>
           

        </div>

        </>

    );
}

export default Note;
