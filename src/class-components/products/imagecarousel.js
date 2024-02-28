import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

class ImageCarouselIncrement extends Component {
  constructor() {
    super();
    this.state = {
     
    img:[]
    
    };
  }

  increase = () => {
    this.setState({
      img: [...this.state.images, 1]
    });
  };

  render() {
    return (
      <div>
        <h1>
          <button onClick={this.increase}>increment</button>
        </h1>
        <Carousel>
          {this.state.images.map((eachObject, index) => (
            <div key={index}>
              <img style={{height:"800px"}} src="https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png" alt="circle" />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default ImageCarouselIncrement;
