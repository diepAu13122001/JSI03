class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }

  getCreated = () => {
    console.log(this.created);
  };
}

let rabbit = new Rabbit("Lucky");
rabbit.getCreated();

// Bai 2:
class Clock {
  constructor(template) {
    this.template = template;
  }

  render() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // add 0 for num < 10
    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    return output;
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    console.log(this.render());
    this.timer = setInterval(() => console.log(this.render()), 1000);
  }
}

//  run clock
let clock1 = new Clock("h:m:s");
clock1.render();
clock1.start();
clock1.stop();

class ExtendedClock extends Clock {
  constructor(template) {
    super(template);
  }

  ticks = () => {
    let date = new Date();
    let milis = date.getMilliseconds();

    let output = this.render().replace('ml', milis);
    console.log(output);
  }

  // override
  start () {
    this.ticks();
    this.timer = setInterval(()=> this.ticks(), 1);
  }
}

let clock2 = new ExtendedClock("h:m:s:ml");
clock2.start();
clock2.stop();
