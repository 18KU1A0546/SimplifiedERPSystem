import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import './Order.css';

const Order = () => {
  // State for managing orders
  const [orders, setOrders] = useState([
      { id: 1, customer: 'All Arjun', date: '2024-03-15', status: 'Pending' },
      { id: 2, customer: 'Kajal', date: '2024-03-16', status: 'Shipped' },
      { id: 3, customer: 'hello', date: '2024-03-17', status: 'Delivered' },
  ]);

  // State for managing modal
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});

  // Function to handle form submission
  const handleSubmit = (e) => {
      e.preventDefault();
      const newOrder = { id: orders.length + 1, ...formData };
      setOrders([...orders, newOrder]);
      setShowModal(false);
  };

  return (
      <Container fluid className="orders-container">
          <h1 className="orders-heading">Orders Management</h1>
          <Button onClick={() => setShowModal(true)}style={{ display: 'block', margin: '20px auto' }}>Add New Order</Button>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {orders.map(order => (
                      <tr key={order.id}>
                          <td>{order.id}</td>
                          <td>{order.customer}</td>
                          <td>{order.date}</td>
                          <td>{order.status}</td>
                      </tr>
                  ))}
              </tbody>
          </Table>

          {/* Modal for adding new order */}
          <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                  <Modal.Title>Add New Order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                      <Form.Group controlId="customer">
                          <Form.Label>Customer Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter customer name" onChange={(e) => setFormData({...formData, customer: e.target.value})} />
                      </Form.Group>
                      <Form.Group controlId="date">
                          <Form.Label>Order Date</Form.Label>
                          <Form.Control type="date" onChange={(e) => setFormData({...formData, date: e.target.value})} />
                      </Form.Group>
                      <Form.Group controlId="status">
                          <Form.Label>Status</Form.Label>
                          <Form.Control as="select" onChange={(e) => setFormData({...formData, status: e.target.value})}>
                              <option>Pending</option>
                              <option>Shipped</option>
                              <option>Delivered</option>
                          </Form.Control>
                      </Form.Group>
                      <Button variant="primary" style={{ display: 'block', margin: '20px auto' }}type="submit">
                          Submit
                      </Button>
                  </Form>
              </Modal.Body>
          </Modal>
      </Container>
  );
};

export default Order;
