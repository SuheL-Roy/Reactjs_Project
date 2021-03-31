
import React, { useState } from "react";
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';


const Keep = () => {

    const [additem, setaddItem] = useState([]);

    const addNote = (note) => {
        setaddItem((prevData)=>{
            return [...prevData, note];
        });
        //console.log(note);

    };

    const onDelete = (id) => {
        setaddItem((oldata) =>{
           return (oldata.filter((curdata, index)=>{
                return index !== id; 
            }))
        })

    }

   
    return(
        <>
        <Header/>
        <CreateNote passnote={addNote} />
        
        
            {additem.map((val, index) => {
                return(
                 <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem = {onDelete}

                    />
                );
            })}
        <Footer/>
        </>

    );
}

export default Keep;