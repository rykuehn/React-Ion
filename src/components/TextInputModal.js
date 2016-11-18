import React from 'react';
import '../scss/textInputModal.scss';

class TextInputModal extends React.Component {
  render() {
    const { textModal, closeTextModal } = this.props;
    const { callback, showing, placeholder } = textModal;
    return (
      <div
        className={showing
          ? 'modal-wrapper'
          : 'modal-hidden'
        }
      >
        <div className="modal">
          <button
            className="close-button"
            onClick={() => {
              this.text.value = '';
              closeTextModal();
            }}
          > <i className="fa fa-window-close" aria-hidden="true" />
          </button>
          <input
            placeholder={placeholder.toUpperCase()}
            type="text"
            ref={i => (this.text = i)}
          />
          <button
            className="submit-button"
            onClick={(e) => {
              e.preventDefault();
              callback(this);
              closeTextModal();
              this.text.value = '';
            }}
          > SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

export default TextInputModal;
