import React from 'react';
import DatePicker from './DatePicker';

const Entry = React.createClass({
  displayName: 'Entry',

  propTypes: {
    directory: React.PropTypes.string,
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    title: React.PropTypes.string
  },

  renderSelectOption: function (item) {
    return (
      <option
        defaultValue={item.id}
        key={item.id}
      >
        {item.name}
      </option>
    );
  },

  render: function() {
    const finder = (id) => (element) => element.id === id;

    const name = this.props.items.find(finder('name'));
    const weight = this.props.items.find(finder('weight'));
    const point = this.props.items.find(finder('point'));
    const endDate = this.props.items.find(finder('endDate'));
    const describe = this.props.items.find(finder('describe'));
    const units = this.props.items.find(finder('units'));

    const selectedUnit = units.values.find(function (element) {
      return element.selected === true;
    });

    return (
      <div className='b-entry'>
        <h1>{this.props.title}</h1>
        <form id='b-entry__form'>
          <div className='form-group'>
            <label htmlforHtml='b-entry__form-name'>
              {name.name}
            </label>
            <input
              defaultValue={name.value}
              disabled
              id='b-entry__form-name'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label forHtml='b-entry__form-weight'>
              {weight.name}
            </label>
            <input
              className='b-entry__input_short'
              defaultValue={weight.value}
              id='b-entry__form-weight'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label forHtml='b-entry__form-point'>
              {point.name}
            </label>
            <input
              className='b-entry__input_short'
              defaultValue={point.value}
              id='b-entry__form-point'
              type='text'
            />
          </div>
          <div className='form-group'>
            <label forHtml='b-entry__form-end-date'>
              {endDate.name}
            </label>
            <DatePicker
              className='b-entry__input_date'
              defaultValue={endDate.value}
              id='b-entry__form-end-date'
            />
          </div>
          <div className='form-group'>
            <label forHtml='b-entry__form-describe'>
              {describe.name}
            </label>
            <textarea
              defaultValue={describe.value}
              id='b-entry__form-describe'
            >
            </textarea>
          </div>
          <div className='form-group'>
            <label forHtml='b-entry__form-units'>
              {units.name}
            </label>
            <select
              defaultValue={selectedUnit.id}
              id='b-entry__form-units'
            >
              {units.values.map(this.renderSelectOption)}
            </select>
          </div>
          <div className='form-group b-entry__controls'>
            <button className='b-btn b-btn_primary' type='submit'>
              {'Сохранить'}
            </button>
            <button className='b-btn' type='reset'>
              {'Отменить изменения'}
            </button>
            <button className='b-btn' type='button'>
              {'Удалить'}
            </button>
          </div>
        </form>
      </div>
    );
  }
});

export default Entry;
