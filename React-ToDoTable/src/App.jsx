import { useState } from "react";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [items, setItems] = useState([
    {
      task: "Laundry",
      description: "short description for task",
      priority: "Low",
      status: "Completed",
    },
    {
      task: "Get car serviced",
      description: "short description for task",
      priority: "High",
      status: "In progress",
    },
    {
      task: "Plan vacation",
      description: "short description for task",
      priority: "Medium",
      status: "Not started",
    },
  ]);

  const addNewTask = (data) => {
    setItems([...items, data]);
  }

  return (
    <div className="App">
      <Table items={items} setItems={setItems} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} addNewTask={addNewTask}/>}
    </div>
  );
}

export default App;
