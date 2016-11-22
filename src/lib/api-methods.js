const port = process.env.PORT || 8080;
const host = `http://localhost:${port}`;
// require('whatwg-fetch');

module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};

module.exports.getUserProjects = () => {

};

module.exports.login = (username, password) => {
  const options = {
    method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    body: {
      username,
      password,
    },
  };

  fetch(host, options)
    .then(() => {
      console.log('Successfully logged in');
    });
};

module.exports.signup = (username, password) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };

  return fetch('/signup', options)
    .then(userInfo => userInfo)
    .catch(err => err);
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

module.exports.updateProject = () => {

};
