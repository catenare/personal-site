import axios from "axios";
import * as React from "react";

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: "",
    //   };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // public input;

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
    }).then((response) => console.log(response.data));
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
        <button className="button primary" type="submit">Submit</button>
      </form>
    );
  }

}

export default ContactForm;
