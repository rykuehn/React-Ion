import React from 'react';

export default class AddPage extends React.Component {
  constructor (props) {
    super(props);
  }

  callback(context) {
    this.props.addPage(
      context.text.value,
      this.props.nextId,
    );

    this.props.setPageSelected(
      1
    );
  }

  setPage(e, index) {
    console.log('setSelected:', this.props.store.present[index].id, 'page index:', index)
    this.props.setPageSelected(index);
    this.props.setSelected(e, this.props.store.present[index].id);
  }

  render() {
    const context = this;

    const node = this.props.store.present.map((page, index) => {
      return (
        <button key={page.name} onClick={e => context.setPage(e, index)}>{page.name}</button>
      )
    })
    return (
      <div>
        <button
          onClick={() => this.props.toggleTextModal(
            'enter text',
            this.callback.bind(this),
          )}
          > <i className="fa fa-plus" aria-hidden="true" /> ADD PAGE
        </button>
        {node}
      </div>
    )
  }
}
