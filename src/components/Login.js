import React, { Component } from "react";
import Auth from "./AuthService";
import { Route, Link, withRouter } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container,
    Row,
    Col
} from "reactstrap";

class Login extends Component {
    constructor() {
        super();
    }
    componentWillMount() {
        if (Auth.loggedIn()) this.props.history.replace("/");
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Form className="form">
                            <div className="mb-5">
                                <h1 className="text-center mt-3">
                                    African Marketplace
                                </h1>
                                <div className="mt-5">
                                    <h5 className="text-center">
                                        Please login
                                    </h5>
                                    <div className="center">
                                        <div className="card">
                                            <div>
                                                {this.props.register
                                                    ? "Log in with your new credentials"
                                                    : " "}
                                            </div>
                                            <div className="pt-3">
                                                <Col
                                                    sm="12"
                                                    md={{ size: 6, offset: 3 }}
                                                >
                                                    <input
                                                        className="form-control form-control-sm"
                                                        placeholder="Username goes here..."
                                                        name="username"
                                                        type="text"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Col>
                                                <Col
                                                    sm="12"
                                                    md={{ size: 6, offset: 3 }}
                                                >
                                                    <input
                                                        className="form-control form-control-sm"
                                                        placeholder="Password goes here..."
                                                        name="password"
                                                        type="password"
                                                        onChange={
                                                            this.handleChange
                                                        }
                                                    />
                                                </Col>
                                                <Col
                                                    sm="12"
                                                    md={{ size: 6, offset: 3 }}
                                                >
                                                    <button
                                                        type="button"
                                                        className="btnsm  btn-info center   btn-block"
                                                        onClick={
                                                            this
                                                                .handleFormSubmit
                                                        }
                                                    >
                                                        Login
                                                    </button>
                                                </Col>
                                                <p className="text-center pt-3">
                                                    <span>
                                                        If you don't have an
                                                        account,{" "}
                                                    </span>
                                                    <Link to={`/signup`}>
                                                        <span>
                                                            sign up here
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();

        Auth.login(this.state.username, this.state.password)
            .then(res => {
              console.log(res);
                this.props.history.push("/dashboard");
            })
            .catch(err => {
                alert(err);
            });
    };
}

export default withRouter(Login);
