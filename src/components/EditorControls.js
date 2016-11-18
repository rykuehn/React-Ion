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
import UpdateText from './UpdateText';
import TextColor from './TextColor';
import FontSize from './FontSize';
import DeleteText from './DeleteText';
import SelectFont from './SelectFont';
import TextAlign from './TextAlign';
import AddPage from './AddPage';

export default class EditorControls extends React.Component {
  render() {
    const type = this.props.info.componentType;
    if (type === 'Text') {
      return (
        <div className="controls-wrapper">
          <DeleteText {...this.props} />
          <UpdateText {...this.props} />
          <TextColor  {...this.props} />
          <FontSize   {...this.props} />
          <SelectFont {...this.props} />
          <TextAlign  {...this.props} />
        </div>
      );
    }
    return (
      <div className="controls-wrapper">
        <NameInput            {...this.props} />
        <AddPage              {...this.props} />
        <AddSubtractBlock     {...this.props} />
        <TextInput            {...this.props} />
        <BackgroundImageInput {...this.props} />
        <RowColumnPicker      {...this.props} />
        <ColorPicker          {...this.props} />
        <HeightSlider         {...this.props} />
        <WidthSlider          {...this.props} />
        <FlexSlider           {...this.props} />
      </div>
    );
  }
}
