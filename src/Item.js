import React from "react";
import "./item.css";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="item">{this.props.name}</div>;
  }
}

export default Item;
