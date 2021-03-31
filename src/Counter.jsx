
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Counter = () =>{
    const [num, setNum] = useState(0);
    const inCum = () => {
        setNum(num+1);

    }
    const deCre = () => {
        if(num > 0){
            setNum(num-1);
        }else {
            alert("Sorry,Zerro Limit Reached");
            setNum(0);
        }
        
    }

    return(
        <>
        <div className="main_div">
            <div className="center_div">
                <h1> {num} </h1>
                <div className="btn-div">
                    <button onClick = {inCum}> <AddIcon/> </button>
                    <button onClick = {deCre} > <DeleteIcon/> </button>
            

                </div>

            </div>

        </div>
        </>

    );

}

export default Counter;