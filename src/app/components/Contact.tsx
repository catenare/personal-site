import axios from "axios";
import * as React from "react";
import getCaptcha from "./captcha";

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {buttonDisable: true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createCaptcha = this.createCaptcha.bind(this);
    this.validateCaptcha = this.validateCaptcha.bind(this);
  }
  // public input;

  public componentDidMount() {
    const captcha = getCaptcha;
    this.createCaptcha(captcha);
  }

  public createCaptcha = (siteCaptcha) => {
    siteCaptcha.then((captcha) => {
      const widgetId = captcha.render("recaptcha", {
        callback: this.validateCaptcha,
        sitekey: this.props.captcha,
      });
      this.setState({widgetId});
      this.setState({captcha});
      // console.log("Captcha:", captcha);
    });
  }

  public validateCaptcha(response) {
    this.setState({captchaResult: response});
    this.setState({buttonDisable: false});
  }

  public handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      email: form.get("email"),
      message: form.get("message"),
      name: form.get("name"),
      phone: form.get("phone"),
    };

    axios.post("http://localhost:5000/form", {
      data,
    }).then((response) => null);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            aria-describedby="nameHelpText"
            required/>
        </label>
        <p className="help-text" id="nameHelpText">Your first and last name</p>
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            aria-describedby="emailHelpText" required/>
        </label>
        <p className="help-text" id="emailHelpText">Your email address so we can reply.</p>
        <label htmlFor="phone">
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            id="phone"
            aria-describedby="phoneHelpText"/>
        </label>
        <p className="help-text" id="phoneHelpText">Your phone number</p>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            aria-describedby="messageHelpText"/>
        </label>
        <p className="help-text" id="messageHelpText">Your message to us.</p>
        <div id="recaptcha"></div>
        <button className="button primary" type="submit" disabled={this.state.buttonDisable}>Submit</button>
      </form>
    );
  }

}

export default ContactForm;
