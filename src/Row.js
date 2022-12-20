import React from "react";
import Item from "./Item";
import "./row.css";

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <Item name="Item 1" />
        <Item name="Item 2" />
        <Item name="Item 3" />
        <Item name="Item 4" />
        <Item name="Item 5" />
        <Item name="Item 6" />
        <Item name="Item 7" />
        <Item name="Item 8" />
        <Item name="Item 9" />
      </div>
    );
  }
}

export default Row;
