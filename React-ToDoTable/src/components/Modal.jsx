import React, { useState } from "react";
import "./css/Modal.css";

export const Modal = ({ setShowModal, addNewTask, defaultValue }) => {
  const [formData, setFormData] = useState(defaultValue || {
    task: "",
    description: "",
    priority: "Low",
    status: "Not started",
  });
  const [errors, setErrors] = useState([]);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const isMissingFields = () => {
    if (!formData.task || !formData.description) {
      let missingFields = [];
      for (const [key, value] of Object.entries(formData)) {
        if (value === "") {
          missingFields.push(capitalize(key));
        }
      }
      setErrors(missingFields);
      return true;
    } else {
      setErrors("");
      return false;
    };
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMissingFields()) {
      return;
    };
    setShowModal(false);
    addNewTask(formData);
  };

  return (
    <div
      className="modal-container"
      onClick={(e) =>
        e.target.className === "modal-container" && setShowModal(false)
      }
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="task">Task</label>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              name="priority"
              id="priority"
              value={formData.priority}
              onChange={handleChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              id="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="not-started">Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          {errors.length > 0 && (
            <div className="error-message">
              Missing Fields:
              <ul className="indented-list">
                {errors.map((ele) => 
                  <li>
                    {ele}
                  </li>
                )}
              </ul>
            </div>
          )}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
