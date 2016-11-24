import React, { PropTypes } from 'react';
import '../../../scss/editorControls.scss';
import Delete from '../../../containers/tool_component/addremove/Delete';
import TextColor from '../../../containers/tool_component/text/TextColor';
import FontSize from '../../../containers/tool_component/text/FontSize';
import SelectFont from '../../../containers/tool_component/text/SelectFont';
import TextAlign from '../../../containers/tool_component/text/TextAlign';
import NameInput from '../../../containers/tool_component/text/NameInput';
import AddPage from '../../../containers/tool_component/addremove/AddPage';
import RowColumnPicker from '../../../containers/tool_component/adjustor/RowColumnPicker';
import ColorPicker from '../../../containers/tool_component/adjustor/ColorPicker';
import HeightSlider from '../../../containers/tool_component/adjustor/HeightSlider';
import WidthSlider from '../../../containers/tool_component/adjustor/WidthSlider';
import FlexSlider from '../../../containers/tool_component/adjustor/FlexSlider';
import AddLink from '../../../containers/tool_component/addremove/AddLink';
import AddList from '../../../containers/tool_component/addremove/AddList';
import AddRadio from '../../../containers/tool_component/addremove/AddRadio';
import AddDropDown from '../../../containers/tool_component/addremove/AddDropDown';
import AddBtn from '../../../containers/tool_component/addremove/AddBtn';

const EditorControls = ({ info }) => {
  const type = info.componentType;
  if (type === 'Text' || type === 'List' || type === 'Radio' || type === 'DropDown') {
    return (
      <div className="controls-wrapper">
        <Delete />
        <AddPage />
        <TextColor />
        <FontSize />
        <SelectFont />
        <TextAlign />
      </div>
    );
  }
 
  return (
    <div className="controls-wrapper">
      <Delete />
      <NameInput />
      <AddPage />
      <AddBlock />
      <AddImage />
      <AddList />
      <AddRadio />
      <AddBtn />
      <AddDropDown />
      <RowColumnPicker />
      <ColorPicker />
      <HeightSlider />
      <WidthSlider />
      <FlexSlider />
    </div>
  );
};

EditorControls.propTypes = {
  info: PropTypes.object.isRequired,
};

export default EditorControls;
