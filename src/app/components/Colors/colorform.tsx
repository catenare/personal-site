import * as React from "react";

class AddColorForm extends React.Component<any, any> {

  public static defaultProps: any = {
    onNewColor: (f) => f,
  };

  private _title: HTMLInputElement; // tslint:disable-line
  private _color: HTMLInputElement; // tslint:disable-line

  public constructor(props) {
    super(props);
    console.log(props); // tslint:disable-line
    this.submit = this.submit.bind(this);
  }

  public submit(e) {
    const { _title, _color} = this.refs;
    e.preventDefault();
    // alert(`New Color: ${this._title.value} ${this._color.value}`);
    this.props.onNewColor(this._title.value, this._color.value);
    this._title.value = "enter a value";
    this._color.value = "#0f0f0f";
    this._title.focus();
  }
  public render() {
    return (
      <form onSubmit={this.submit}>
        <input ref={(input) => {this._title = input; }} type="text" placeholder="color title..." required />
        <input ref={(input) => {this._color = input; }} type="color" required/>
        <button className="button">ADD</button>
      </form>
    );
  }
}

// AddColorForm.propTypes = {
//   onNewColor: PropTypes.func,
// };

export {AddColorForm};
