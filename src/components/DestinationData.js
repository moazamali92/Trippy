import { Component } from "react";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
        <div className="images">
          <img src={this.props.img1} alt="" />
          <img src={this.props.img2} alt="" />
        </div>
      </div>
    );
  }
}
export default DestinationData;
