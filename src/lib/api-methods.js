module.exports.download = (projectTree) => {
  window.open(`/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`);
  // const options = {
  //   method: 'GET',
  //   // mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // };

  // fetch(, options)
  //   .then(() => {
      
  //   });
};

module.exports.getUserProjects = () => {

};

module.exports.login = () => {

};

module.exports.signup = () => {

};

module.exports.logout = () => {

};

module.exports.getProject = () => {

};

module.exports.getAllProjects = () => {

};


module.exports.removeProject = () => {

};

module.exports.saveProject = (userId, name, projectTree, projectId) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      name,
      project_tree: projectTree,
    },
  };

  fetch(`/api/project/${projectId}`, options)
    .then(() => {
      console.log('Update Successful');
    });
};

// module.exports.updateProject = () => {

// };
