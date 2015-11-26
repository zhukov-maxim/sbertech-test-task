import React from 'react';
import { render } from 'react-dom';
import Directories from '../components/Directories';

var outlet = document.getElementById('directories-outlet');

if (outlet !== null) {
  $.getJSON('json/getDirectories.json', function(json) {
    var directories = json.response.directories;

    render(
      <Directories items = {directories}/>,
      outlet
    );
  });
}
