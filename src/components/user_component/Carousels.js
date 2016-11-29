import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class Carousels extends Component {

  componentDidMount() {
    setTimeout(() => this.forceUpdate(), 50);
  }

  render() {
    const { urls, setSelected, selected, id, settings } = this.props;
    const images = urls.map((picture, index) => {
      return (
        <img role="presentation" src={picture} key={index} />
      );
    });

    const divStyles = {
      width: '100%',
      padding: '10px',
      height: 'auto',
      flexWrap: 'wrap',
      whiteSpace: 'initial',
      boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
    };

    return (
      <div onClick={e => setSelected(e, id)} style={divStyles}>
        <Carousel {...settings} >
          {images}
        </Carousel>
      </div>
    );
  }
}
export default Carousels;

