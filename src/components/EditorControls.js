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
import AddSubtractBlock from '../containers/AddSubtractBlock';
import TextInput from '../containers/TextInput';
import BackgroundImageInput from '../containers/BackgroundImageInput';
import RowColumnPicker from '../containers/RowColumnPicker';
import ColorPicker from '../containers/ColorPicker';
import HeightSlider from '../containers/HeightSlider';
import WidthSlider from '../containers/WidthSlider';
import FlexSlider from '../containers/FlexSlider';
import AddLink from '../containers/AddLink';

const EditorControls = ({ info }) => {
  const type = info.componentType;
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
      <AddSubtractBlock />
      <TextInput />
      <BackgroundImageInput />
      <AddLink />
      <RowColumnPicker />
      <ColorPicker />
      <HeightSlider />
      <WidthSlider />
      <FlexSlider />
    </div>
  );
};

export default EditorControls;
