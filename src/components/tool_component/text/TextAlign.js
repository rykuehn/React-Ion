import React from 'react';

const TextAlign = ({ updateProps, selected }) => (
  <div>
    <button
      onClick={() => updateProps(
        'textAlign',
        'left',
        selected,
      )}
    > <i className="fa fa-align-left" aria-hidden="true" />
    </button>
    <button
      onClick={() => updateProps(
        'textAlign',
        'center',
        selected,
      )}
    > <i className="fa fa-align-center" aria-hidden="true" />
    </button>
    <button
      onClick={() => updateProps(
        'textAlign',
        'right',
        selected,
      )}
    > <i className="fa fa-align-right" aria-hidden="true" />
    </button>
  </div>
);

export default TextAlign;
