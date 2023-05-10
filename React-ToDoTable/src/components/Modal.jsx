import React from 'react';
import './css/Modal.css';

export const Modal = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert('clicked');
  }

  return (
    <div className='modal-container'>
      <div className="modal">
        <form>
          <div>
            <label htmlFor='task'>Task</label>
            <input type='text'/>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <textarea name='task'/>
          </div>
          <div>
            <label htmlFor='priority'>Priority</label>
            <select name='priority' id='priority'>
              <option value='low'>Low</option>
              <option value='medium'>Medium</option>
              <option value='high'>High</option>
            </select>
          </div>
          <div>
            <label htmlFor='status'>Status</label>
            <select name='status' id='status'>
              <option value='not-started'>Not Started</option>
              <option value='in-progress'>In Progress</option>
              <option value='completed'>Completed</option>
            </select>
          </div>
          <button type='submit' onClick={handleClick}>Submit</button>
        </form>
      </div>
    </div>
  )
}