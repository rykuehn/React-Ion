import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: this.props.content[0],
    };
  }

  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });

    setTimeout(() => this.forceUpdate(), 50);
  }

  render() {
    const {
      content,
      id,
      setSelected,
      selected,
      color,
      fontSize,
      fontFamily,
      textAlign,
    } = this.props;

    const textStyle = {
      textAlign,
      fontFamily,
      fontSize,
      color,
      width: 'calc(100% - 0px)',
      padding: '10px',
      flexWrap: 'wrap',
      whiteSpace: 'initial',
      boxShadow: selected === id ? 'inset 0 0 0 1px #93FE3F' : 'inset 0 0 0 1px coral',
    };

    const divStyle = {
      display: 'block',
    };

    const inputStyle = {
      display: 'inline-block',
    }

    console.log('SELECTED OPTION', this.state.selectedOption)
    return (
      <form
        style={textStyle}
        onClick={e => setSelected(e, id)}
      >
        {content.map((item, index) => {
          return (
            <div style={divStyle} key={index}>
              <label style={inputStyle} >
                <input
                  style={inputStyle}
                  type="radio"
                  value={item}
                  onClick={this.handleOptionChange.bind(this)}
                  checked={this.state.selectedOption === item}
                /> {item}
              </label>
            </div>
          );
        })}
      </form>
    );
  }
}


export default Radio;
