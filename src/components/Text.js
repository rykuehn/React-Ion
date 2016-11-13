import React from 'react';

const Text = ({ content }) => {
  const textStyle = {
    padding: '20px',
    display: 'flex',
  };

  return (
    <div style={textStyle}>
      {content}
    </div>
  );
};

export default Text;
