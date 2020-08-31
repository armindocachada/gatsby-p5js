# Gatsby + p5.js


## Install latest node.js for Mac
Follow this link for steps on how to install the latest version of Nodejs
https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/

## Install Gatsby client
<pre>sudo npm install -g gatsby-cli</pre>

## Create Gatsby project
Create new gatsby project using example app:
<pre>
gatsby new gatsby-site https://github.com/gatsbyjs/gatsby-starter-hello-world
</pre>

## Start gatsby website in development mode

gatsby develop to run website in local development web server
<pre>gatsby develop</pre>

<pre>
npm install react-p5-wrapper - save
npm install @loadable/component
npm install p5
</pre>

## Created files in components directory

### components/sketchSnowflakes.js

<pre>
export default function SketchSnowflakes(p5) {
    let snowflakes = []; // array to hold snowflake objects

     p5.setup = () =>  {
      p5.createCanvas(400, 600);
      p5.fill(240);
      p5.noStroke();
    }

    p5.draw = () => {
      p5.background('brown');
      let t = p5.frameCount / 60; // update time

      // create a random number of snowflakes each frame
      for (let i = 0; i < p5.random(5); i++) {
        snowflakes.push(new snowflake()); // append snowflake object
      }

      // loop through snowflakes with a for..of loop
      for (let flake of snowflakes) {
        flake.update(t); // update snowflake position
        flake.display(); // draw snowflake
      }
      
    }

    // snowflake class
    function snowflake() {

      // initialize coordinates
      this.posX = 0;
      this.posY = p5.random(-50, 0);
      this.initialangle = p5.random(0, 2 * p5.PI);
      this.size = p5.random(2, 5);

      // radius of snowflake spiral
      // chosen so the snowflakes are uniformly spread out in area
      this.radius = p5.sqrt(p5.random(p5.pow(p5.width / 2, 2)));
      this.update = function(time) {
        // x position follows a circle
        let w = 0.6; // angular speed
        let angle = w * time + this.initialangle;
        this.posX = p5.width / 2 + this.radius * p5.sin(angle);

        // different size snowflakes fall at slightly different y speeds
        this.posY += p5.pow(this.size, 0.5);

        // delete snowflake if past end of screen
        if (this.posY > p5.height) {
          let index = snowflakes.indexOf(this);
          snowflakes.splice(index, 1);
        }
      };

      this.display = function() {
        p5.ellipse(this.posX, this.posY, this.size);
      };
    }
  }
</pre>

### components/p5.js
<pre>
import React, { Component } from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import SketchSnowflakes from './SketchSnowflakes';

export default class App extends Component{

  render() {
    return <P5Wrapper sketch={SketchSnowflakes} />
  }
</pre>
### components/loadable.js
<pre>
import Loadable from "@loadable/component";

export const loadableP5 = Loadable(() => import('react-p5-wrapper'));
</pre>
