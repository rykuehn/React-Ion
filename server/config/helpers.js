const request = require('request');
const { host } = require('../../src/lib/api-config');

module.exports.getProjectOwner = (token, projectId, cb) => {
  const options = {
    method: 'GET',
    uri: `${host}/api/project/${projectId}/owner`,
    json: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  request(options, (err, res2, body) => {
    cb(body.data);
  });
};

module.exports.getUserInfo = (token, cb) => {
  const options = {
    method: 'GET',
    uri: `${host}/api/user/info`,
    json: {},
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  request(options, (err, res2, body) => {
    cb(body.data);
  });
};
