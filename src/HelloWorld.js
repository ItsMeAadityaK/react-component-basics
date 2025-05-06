// src/HelloWorld.js
import React from 'react';

function HelloWorld({ name }) {
  return <h1>Hello, {name ? name : 'Focus Bear'}!</h1>;
}

export default HelloWorld;
