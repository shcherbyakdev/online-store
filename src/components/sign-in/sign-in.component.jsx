import React from "react";

import { FormInput, CustomButton } from "../../components";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            value={email}
            label="Email"
            handleChange={this.handleChange}
            name="email"
            type="email"
            required
          />
          <FormInput
            value={password}
            label="Password"
            handleChange={this.handleChange}
            name="password"
            type="password"
            required
          />
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
