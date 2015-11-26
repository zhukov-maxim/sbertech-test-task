import React from 'react';
import { render } from 'react-dom';
import Directories from '../components/Directories';

const outlet = document.getElementById('directories-outlet');

if (outlet !== null) {
  $.getJSON('json/getDirectories.json', function(json) {
    const directories = json.response.directories;

    render(
      <Directories items = {directories}/>,
      outlet
    );
  });
}
