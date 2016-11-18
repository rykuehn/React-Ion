module.exports.download = (projectTree) => {
  const options = {
    method: 'GET',
    // mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  fetch(`/api/project/generate?tree=${encodeURIComponent(JSON.stringify(projectTree))}`, options)
    .then(() => {
      // window.open('/api/project/generate');
    });
};
