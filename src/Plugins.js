import React from 'react';
import { useScreenPlugin } from 'tinacms';

const DoggePlugin = {
  name: 'Sleepy-Dogge',
  Icon: () => (
    <span role="img" aria-label="dogge">
      🐶
    </span>
  ),
  layout: 'popup',
  Component() {
    return <img src="doggy.jpg" alt="dogge" style={divStyle} />;
  },
};
const CatPlugin = {
  name: 'Sleepy-Cat',
  Icon: () => (
    <span role="img" aria-label="cat">
      🐱
    </span>
  ),
  layout: 'popup',
  Component() {
    return <img src="cat.jpg" alt="cat" style={divStyle} />;
  },
};
const CrazyPlugin = {
  name: 'Crazy-Hamster',
  Icon: () => (
    <span role="img" aria-label="hamster">
      🐹
    </span>
  ),
  layout: 'popup',
  Component() {
    return <img src="crazy.jpg" alt="hamster" style={divStyle} />;
  },
};

const divStyle = {
  height: '500px',
  width: '500px',
  boxShadow: '1px 5px 9px gray',
};

function Plugins({ sleep }) {
  useScreenPlugin(DoggePlugin);
  useScreenPlugin(CatPlugin);
  useScreenPlugin(CrazyPlugin);

  return <div>{sleep}</div>;
}
export default Plugins;