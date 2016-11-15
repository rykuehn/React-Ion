import React from 'react';
import '../scss/editorControls.scss';
import HeightSlider from './HeightSlider';
import WidthSlider from './WidthSlider';
import FlexSlider from './FlexSlider';
import AddSubtractBlock from './AddSubtractBlock';
import RowColumnPicker from './RowColumnPicker';
import ColorPicker from './ColorPicker';
import NameInput from './NameInput';
import BackgroundImageInput from './BackgroundImageInput';
import TextInput from './TextInput';

export default class EditorControls extends React.Component {
  render() {
    return (
      <div
        className={this.props.controlsShowing
          ? 'controls-wrapper'
          : 'hidden'
        }
      >
        <AddSubtractBlock     {...this.props} />
        <HeightSlider         {...this.props} />
        <WidthSlider          {...this.props} />
        <FlexSlider           {...this.props} />
        <RowColumnPicker      {...this.props} />
        <ColorPicker          {...this.props} />
        <NameInput            {...this.props} />
        <BackgroundImageInput {...this.props} />
        <TextInput            {...this.props} />
      </div>
    );
  }
}
