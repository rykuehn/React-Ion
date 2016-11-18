import React from 'react';

export default class AddPage extends React.Component {

  setPage(e, index) {
    this.props.setPageSelected(index);
    this.props.setSelected(e, this.props.store.present[index].id);
  }

  callback(context) {
    this.props.addPage(
      context.text.value,
      this.props.nextId,
    );

    this.props.setPageSelected(1);
  }

  render() {
    const context = this;

    const pages = this.props.store.present.map((page, index) => (
      <option
        key={index}
        value={index}
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
