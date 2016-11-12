import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { Link } from 'react-router';
// import Header from '../containers/Header';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { randomColor, mapComponents } from '../lib/helpers';
import { updateProps, addChild, getValue } from '../actions/routes';
// import { setNextId } from '../actions/nextId';


require('../scss/index.scss');

class Index extends Component {
  // componentDidMount() {
  //   this.height.value = getValue('height');
  //   this.flex.value = getValue('flex');
  // }

  render() {
    const { updateProps, routes, selected, addChild, nextId } = this.props;
    return (
      <div className="App">
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            Height
            <input
              type="range"
              min={0}
              max={100}
              step={10}
              ref={i => this.height = i}
              onChange={() => updateProps('height', this.height.value, selected)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            Flex
            <input
              type="range"
              min={0}
              max={10}
              ref={i => this.flex = i}
              onChange={() => updateProps('flex', this.flex.value, selected)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => {
                addChild('BLOCK', { color: randomColor(), flex: 1, height:20}, selected, nextId);
                // setTimeout(()=>setNextId(), 100);
              }}
            > ADD BLOCK
            </button>
          </div>
          <br />
        </div>
        {mapComponents(routes, selected)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes,
    nextId: state.nextId,
    selected: state.selected,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateProps, addChild, getValue }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
