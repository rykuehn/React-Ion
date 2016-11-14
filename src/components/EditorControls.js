import React from 'react';
import { randomColor, getValue } from '../lib/helpers';

export default class EditorControls extends React.Component {
  componentDidMount() {
    this.resetSliders();
  }

  resetSliders() {
    const context = this;
    const height = getValue('height', context.props.selected, context.props.routes);
    const width = getValue('width', context.props.selected, context.props.routes);
    const flex = getValue('flex', context.props.selected, context.props.routes);

    setTimeout(() => {
      context.height.value = height[0];
      context.width.value = width ? width[0] : 0;
      context.flex.value = flex;
    });
  }

  render() {
    const { updateProps, selected, addChild, nextId } = this.props;
    this.resetSliders();

    return (
      <div>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <button
              onClick={() => {
                addChild('Block', {
                  backgroundColor: randomColor(),
                  flex: 1,
                  height: [20, selected === 0 ? 'px' : '%'],
                  width: [20, '%'],
                  flexDirection: 'row' },
                  selected,
                  nextId,
                );
              }}
            > ADD BLOCK
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            Height
            <input
              type="range"
              min={0}
              max={selected === 0 ? 10000 : 100}
              step={selected === 0 ? 100 : 10}
              ref={i => this.height = i}
              onChange={() => {
                updateProps(
                  'height',
                  [this.height.value, selected === 0 ? 'px' : '%'],
                  selected,
                );
              }}
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
              onChange={() => updateProps(
                'width',
                [this.width.value, '%'],
                selected,
              )}
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
            <button
              onClick={() => updateProps(
                'flexDirection',
                'row',
                selected,
              )}
            > Row
            </button>
            <button
              onClick={() => updateProps(
                'flexDirection',
                'column',
                selected,
              )}
            > Column
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="your text here"
              ref={i => this.text = i}
            />
            <button
              onClick={() => addChild(
                'Text',
                { content: this.text.value },
                selected,
                nextId,
              )}
            > ADD TEXT
            </button>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="background image url"
              ref={i => this.backgroundImage = i}
            />
            <button
              onClick={() => updateProps(
                'backgroundImage',
                this.backgroundImage.value,
                selected,
              )}
            > ADD BACKGROUND IMAGE
            </button>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
