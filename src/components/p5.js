import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import SketchSnowflakes from './SketchSnowflakes';

export default class App extends Component{

  render() {
    return <P5Wrapper sketch={SketchSnowflakes} />
  }
}