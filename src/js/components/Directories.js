import React from 'react';

const Directories = React.createClass({
  displayName: 'Directories',

  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  renderItem: function (item) {
    return (
      <li className='b-directories__item' key={item.id}>
        <a href='#'>
          {item.name}
        </a>
      </li>
    );
  },

  render: function() {
    return (
      <ul className='b-directories'>
        {this.props.items.map(this.renderItem)}
      </ul>
    );
  }
});

export default Directories;
