import * as React from "react";

import uuid from "uuid/v4";
import { AddColorForm } from "./colorform";
import { ColorList } from "./colorlist";

import "./styles/APP.scss";

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  public componentWillMount() {
    if (this.props.colors) {
      const colors = this.props.colors.colors;
      this.setState({colors});
    }
  }

  public addColor(title, color) {
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

  public rateColor(id, rating) {
    const colors = this.state.colors.map(
      (color) => (color.id !== id) ? color : {...color, rating},
    );
    this.setState({colors});
  }

  public removeColor(id) {
    const colors = this.state.colors.filter(
      (color) => color.id !== id,
    );
    this.setState({colors});
  }

  public render() {
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
