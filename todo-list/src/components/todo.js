import React, { useState, useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.css';
// get the local storage data back
const getLocalData = () => {
  const lists = localStorage.getItem("myTodoList");

  if (lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
}

const Todo = () => {
  const[inputdata, setInputData] = useState("");
  const [items, setItems]= useState(getLocalData());
  const[isEditItem, setIsEditItem] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
// how to add item
  const addItem = () => {
    if(!inputdata){
      alert("Please enter the task!!");
    }else if(inputdata && toggleButton){
setItems(
  items.map((curElem) => {
    if(curElem.id === isEditItem){
      return { ...curElem, name:inputdata};
    }
    return curElem;
  })
)
setInputData("");
setIsEditItem(null);
setToggleButton(false);
    }else{
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  }

  // edit the item
const editItem = (index) => {
  const item_todo_edited = items.find((curElem) => {
    return curElem.id === index;
  });
  setInputData(item_todo_edited.name);
  setIsEditItem(index);
  setToggleButton(true);
}

  // how to delete item
const deleteItem = (index) => {
const updatedItems = items.filter((curElem)=>{
  return curElem.id !== index;
});
setItems(updatedItems);
}

// remove all
const removeAll = () => {
  setItems([]);
}

// save data to local storage
useEffect(() => {
  localStorage.setItem("myTodoList", JSON.stringify(items));
}, [items])


  return (
    <>
      <div className="main-div flex flex-col items-center h-screen">
        <div className="child-div m-28">
            <figure className='flex flex-col items-center'>
                <img src="./images/todo.png" alt="todLogo"  className='w-20'/>
                <figcaption className='font-serif text-2xl font-semibold mt-5 bg-clip-text text-transparent text-white'>Add Your List Here</figcaption>
            </figure>
            <div className="addItems flex flex-row justify-between mt-5 p-3 border-4 border-solid rounded-lg w-96 border-purple-900">
                <input type="text" name="" id="" placeholder='✍️ Add Your Items Here'
                className='form-control tracking-wide font-sans border-none outline-none text-lg' value={inputdata} onChange={(event) => setInputData(event.target.value)} />
                {toggleButton ? (<FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "#ffffff",}} onClick={addItem} className='fa-pen'/>) 
                : (<FontAwesomeIcon icon={faPlus} size="lg" style={{color: "#ffffff",}} onClick={addItem} className='faplus'/>)}
                
            </div>
            {/* items to be shown */}
            <div className="showItems my-3 text-lg">
              {items.map((curElem)=> {
                return(
<div className=" my-3 eachItem flex flex-row justify-between p-2 rounded-lg bg-violet-800 text-white" key={curElem.id}>
                <h3>{curElem.name}</h3>
                <div className="todo-btn">
                <FontAwesomeIcon icon={faPenToSquare} size="sm" style={{color: "#ffffff", }} className='fa-pen mr-5'
                onClick={() => editItem(curElem.id)} />
                <FontAwesomeIcon icon={faTrash} size="sm" style={{color: "#ffffff",}} className='fatrash'
                onClick={() => deleteItem(curElem.id)}/>
                </div>
              </div>
                )
              })}
              
            </div>
            {/* remove button */}
            <div className="showItems flex justify-center mt-3">
              <button className="remove uppercase text-white  p-2 rounded-lg font-medium hover:scale-105 bg-gradient-to-br from-orange-600 to-yellow-300" onClick={removeAll}>
                Remove All
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
