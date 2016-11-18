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
