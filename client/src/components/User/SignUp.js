import React, { Component } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SignUp extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col
            md={{
              offset: 4,
              size: 6,
            }}
            sm="12"
          >
            <Card
              body
              style={{ width: '35rem', height: '35rem' }}
              className="text-center"
            >
              <Card.Text>
                <Form>
                  <Row className="g-2">
                    <Col md>
                      <Form.Group className="my-3" controlId="fname">
                        <Form.Control type="text" placeholder="First Name" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group className="my-3" controlId="lname">
                        <Form.Control type="text" placeholder="Last Name" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Group className="my-3">
                        <Form.Control type="text" placeholder="Address" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col md>
                      <Form.Group className="my-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group
                        className="my-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Control
                          type="number"
                          placeholder="Phone Number"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col>
                      <Form.Group className="my-3">
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col>
                      <Form.Group className="my-3">
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Text>
              <Card.Title tag="h5" className="mt-5">
                <Button header>Register</Button>
              </Card.Title>
              <Card.Subtitle className="text-center mt-3 mb-2">
                Already have an account?{' '}
                <Link
                  to="/signin"
                  variant="link"
                  style={{ textDecoration: 'none' }}
                >
                  Sign In
                </Link>
              </Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SignUp
