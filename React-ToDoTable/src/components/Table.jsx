import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./css/Table.css";

export const Table = ({ items, setItems }) => {
  const handleDelete = (index) => {
    setItems(items.filter((item, idx) => idx !== index));
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th className="taskCol">Task</th>
            <th className="descriptionCol">Description</th>
            <th className="priorityCol">Priority</th>
            <th className="statusCol">Status</th>
            <th className="actionCol">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length !== 0 ? (
            items.map((item, idx) => {
              return (
                <tr key={idx}>
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td>{item.priority}</td>
                  <td>{item.status}</td>
                  <td>
                    <span className="actions">
                      <BsFillPencilFill />{" "}
                      <BsFillTrashFill onClick={() => handleDelete(idx)} />
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
