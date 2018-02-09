import axios from "axios";
import * as React from "react";
import getCaptcha from "./captcha";

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisable: true,
      fields: ["email", "message", "name", "phone"],
      hasEmail: "cn-contact-us-form-email-no-error",
      hasName: "cn-contact-us-form-name-no-error",
      showForm: true,
    };
    // console.log("Props: ", props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createCaptcha = this.createCaptcha.bind(this);
    this.validateCaptcha = this.validateCaptcha.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.resetCaptcha = this.resetCaptcha.bind(this);
  }

  public componentDidMount() {
    const captcha = getCaptcha;
    this.createCaptcha(captcha);
  }

  public createCaptcha = (siteCaptcha) => {
    siteCaptcha.then((captcha) => {
      const widgetId = captcha.render("recaptcha", {
        callback: this.validateCaptcha,
        sitekey: this.props.captcha.captcha,
      });
      this.setState({widgetId});
      this.setState({captcha});
    });
  }

  public validateCaptcha(response) {
    this.setState({captchaResult: response});
    this.setState({buttonDisable: false});
  }

  public resetCaptcha() {
    this.state.captcha.reset();
  }

  public validateForm(data) {
    let result = true;
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   // tslint:disable-line

    const Email = "email";
    const hasEmail = emailCheck.test(data[Email]);
    if (!hasEmail) {
      this.setState({hasEmail: "cn-contact-us-form-email-error"});
      result = false;
    }

    const Name = "name";
    if ( data[Name].length < 3) {
      this.setState({hasName: "cn-contact-us-form-name-error"});
      result = false;
    }
    return result;
  }

  public resetForm(form) {
    this.state.fields.forEach( (field) => form.target[field].value = "" );
    this.setState({buttonDisable: true});
  }

  public handleSubmit(event) {
    const Captcha = "captcha";
    const Destination = "destination";
    const data = {};
    event.preventDefault();
    const form = new FormData(event.target);

    this.state.fields.forEach( (field) => data[field] = form.get(field));
    this.resetCaptcha();

    if (!this.validateForm(data)) {
      this.setState({buttonDisable: true});
      return;
    }
    this.resetForm(event);

    data[Captcha] = this.state.captchaResult;
    data[Destination] = this.props.captcha.destination;

    const config = {
      data,
      headers: {"x-api-key": "xeSQf3MI96bwatnZ2Vdy52pu6nBpUaW7GEtY69ni"},
      method: "post",
      url: this.props.captcha.url,
    };
    axios(config).then((response) =>  this.setState({showForm: false}) );
  }

  public render() {
    if (this.state.showForm) {
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
        <p className={this.state.hasName}>Name is too short!</p>
        <p className="help-text" id="nameHelpText">Your first and last name</p>

        <label htmlFor="email">
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            aria-describedby="emailHelpText" required/>
        </label>
        <p className={this.state.hasEmail}>Valid mail required!</p>
        <p className="help-text" id="emailHelpText">Your email address.</p>

        <label htmlFor="phone">
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            id="phone"
            aria-describedby="phoneHelpText"/>
        </label>
        <p className="help-text" id="phoneHelpText">Your phone number.</p>
        <label htmlFor="message">
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            aria-describedby="messageHelpText"/>
        </label>
        <p className="help-text" id="messageHelpText">Your message.</p>
        <div id="recaptcha"></div>
        <button className="button primary" type="submit" disabled={this.state.buttonDisable}>Submit</button>
      </form>
    );
  } else {
    return (
      <h1>Thank you!</h1>
    );
  }
  }

}

export default ContactForm;
