import React from 'react';
import Draggable from 'react-draggable';
import AddBlock from '../../../containers/tool_component/addremove/AddBlock';
import AddImage from '../../../containers/tool_component/addremove/AddImage';
import AddList from '../../../containers/tool_component/addremove/AddList';
import TextInput from '../../../containers/tool_component/text/TextInput';

import '../../../scss/AddComponents.scss';


const AddComponents = () => (
  <Draggable>
    <div className="add-components">
      <div className="top-bar">
        <button>
          <i
            className="fa fa-close"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="components-list">
        <AddBlock />
        <TextInput />
        <AddImage />
        <AddList />
      </div>
    </div>
  </Draggable>
);

export default AddComponents;
