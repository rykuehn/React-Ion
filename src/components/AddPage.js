import React from 'react';
import store from '../store/store';

export default class AddPage extends React.Component {

  setPage(e, index) {
    this.props.setSelected(e, this.props.store.pages[this.props.pageSelected]);
    this.props.setPageSelected(index);
    // setTimeout(() => {
    //   this.props.setSelected(e, this.props.store.pages[this.props.pageSelected]);
    // }, 10);
  }

  capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  makeComponentName(string) {
    return string.split(' ').map(word => this.capitalizeFirstLetter(word)).join('');
  }

  callback(context) {
    this.props.addPage(
      this.makeComponentName(context.text.value),
      this.props.nextId,
    );

    setTimeout(() => {
      this.props.setPageSelected(this.props.store.pages.length - 1);
    }, 100);
  }

  render() {
    const context = this;

    const pages = this.props.store.present.map((page, index) => (
      <option
        key={index}
        value={index}
        selected={context.props.pageSelected === index ? 'selected' : ''}
      > {page.name}
      </option>
    ));

    return (
      <div className="add-page">
        <button
          onClick={() => this.props.toggleTextModal(
            'enter page name',
            this.callback.bind(this),
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> NEW PAGE
        </button>
        PAGES:
        <select
          ref={s => this.selected = s}
          name="pages"
          onChange={e => this.setPage(
            e, this.selected.value,
          )}
        > {pages}
        </select>
      </div>
    );
  }
}
