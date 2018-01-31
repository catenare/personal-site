import * as React from "react";

class ContactForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    // this.state = {
    //   value: "",
    //   };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // public input;

  public handleSubmit(event) {
    event.preventDefault();
    // console.log("Event.target", event.target);
    const data = new FormData(event.target);
    console.log(data.get("email"));
  }

  public handleChange(event) {
    console.log("change", event);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/*<input id="username" name="username" type="text" />*/}
        <label htmlFor="name">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            aria-describedby="nameHelpText"
            // value={this.state.name}
            // onChange={this.handleChange}
            required/>
        </label>
        <p className="help-text" id="nameHelpText">Your first and last name</p>
        <label htmlFor="phone">
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            id="phone"
            aria-describedby="phoneHelpText"/>
        </label>
        <p className="help-text" id="phoneHelpText">Your phone number</p>
        <label htmlFor="email">
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            aria-describedby="emailHelpText" required/>
        </label>
        <p className="help-text" id="emailHelpText">Your email address so we can reply.</p>
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
