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
// import "../Singup.css";

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: "seller"
        };
    }

    render() {
        return (
            <div className="Singup">
                <Container>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <Form className="form">
                                <div class="mb-5">
                                    <h1 class="text-center mt-3">
                                        African Marketplace
                                    </h1>
                                    {/* <h2 className="text-center">Welcome!</h2> */}

                                    <div className="mt-5">
                                        <h5 className="text-center">
                                            Please sign up
                                        </h5>
                                        <div className="pt-3">
                                            {/* <FormGroup> */}
                                            {/* <Label
                                                for="exampleUsername"
                                                sm={12}
                                                md={{ size: 6, offset: 3 }}
                                            >
                                                Username
                                            </Label> */}
                                            <Col
                                                sm="12"
                                                md={{ size: 6, offset: 3 }}
                                            >
                                                <input
                                                    class="form-control form-control-sm"
                                                    placeholder="Username"
                                                    name="username"
                                                    type="text"
                                                    onChange={this.handleChange}
                                                />
                                            </Col>
                                            {/* </FormGroup> */}
                                            {/* <FormGroup> */}
                                            {/* <Label
                                                for="examplePassword"
                                                sm={12}
                                                md={{ size: 6, offset: 3 }}
                                            >
                                                Password
                                            </Label> */}
                                            <Col
                                                sm={12}
                                                md={{ size: 6, offset: 3 }}
                                            >
                                                <input
                                                    class="form-control form-control-sm"
                                                    placeholder="Password"
                                                    name="password"
                                                    type="password"
                                                    onChange={this.handleChange}
                                                />
                                            </Col>
                                            {/* </FormGroup> */}
                                            <FormGroup>
                                                <Col
                                                    sm={12}
                                                    md={{ size: 6, offset: 3 }}
                                                >
                                                    <h5 className="text-center mt-3">
                                                        Department
                                                    </h5>

                                                    {/* <FormGroup tag="fieldset"> */}
                                                    {/* <FormGroup check> */}
                                                    <Label check>
                                                        <div className="pt-2">
                                                            <label>
                                                                <input
                                                                    type="radio"
                                                                    value="seller"
                                                                    checked={
                                                                        this
                                                                            .state
                                                                            .selectedOption ===
                                                                        "seller"
                                                                    }
                                                                    onChange={
                                                                        this
                                                                            .handleOptionChange
                                                                    }
                                                                />
                                                                Seller
                                                            </label>
                                                        </div>
                                                    </Label>
                                                    {/* </FormGroup> */}
                                                    <FormGroup>
                                                        <Label check>
                                                            <div>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="buyer"
                                                                        checked={
                                                                            this
                                                                                .state
                                                                                .selectedOption ===
                                                                            "buyer"
                                                                        }
                                                                        onChange={
                                                                            this
                                                                                .handleOptionChange
                                                                        }
                                                                    />
                                                                    Buyer
                                                                </label>
                                                            </div>
                                                        </Label>
                                                    </FormGroup>
                                                    {/* </FormGroup> */}
                                                </Col>
                                            </FormGroup>
                                            <Col
                                                sm={12}
                                                md={{ size: 6, offset: 3 }}
                                            >
                                                <button
                                                    type="button"
                                                    class="btnsm  btn-info center   btn-block"
                                                    // <a href="#" class="btn btn-info center btn-sm active" role="button" aria-pressed="true">Sign up</a>
                                                    onClick={
                                                        this.handleFormSubmit
                                                    }
                                                >
                                                    Sign Up
                                                </button>
                                            </Col>

                                            <p className="text-center pt-3">
                                                {" "}
                                                <span>
                                                    If you already have an
                                                    account,{" "}
                                                </span>
                                                <Link to={`/login`}>
                                                    <span class="text-info">
                                                        login here
                                                    </span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value, "Checking it out");
    };

    handleOptionChange = e => {
        console.log("test", e);
        this.setState({
            selectedOption: e.target.value
        });
        console.log("options", e);
    };

    handleFormSubmit = e => {
        e.preventDefault();

        Auth.signup(
            this.state.username,
            this.state.password,
            this.state.selectedOption
        )
            .then(res => {
                this.props.history.push("/loginaftersignup");
            })

            .catch(err => {
                alert(err);
            });
    };
}

export default withRouter(Signup);
