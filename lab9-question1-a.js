function Clock({ template }) {

    let timer;
    this.ticks=0; 
    var self = this;
      

    function render() {

      if(self.ticks >=10) {
        self.stop();

      }
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
        self.ticks++;
     

    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

