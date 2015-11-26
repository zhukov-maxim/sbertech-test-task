import React from 'react';

var Directories = React.createClass({
  displayName: 'Directories',

  propTypes: {
    items: React.PropTypes.arrayOf(React.PropTypes.object)
  },

  render: function() {
    const createItem = (item) => {
      return (
        <li className='b-directories__item' key={item.id}>
          <a href='#'>
            {item.name}
          </a>
        </li>
      );
    };

    return (
      <ul className='b-directories'>
        {this.props.items.map(createItem)}
      </ul>
    );
  }
});

export default Directories;
