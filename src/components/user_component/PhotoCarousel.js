import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class PhotoCarousel extends Component {

  componentDidMount() {
    setTimeout(() => this.forceUpdate(), 50);
  }


  render() {
    const { content } = this.props;
    const images = content.map((picture, index) => {
      return (
       <img role="presentation" src={picture} key={index} />
      );
    });

    return (
      <Carousel autoplay="true" slideWith={1}>
        {images}
      </Carousel>
    );
  }
}

export default PhotoCarousel;
