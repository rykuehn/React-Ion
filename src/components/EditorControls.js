import React from 'react';
import '../scss/editorControls.scss';
import DeleteText from '../containers/DeleteText';
import UpdateText from '../containers/UpdateText';
import TextColor from '../containers/TextColor';
import FontSize from '../containers/FontSize';
import SelectFont from '../containers/SelectFont';
import TextAlign from '../containers/TextAlign';
import NameInput from '../containers/NameInput';
import AddPage from '../containers/AddPage';
import AddSubtractBlock from './AddSubtractBlock';
import TextInput from './TextInput';
import BackgroundImageInput from './BackgroundImageInput';
import RowColumnPicker from './RowColumnPicker';
import ColorPicker from './ColorPicker';
import HeightSlider from './HeightSlider';
import WidthSlider from './WidthSlider';
import FlexSlider from './FlexSlider';

export default class EditorControls extends React.Component {
  render() {
    const type = this.props.info.componentType;
    if (type === 'Text') {
      return (
        <div className="controls-wrapper">
          <DeleteText />
          <UpdateText />
          <TextColor />
          <FontSize />
          <SelectFont />
          <TextAlign />
        </div>
      );
    }
    return (
      <div className="controls-wrapper">
        <NameInput />
        <AddPage />
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
