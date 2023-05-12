import { useState } from "react";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const [items, setItems] = useState([
    {
      task: "Laundry",
      description: "short description for task",
      priority: "low",
      status: "completed",
    },
    {
      task: "Get car serviced",
      description: "short description for task",
      priority: "high",
      status: "in-progress",
    },
    {
      task: "Plan vacation",
      description: "short description for task",
      priority: "medium",
      status: "not-started",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleEditRow = (index) => {
    setRowToEdit(index);
    setShowModal(true);
  };

  const addNewTask = (data) => {
    rowToEdit === null
      ? setItems([...items, data])
      : setItems(
          items.map((item, index) => {
            // if (index !== rowToEdit) return item;
            // return data;
            return index !== rowToEdit ? item : data;
          })
        );
  };

  const closeModal = () => {
    setShowModal(false);
    setRowToEdit(null);
  }

  return (
    <div className="App">
      <Table items={items} setItems={setItems} editRow={handleEditRow} />
      <button className="btn" onClick={() => setShowModal(true)}>
        Add
      </button>
      {showModal && (
        <Modal
          closeModal={closeModal}
          addNewTask={addNewTask}
          defaultValue={rowToEdit !== null && items[rowToEdit]}
        />
      )}
    </div>
  );
}

export default App;
