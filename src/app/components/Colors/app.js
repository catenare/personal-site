import {Component} from "react";
import uuid from "uuid/v4";
import { AddColorForm } from "./colorform";
import { ColorList } from "./colorlist";

import "./styles/APP.scss";

class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);

  }

  componentWillMount() {
    if(this.props.colors) {
      let colors = this.props.colors.colors
      this.setState({colors})
    }
  }

  addColor(title, color) {
    const colors = [
      ...this.state.colors,
      {
        color,
        id: uuid(),
        rating: 0,
        title,

      },
    ];
    this.setState({colors});
  }

  rateColor(id, rating) {
    const colors = this.state.colors.map(
      (color) => (color.id !== id) ? color: { ...color, rating}
    );
    console.log(colors);
    this.setState({colors});
  }

  removeColor(id) {
    const colors = this.state.colors.filter(
      (color) => color.id !== id,
    );
    this.setState({colors});
  }

  render() {
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
          onRate={rateColor}
          onRemove={removeColor}
        />
      </div>
    );
  }
}

export {App};
