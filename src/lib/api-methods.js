import { host } from './api-config';

module.exports.download = (projectTree) => {
  window.location.href = `/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`;
};

module.exports.getUserProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/api/user/projects`, options)
    .then(projects => projects.json())
    .catch(err => err);
};

module.exports.getUserInfo = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/api/user/info`, options)
    .then(userInfo => userInfo.json())
    .catch(err => err);
};

module.exports.getProjectOwner = (projectId) => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/api/project/${projectId}/owner`, options)
    .then(username => username.json())
    .catch(err => err);
};

module.exports.getProject = (projectId) => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/api/project/${projectId}`, options)
    .then(project => project.json())
    .catch(err => err);
};

module.exports.getAllProjects = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/api/project/`, options)
    .then(projects => projects.json())
    .catch(err => err);
};

module.exports.removeProject = (projectId) => {
  const options = {
    method: 'DELETE',
    credentials: 'include',
  };

  return fetch(`${host}/api/project/${projectId}`, options)
    .then(project => project.json())
    .catch(err => err);
};

module.exports.createProject = (permissionId, projectProps) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ permissionId, projectProps }),
    credentials: 'include',
  };

  return fetch(`${host}/api/project/`, options)
    .then(project => project.json())
    .catch(err => err);
};

module.exports.updateProject = (projectId, newProps) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProps),
    credentials: 'include',
  };

  return fetch(`${host}/api/project/${projectId}`, options)
    .then(project => project.json())
    .catch(err => err);
};

// User Authentication

module.exports.signup = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  };

  return fetch(`${host}/signup`, options)
    .then(user => user.json())
    .catch(err => err);
};

module.exports.login = (username, password) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  };

  return fetch(`${host}/login`, options)
    .then(user => user.json())
    .catch(err => err);
};

module.exports.logout = () => {
  const options = { method: 'GET' };

  return fetch(`${host}/logout`, options)
    .then(user => user.json())
    .catch(err => err);
};

module.exports.authenticate = () => {
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(`${host}/authenticate`, options)
    .then(status => status.json())
    .catch(err => err);
};
