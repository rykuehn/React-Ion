import React from 'react';

class AddPage extends React.Component {
  constructor(props) {
    super(props);
    this.createPage = this.createPage.bind(this);
  }

  setPage(e, index) {
    this.props.setSelected(e, this.props.routes[index].id);
    this.props.setPageSelected(index);
  }

  capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  makeComponentName(string) {
    return string.split(' ').map(word => this.capitalizeFirstLetter(word)).join('');
  }

  createPage(context) {
    this.props.addPage(
      this.makeComponentName(context.text.value),
      this.props.nextId,
    );
    setTimeout(() => {
      this.props.setPageSelected(this.props.store.pages.length - 1);
      this.props.setSelector(this.props.routes[this.props.routes.length - 1].id);
    }, 100);
  }

  render() {
    // const context = this;
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
            this.createPage,
          )}
        > <i className="fa fa-plus" aria-hidden="true" /> NEW PAGE
        </button>
        PAGES:
        <select
          ref={s => (this.selected = s)}
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

<<<<<<< 97554ddc42245566f5529e88862eaa58b2c305b5
=======
export default AddPage;
>>>>>>> (refactor) Refactor AddPage, EditorControls, and SelectFont into containers
