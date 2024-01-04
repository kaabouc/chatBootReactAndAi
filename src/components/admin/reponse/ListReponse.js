import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import Header from '../../../layout/admin/Header';
import SideNave from '../../../layout/admin/SideNave';
import Footer from '../../../layout/admin/Footer';

const ListReponse = () => {
  const [qstReponses, setQstReponses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;

  const handleClose = () => {
    setShowModal(false);
    setFormData({});
  };

  const handleShow = (id) => {
    setShowModal(true);
    // Fetch the data for the selected id and set it in the formData
    if (id) {
      axios.get(`http://localhost:8081/chatbot/get/${id}`)
        .then(response => setFormData(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData.id) {
      // Update existing QstReponse
      axios.put(`http://localhost:8081/chatbot/reponse/update/${formData.id}`, formData)
        .then(response => {
          // Update the QstReponse in the state
          setQstReponses(qstReponses.map(qst => (qst.id === formData.id ? response.data : qst)));
          handleClose();
        })
        .catch(error => console.error('Error updating QstReponse:', error));
    } else {
      // Create a new QstReponse
      axios.post('http://localhost:8081/chatbot/reponse/create', formData)
        .then(response => {
          setQstReponses([...qstReponses, response.data]);
          handleClose();
        })
        .catch(error => console.error('Error creating QstReponse:', error));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/chatbot/reponse/${id}`)
      .then(() => setQstReponses(qstReponses.filter(qst => qst.id !== id)))
      .catch(error => console.error('Error deleting QstReponse:', error));
  };

  useEffect(() => {
    // Fetch all QstReponses on component mount
    axios.get('http://localhost:8081/chatbot/reponse/all')
      .then(response => setQstReponses(response.data))
      .catch(error => console.error('Error fetching QstReponses:', error));
  }, []);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = qstReponses.slice(indexOfFirstRow, indexOfLastRow);

  const renderTableRows = () => {
    return currentRows.map(qst => (
      <tr key={qst.id}>
        <td>{qst.id}</td>
        <td>{qst.question}</td>
        <td>{qst.reponse}</td>
        <td>
          <Button variant="info" onClick={() => handleShow(qst.id)}>Edit</Button>
          <Button variant="danger" onClick={() => handleDelete(qst.id)}>Delete</Button>
        </td>
      </tr>
    ));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(qstReponses.length / rowsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Header />
      <SideNave />
      <div>
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              <Button variant="primary" onClick={() => handleShow()}>
                Add QstReponse
              </Button>

              <Table striped bordered hover className="mt-3" style={{ padding: "200px" }} data-wow-duration="1s" data-wow-delay="0.5s">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Question</th>
                    <th>Reponse</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows()}
                </tbody>
              </Table>

              <div>
                <ul className="pagination">
                  {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                      <a onClick={() => paginate(number)} className="page-link">
                        {number}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal for adding/editing QstReponse */}
              <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{formData.id ? 'Edit' : 'Add'} QstReponse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formQuestion">
                      <Form.Label>Question</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter question"
                        name="question"
                        value={formData.question || ''}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="formReponse">
                      <Form.Label>Reponse</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter reponse"
                        name="reponse"
                        value={formData.reponse || ''}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ListReponse;
