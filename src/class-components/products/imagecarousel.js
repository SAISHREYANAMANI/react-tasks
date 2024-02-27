import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Image from "../../components/functionalcomponents/image/image";

class ImageCarouselIncrement extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     images: []
  //   };
  // }

  // increase = () => {
  //   this.setState({
  //     Image: [...this.state.images,1]
  //   });
  // };
  // constructor() {
  //   super();
  //   this.state = {
  //     images: []
  //   };
  // }

  // increase = () => {
  //   this.setState({
  //     images: [...this.state.images,1]
  //   });
  // };

  // class Curimg extends Component {
    constructor() {
      super();
      this.state = {
        index:0,
        images: []
      };
    }
  
    increase = () => {
      this.setState(prevState => ({
              index: (prevState.index + 1) % this.state.images.length
           }));
    };

  render() {
    return (
      <div>
         <h1>
          <button onClick={this.increase}>increment</button>
         </h1>

         <Carousel activeIndex={this.state.index}>
          {this.state.images.map((images, i) => (
            <Carousel.Item key={i}>
              <Image/>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default ImageCarouselIncrement ;


// import React, { Component } from "react";
// import { Carousel, Button } from "react-bootstrap";
// import Image from "../../components/functionalcomponents/image/image";

// class ImageCarouselIncrement extends Component {
//   constructor() {
//     super();
//     this.state = {
//       index: 0,  // Initial index
//       images: []  // You can populate this array with your images
//     };
//   }

//   increase = () => {
//     // Increment the index to display the next image
//     this.setState(prevState => ({
//       index: (prevState.index + 1) % this.state.images.length
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <h1>
//           <Button onClick={this.increase}>Increment</Button>
//         </h1>
//         <Carousel activeIndex={this.state.index}>
//           {this.state.images.map((image, i) => (
//             <Carousel.Item key={i}>
//               <Image />
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     );
//   }
// }

// export default ImageCarouselIncrement;




