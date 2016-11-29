import React, { PropTypes } from 'react';
import '../../../scss/inspector.scss';

class Inspector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      changed: {},
    };
  }

  componentWillMount() {
    this.convertProps(this.props);
  }

  componentWillReceiveProps(newProps) {
    this.convertProps(newProps);
  }

  convertProps(prop) {
    const props = prop.info.props;
    const w = props.width ? (props.width[0] + props.width[1]) : '100%';
    const h = props.height ? (props.height[0] + props.height[1]) : '20px';

    const info = {
      flex: props.flex || 1,
      backgroundColor: props.backgroundColor || 'black',
      display: props.display || 'flex',
      alignItems: props.alignItems || 'center',
      justifyContent: props.justifyContent || 'center',
      flexDirection: props.flexDirection || 'row',
      height: h,
      width: w,
      padding: props.padding || '20px',
      margin: props.margin !== undefined ? props.margin : '20px',
      position: props.position || 'relative',
      flexWrap: props.flexWrap || 'wrap',
      boxSizing: props.boxSizing || 'border-box',
      backgroundSize: 'cover',
    };
    this.setState({ info:info });
  }

  onChange(key, event) {
    const tempInfo = this.state.info;
    let changeInfo = this.state.changed;
    if (key === 'height' || key === 'width' ) {
      if (event.target.value.slice(-2) === 'px') {
        changeInfo[key] = [event.target.value.substring(0, event.target.value.length - 2), event.target.value.slice(-2)];
      } else if (event.target.value.slice(-1) === '%') {
        changeInfo[key] = [event.target.value.substring(0, event.target.value.length - 1), event.target.value.slice(-1)];
      }
    } else {
      changeInfo[key] = event.target.value;
    }

    tempInfo[key] = event.target.value;
    this.setState({
      info: tempInfo,
      changed: changeInfo,
    });

  }

  saveChanges() {
    Object.keys(this.state.changed).map((key) => {
      this.props.updateProps(
        `${key}`,
        this.state.changed[key],
        this.props.selected,
      );
    });
  }

  render() {
    const context = this;
    const propList = Object.keys(this.state.info).map((key) => {
      return (
        <div className="inspector-container">
        <label className="inspector-label">{key}</label>
        {
          key === "backgroundColor" ?
          <input className="inspector-input" type="color" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
          :
          <input className="inspector-input" value={context.state.info[key]} onChange={this.onChange.bind(this, key)} />
        }
        </div>
      );
    });

    return (
      <div className="inspector">
        <div className="top-bar">
          Inspector
        </div>
        {propList}
        <button className="save-button" onClick={this.saveChanges.bind(this)}>Save</button>
      </div>
    );
  }

}


export default Inspector;
