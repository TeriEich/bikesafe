import React, { Component } from 'react';

export default class Graphs extends Component {
  render() {
    return (
      <div className="container-graphs">
        <img className="graph" id="graph-1" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-2" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-3" src={require("./media/fake-graph.png")} alt="graph" />
        <img className="graph" id="graph-4" src={require("./media/fake-graph.png")} alt="graph" />
      </div>
      );
  }
}
