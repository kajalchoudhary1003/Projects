import React from 'react'
import './style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
  return (
    <>
      <div className="main-div">
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
        </div>
      </div>
    </>
  )
}

export default Todo
