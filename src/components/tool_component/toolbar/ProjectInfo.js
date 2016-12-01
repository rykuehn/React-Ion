import React, { PropTypes } from 'react';
import { updateProject } from '../../../lib/api-methods';
import '../../../scss/projectInfo.scss';

const ProjectInfo = ({
  routes,
  toggleTextModal,
  updateTreeInfo,
}) => {
  const callback = (value) => {
    const projectId = window.location.href.match(/\/[^/]*$/)[0].slice(1);
    const projectProps = {
      name: value,
    };

    updateProject(projectId, projectProps).then(() => {
      updateTreeInfo(
        'projectName',
        value,
      );
    });
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
        PROJECT NAME{' '}
        <i className="fa fa-pencil" aria-hidden="true" />
        <br />
        <span className="project-name">
          {"'"}{routes.projectName}{"'"}
        </span>
      </button>
    </div>
  );
};


export default ProjectInfo;
