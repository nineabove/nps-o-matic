import React from 'react';
import ReactDOM from 'react-dom';
import NpsOMatic from 'components/nps_o_matic/nps_o_matic';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('nps-o-matic');
  const data = JSON.parse(node.getAttribute('data'));

  ReactDOM.render(
    <NpsOMatic {...data} />,
    node
  );
});
