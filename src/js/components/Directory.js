import React from 'react';

const Directory = React.createClass({
  displayName: 'Directory',

  propTypes: {
    fields: React.PropTypes.arrayOf(React.PropTypes.object),
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    title: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      filterText: ''
    };
  },

  handleFilter: function () {
    this.setState({
      filterText: this.refs.filterInput.value
    });
  },

  render: function() {
    const createHeaderCell = (item) => {
      return (
        <th key={item.id}>{item.name}</th>
      );
    };

    const createItemRow = (item) => {
      return (
        <tr key={item.id}>
          <td><a href='#'>{item.name}</a></td>
          <td>{item.weight}</td>
          <td>{item.point}</td>
          <td>{item.endDate}</td>
        </tr>
      );
    };

    const applyFilter = (item) => {
      const name = item.name.toLowerCase();
      const filterText = this.state.filterText.toLowerCase();

      return name.indexOf(filterText) !== -1;
    };

    const filteredItems = this.props.items.filter(applyFilter);

    return (
      <div className='b-directory'>
        <h1>{this.props.title}</h1>
        <div className='b-directory__controls'>
          <a className='b-btn b-btn_primary' href='#'>{'+ Создать новый'}</a>
        </div>
        <table className='b-directory__table'>
          <thead>
            <tr>
              {this.props.fields.map(createHeaderCell)}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(createItemRow)}
          </tbody>
        </table>
        <div className='b-directory__filter'>
          <div className='b-directory__filter-header'>{'Фильтр'}</div>
          <div className='b-directory__filter-body'>
            <form id='b-directory__filter-form'>
              <input
                id='b-directory__filter-field'
                placeholder='Поиск'
                ref='filterInput'
                type='text'
                onChange={this.handleFilter}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default Directory;
