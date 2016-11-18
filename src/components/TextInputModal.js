import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeTextModal } from '../actions/toggleTextModal';
import '../scss/textInputModal.scss';

class TextInputModal extends React.Component {
  render() {
    const { callback, showing, placeholder } = this.props.textModal;
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
              this.props.closeTextModal();
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
              this.props.closeTextModal();
              this.text.value = '';
            }}
          > SUBMIT
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  { textModal: state.textModal }
);
const mapDispatchToProps = dispatch => (
  bindActionCreators({ closeTextModal }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TextInputModal);
