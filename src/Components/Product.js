import React, {useState} from 'react';
import {Container,Table,Button,Modal,Form} from 'react-bootstrap';
import './Products.css';
function Product() {
    // State for managing products
   
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
        { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 200 },
        { id: 3, name: 'Product 3', category: 'Category 3', price: 30, stockQuantity: 300 },
    ]);

    // State for managing modal
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
    const [selectedProduct, setSelectedProduct] = useState(null);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedProduct) {
            // Update existing product
            const updatedProducts = products.map((product) =>
                product.id === selectedProduct.id ? { ...product, ...formData } : product
            );
            setProducts(updatedProducts);
        } else {
            // Add new product
            const newProduct = { id: products.length + 1, ...formData };
            setProducts([...products, newProduct]);
        }
        setShowModal(false);
    };

    // Function to handle editing a product
    const handleEdit = (product) => {
        setSelectedProduct(product);
        setShowModal(true);
    };

    // Function to handle deleting a product
    const handleDelete = (productId) => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
    };

    return (
        <Container fluid className="products-container">
            <h1 className="products-heading">Products Management</h1>
            <Button onClick={() => { setSelectedProduct(null); 
                setShowModal(true); }} style={{ display: 'block', margin: '20px auto' }}>Add New Product</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>RS.{product.price}</td>
                            <td>{product.stockQuantity}</td>
                            <td>
                                <Button variant="primary" onClick={() => handleEdit(product)} style={{ marginRight: '10px' }}>
                                    Edit
                                </Button>
                                <Button variant="danger"style={{ marginRight: '10px' }} onClick={() => handleDelete(product.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Modal for adding/editing product */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProduct ? 'Edit Product' : 'Add New Product'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter product name" defaultValue={selectedProduct ? selectedProduct.name : ''} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter category" defaultValue={selectedProduct ? selectedProduct.category : ''} onChange={(e) => setFormData({...formData, category: e.target.value})} />
                        </Form.Group>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter price" defaultValue={selectedProduct ? selectedProduct.price : ''} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                        </Form.Group>
                        <Form.Group controlId="stockQuantity">
                            <Form.Label>Stock Quantity</Form.Label>
                            <Form.Control type="number" placeholder="Enter stock quantity" defaultValue={selectedProduct ? selectedProduct.stockQuantity : ''} onChange={(e) => setFormData({...formData, stockQuantity: e.target.value})} />
                        </Form.Group>
                        <Button variant="primary" style={{ display: 'block', margin: '20px auto' }} type="submit">
                            {selectedProduct ? 'Update' : 'Add'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Product;
