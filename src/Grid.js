import React from "react";
import Row from "./Row";
import "./grid.css";

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="grid">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </section>
    );
  }
}

export default Grid;
