import { useState } from "react";
import { Table } from "./components/Table";
import { Modal } from "./components/Modal";
import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Table />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
}

export default App;
