import React from 'react';
import store from '../store/store';

export default class AddPage extends React.Component {

  setPage(e, index) {
    this.props.setSelected(e, this.props.store.pages[this.props.pageSelected]);
    this.props.setPageSelected(index);
    console.log(this.props.store.pages[this.props.pageSelected]);
    // setTimeout(() => {
    //   this.props.setSelected(e, this.props.store.pages[this.props.pageSelected]);
    // }, 10);
  }

  callback(context) {
    this.props.addPage(
      context.text.value,
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
      > {page.name.toUpperCase()}
      </option>
    ));

    return (
      <div>
        <button
          onClick={() => this.props.toggleTextModal(
            'enter page name',
            this.callback.bind(this),
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> ADD PAGE
        </button>
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
