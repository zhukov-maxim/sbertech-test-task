import React from 'react';
import { render } from 'react-dom';
import Directory from '../components/Directory';

var outlet = document.getElementById('directory-outlet');

if (outlet !== null) {
  $.getJSON('json/getDirectory.json', function(json) {
    const fields = json.response.directory.fields;
    const items = json.response.directory.items;
    const title = json.response.directory.name;

    render(
      <Directory fields={fields} items={items} title={title}/>,
      outlet
    );
  });
}
