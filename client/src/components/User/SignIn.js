import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
} from 'reactstrap'
import { Link } from 'react-router-dom'
class SignIn extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col
            md={{
              offset: 3,
              size: 6,
            }}
            sm="12"
          >
            <Card
              body
              outline
              style={{ width: '25rem' }}
              className="text-center"
            >
              <CardText>
                <Form>
                  <FormGroup row>
                    <Col sm={12}>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Email"
                        type="email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col sm={12}>
                      <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Password"
                        type="password"
                      />
                    </Col>
                  </FormGroup>
                </Form>
              </CardText>
              <CardTitle tag="h5">
                <Button>Sign In</Button>
              </CardTitle>
              <CardSubtitle className="text-center">
                Don't have an account?{' '}
                <Link to="/signup" className="btn-light">
                  Register
                </Link>
              </CardSubtitle>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default SignIn
