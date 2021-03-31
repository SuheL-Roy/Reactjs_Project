import React, { useState } from 'react';
import TodoLists from './TodoLists.jsx';



const App = () => {
   const [inputList, setInputList] = useState("");
   const [Items, setItems] = useState([]);

   const ItemEvent = (event) =>{
       setInputList(event.target.value);

   };
   const listOfItems = () =>{
       setItems((oldItems)=>{
           return [...oldItems,inputList];
       });
       setInputList('');

   }
   const deleteItems = (id) =>{
    console.log("delete");

    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) =>{
                
            return index !== id;

        });
    });
}

   return(
       <>
       <div className="main_div">
           <div className="center_div">
               <br/>
               <h1>ToDo List</h1>
               <br/>
               <input type="text" placeholder="Add a Items" 
               value={inputList}
               onChange={ItemEvent}/>
               <button onClick={listOfItems}> + </button>

               <ol>
                   
                   {
                       Items.map((itemval,index) => {
                         return  (
                         <TodoLists 
                         key={index}
                          id={index}
                         text={itemval}
                        onSelect={deleteItems}

                        />
                        );

                       })
                   }
               </ol>
           </div>

       </div>
       </>
   );
};

export default App;