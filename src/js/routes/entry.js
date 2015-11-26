import React from 'react';
import { render } from 'react-dom';
import Entry from '../components/Entry';

const outlet = document.getElementById('entry-outlet');

if (outlet !== null) {
  $.getJSON('json/getEntry.json', function(json) {
    const directory = json.response.entry.directory.name;
    const items = json.response.entry.items;
    const title = json.response.entry.name;

    render(
      <Entry directory={directory} items={items} title={title}/>,
      outlet
    );
  });
}
