export default class Clock {
  constructor(min, sec, listComponent, id) {
    this.min = min;
    this.sec = sec;
    this.listComponent = listComponent;
    this.id = id;

    this.codeHTML();
    this.printTime();
  }

  printTime() {
     let minute = "";
    let second = "";

    if (this.min < 10) minute = "0" + this.min;
    else minute = this.min;

    if (this.sec < 10) second = "0" + this.sec;
    else second = this.sec;

    let li_span = document.querySelector("#"+this.id+" span");
    li_span.innerHTML = minute + ":" + second; 
    this.listComponent.appendChild(li_span);
  }

  codeHTML = () => {
   
    let li = document.createElement("li");
    li.id = this.id;

    let span = document.createElement("span");

    let buttonStart = document.createElement("button");
    buttonStart.innerHTML = "Start";
    buttonStart.addEventListener("click", this.start.bind(this));

    let buttonStop = document.createElement("button");
    buttonStop.innerHTML = "Stop";
    buttonStop.addEventListener("click", this.stop.bind(this));

    // add in li tag
    li.appendChild(span);
    li.appendChild(buttonStart);
    li.appendChild(buttonStop);

    // add item in ol (list)
    this.listComponent.appendChild(li);
  };

  updateTimeBySec() {
    this.sec++;
    if (this.sec == 60) {
      this.sec = 0;
      this.min++;
    }
  }

  start() {
    this.timer = setInterval(() => {
      this.updateTimeBySec();
      this.printTime();
    }, 1000);
  }

  stop() {
    clearInterval(this.timer);
  }
}
