
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {MdEdit} from 'react-icons/md';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [show,setShow] = useState(false);
  const [selectedRow,setSelectedRow] = useState({});

  const handleShow = (data) => {
    setSelectedRow(data);
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }

const tableData = [
  {
    year: 'SY 2021-2022',
    status: 'Active'
  },
  {
    year: 'SY 2022-2023',
    status: 'Inactive'
  },
  {
    year: 'SY 2023-2024',
    status: 'Active'
  },
  {
    year: 'SY 2024-2025',
    status: 'Active'
  },
  {
    year: 'SY 2025-2026',
    status: 'Active'
  },
  {
    year: 'SY 2026-2027',
    status: 'Inactive'
  }
];

  return (
    <div className="App" style={{marginTop:'20px'}}>
    <h3>School Year Status</h3>
    <Table striped bordered style={{width:'50%',margin:'0 auto'}}>
      <thead>
        <tr>
          <th>School Year</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {tableData.map((data,index) => (
        <tr key={index}>
          <td>{data.year}</td>
          <td><Button variant={data.status === 'Active' ? 'primary' : 'secondary'}>{data.status}</Button></td>
          <td><MdEdit style={{color:'blue',cursor:'pointer'}} onClick={() => handleShow(data)}/></td>
        </tr>
      ))}
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Edit</Modal.Header>
      <Modal.Body>
        <p><strong>School Year :</strong>{selectedRow.year}</p>
        <p><strong>Status :</strong>{selectedRow.status}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary'>Update</Button>
        <Button variant='secondary' onClick={handleClose}>Cancel</Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default App;
