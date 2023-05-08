import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import "./css/Table.css";

export const Table = () => {
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
          <tr>
            <td>Laundry</td>
            <td>Short description for task</td>
            <td>Low</td>
            <td>Completed</td>
            <td>
              <span className="actions">
                <BsFillPencilFill /> <BsFillTrashFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Get car serviced</td>
            <td>Short description for task</td>
            <td>Medium</td>
            <td>In progress</td>
            <td>
              <span className="actions">
                <BsFillPencilFill /> <BsFillTrashFill />
              </span>
            </td>
          </tr>
          <tr>
            <td>Plan Vacation</td>
            <td>Short description for task</td>
            <td>Low</td>
            <td>Not started</td>
            <td>
              <span className="actions">
                <BsFillPencilFill /> <BsFillTrashFill />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
