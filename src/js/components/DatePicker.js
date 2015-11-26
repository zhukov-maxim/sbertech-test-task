import React from 'react';
import { findDOMNode } from 'react-dom';

var DatePicker = React.createClass({
  displayName: 'DatePicker',

  componentDidMount: function() {
    this._initDatePicker();
  },

  componentWillReceiveProps: function(props) {
    this._destroyDatePicker();
  },

  componentDidUpdate: function() {
    this._initDatePicker();
  },

  componentWillUnmount: function() {
    this._destroyDatePicker();
  },

  _initDatePicker: function() {
    var element = findDOMNode(this);

    $(element).datepicker({
      showOn: 'button',
      buttonText: '',
      dateFormat: 'dd.mm.yy'
    });
  },

  _destroyDatePicker: function() {
    var element = this.getDOMNode();

    $(element).datepicker('destroy');
  },

  render: function() {
    return <input type='text' {...this.props}/>;
  }
});

export default DatePicker;
