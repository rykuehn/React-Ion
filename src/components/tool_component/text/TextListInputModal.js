import React, { PropTypes } from 'react';
import '../../../scss/textInputModal.scss';

class ListTextInputModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addToList(item) {
    const list = this.state.list;
    list.push(item);
    this.setState({ list });
  }

  render() {
    const { textModal, closeTextModal } = this.props;
    const { callback, showing, action, placeholder } = textModal;
    let className = 'modal-hidden';
    if (action === 'list') {
      className = showing ? 'modal-wrapper' : 'modal-hidden';
    }

    const listNode = this.state.list.map((list, index) => (
      <li key={index}>{list}</li>
    ));

    return (
      <div className={className}>
        <div className="modal">
          <button
            className="close-button"
            onClick={() => {
              this.text.value = '';
              this.setState({ list: [] });
              closeTextModal();
            }}
          > <i className="fa fa-window-close" aria-hidden="true" />
          </button>
          <div className="list-modal">
            <div className="list-side">
              <ul>{listNode}</ul>
            </div>
            <div className="input-side">
              <input
                placeholder={placeholder.toUpperCase()}
                type="text"
                ref={i => (this.text = i)}
              />
              <button
                className="submit-button"
                onClick={(e) => {
                  e.preventDefault();
                  this.addToList(this.text.value);
                  this.text.value = '';
                }}
              > ADD
              </button>
              <button
                className="submit-button"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  callback(this.state.list);
                  this.setState({ list: [] });
                  closeTextModal();
                  this.text.value = '';
                }}
              > SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListTextInputModal.propTypes = {
  textModal: PropTypes.object.isRequired,
  closeTextModal: PropTypes.func.isRequired,
};

export default ListTextInputModal;
