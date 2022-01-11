import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DeleteIcon from '@mui/icons-material/Delete'

class Product extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="g-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>
                  <Row className="g-2">
                    <Col xs={6}>Product Name</Col>
                    <Col xs={6} className="text-end">
                      <DeleteIcon />
                    </Col>
                  </Row>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Category
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
                <Card.Text>Descrition</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Row className="g-3">
                  <Col xs={6} className="text-start">
                    Last Update
                  </Col>
                  <Col xs={6} className="text-end">
                    Views
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Product
