'use strict';

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

$.getJSON('json/getDirectories.json', function(json) {
  var directories = json.response.directories;

  ReactDOM.render(
    <Directories items = {directories}/>,
    document.getElementById('content')
  );
});
