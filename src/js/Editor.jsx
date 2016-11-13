import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { randomColor, mapComponents, getValue } from '../lib/helpers';
import { updateProps, addChild } from '../actions/routes';

class Editor extends Component {
  componentDidMount() {
    this.resetSliders();
  }

  resetSliders() {
    const context = this;
    setTimeout(() => {
      context.height.value = getValue('height', context.props.selected, context.props.routes);
      context.width.value = getValue('width', context.props.selected, context.props.routes);
      context.flex.value = getValue('flex', context.props.selected, context.props.routes);
    });
  }

  render() {
    const { updateProps, routes, selected, addChild, nextId } = this.props;
    console.log(JSON.stringify(routes));
    this.resetSliders();

    return (
      <div style={{ minHeight: '100vh', flexDirection: 'column' }}>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            Height
            <input
              type="range"
              min={0}
              max={10000}
              step={100}
              ref={i => this.height = i}
              onChange={() => updateProps('height', this.height.value, selected)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            Width
            <input
              type="range"
              min={0}
              max={100}
              step={10}
              ref={i => this.width = i}
              onChange={() => updateProps('width', this.width.value, selected)}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            Flex
            <input
              type="range"
              min={0}
              max={10}
              ref={i => this.flex = i}
              onChange={() => updateProps(
                'flex', this.flex.value, selected,
              )}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            Direction
            <button onClick={() => updateProps('flexDirection', 'row', selected)}>
              Row
            </button>
            <button onClick={() => updateProps('flexDirection', 'column', selected)}>
              Column
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => {
                addChild('Block', { backgroundColor: randomColor(), flex: 1, height: 20, width: 20, flexDirection: 'row' }, selected, nextId);
              }}
            > ADD BLOCK
            </button>
            
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="your text here"
              ref={i => this.text = i}
            />
            <button
              onClick={() => addChild('Text', { content: this.text.value }, selected, nextId)}
            > ADD TEXT
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
