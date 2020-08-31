export default function Sketch(p5) {
    let canvas;


    p5.setup = () => {
      let d = 70;
      let p1 = d;
      let p2 = p1 + d;
      let p3 = p2 + d;
      let p4 = p3 + d;

      // Sets the screen to be 720 pixels wide and 400 pixels high
      p5.createCanvas(720, 400);
      p5.background(0);
      p5.noSmooth();

      p5.translate(140, 0);

      // Draw gray box
      p5.stroke(153);
      p5.line(p3, p3, p2, p3);
      p5.line(p2, p3, p2, p2);
      p5.line(p2, p2, p3, p2);
      p5.line(p3, p2, p3, p3);

      // Draw white points
      p5.stroke(255);
      p5.point(p1, p1);
      p5.point(p1, p3);
      p5.point(p2, p4);

      p5.point(p3, p1);
      p5.point(p4, p2);
      p5.point(p4, p4);
    }




  }