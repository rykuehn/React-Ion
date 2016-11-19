module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};


// module.exports.getUserProjects = () => {

// };

// module.exports.login = (username, password) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       username,
//       password,
//     },
//   };

//   fetch('/login', options)
//     .then(() => {
//       console.log('Successfully logged in');
//     });
// };

// module.exports.signup = (username, password) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       username,
//       password,
//     },
//   };

//   fetch('/signup', options)
//     .then(() => {
//       console.log('Successfully signed up and logged in');
//     });
// };

// module.exports.logout = () => {

// };

// module.exports.getProject = () => {

// };

// module.exports.getAllProjects = () => {

// };


// module.exports.removeProject = () => {

// };

// module.exports.saveProject = (userId, name, projectTree, projectId) => {
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: {
//       name,
//       project_tree: projectTree,
//     },
//   };

//   fetch(`/api/project/${projectId}`, options)
//     .then(() => {
//       console.log('Update Successful');
//     });
// };

// module.exports.updateProject = () => {

// };
