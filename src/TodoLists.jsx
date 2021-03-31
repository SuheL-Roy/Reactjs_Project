
import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const TodoLists = (props) =>{

    
    return (
     <>
     <div className='todo_style'>
         
        
         <span


         onClick={() =>{
            props.onSelect(props.id);
                   
         }} 
         
         >

             <DeleteIcon className="deletion"/>

         </span>
    <li> {props.text} </li>
    </div>
    </>
    );
};

export default TodoLists;