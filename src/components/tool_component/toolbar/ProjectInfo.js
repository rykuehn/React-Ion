import React, { PropTypes } from 'react';
import { updateProject } from '../../../lib/api-methods';
import '../../../scss/projectInfo.scss';

const ProjectInfo = ({ routes, toggleTextModal, updateTreeInfo }) => {
  const callback = (value) => {
    let projectId = window.location.href.match(/\/[^/]*$/)[0].slice(1);
    const projectProps = {
      name: value,
    };

    updateProject(projectId, projectProps).then((project) => {
      updateTreeInfo(
        'projectName',
        value,
      );
    })

  };

  return (
    <div className="project-name">
      <button
        onClick={() => toggleTextModal(
          'enter project name',
          'text',
          callback,
        )}
      >
      PROJECT NAME <br /> {routes.projectName} <i className="fa fa-pencil" aria-hidden="true" />
      </button>
    </div>
  );
};


export default ProjectInfo;