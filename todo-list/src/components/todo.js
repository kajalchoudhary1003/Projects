import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus}, {faPenToSquare} from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  return (
    <>
      <div className="main-div w-full h-screen flex justify-center items-center">
        <div className="child-div">
            <figure>
                <img src="./images/todo.png" alt="todLogo" />
                <figcaption>Add Your List Here 👀</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" name="" id="" placeholder='✍️ Add Your Items Here'
                className='form-control' />
                <FontAwesomeIcon icon={faPlus} size="2xs" style={{color: "#000000",}} />
            </div>
            {/* items to be shown */}
            <div className="showItems">
              <div className="eachItem">
                <h3>Apple</h3>
                <div className="todo-btn">
                <FontAwesomeIcon icon={faPenToSquare} size="xs" style={{color: "#000000",}} />
                </div>
              </div>
            </div>
            {/* remove button */}
            <div className="showItems">
              <button className="remove">
                Remove All
              </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Todo
