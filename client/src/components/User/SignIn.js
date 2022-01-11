import React, { Component } from 'react'
import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
class SignIn extends Component {
  render() {
    return (
      <Container>
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
              outline
              style={{ width: '20rem', height: '18rem' }}
              className="text-center"
            >
              <Card.Text>
                <Form>
                  <Form.Group className="my-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Form>
              </Card.Text>
              <Card.Title tag="h5" className="mt-5">
                <Button>Sign In</Button>
              </Card.Title>
              <Card.Subtitle className="text-center mt-3 mb-2">
                Don't have an account?{' '}
                <Link
                  to="/signup"
                  variant="link"
                  style={{ textDecoration: 'none' }}
                >
                  Register
                </Link>
              </Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SignIn
