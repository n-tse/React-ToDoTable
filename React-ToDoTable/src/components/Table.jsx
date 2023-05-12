import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./css/Table.css";

export const Table = ({ items, setItems, editRow }) => {
  const handleDelete = (index) => {
    setItems(items.filter((item, idx) => idx !== index));
  };

  const capitalize = (s) => {
    let capitalized = s.charAt(0).toUpperCase() + s.slice(1);
    return capitalized.replace("-", " ");
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
                <tr key={idx} className="taskItem">
                  <td>{item.task}</td>
                  <td>{item.description}</td>
                  <td style={{textAlign:"center"}}>{capitalize(item.priority)}</td>
                  <td style={{textAlign:"center"}}>{capitalize(item.status)}</td>
                  <td>
                    <span className="actions">
                      <BsFillPencilFill onClick={() => editRow(idx)}/>{" "}
                      <BsFillTrashFill onClick={() => handleDelete(idx)} />
                    </span>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" style={{textAlign:"center", padding:"1.5rem"}}>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
