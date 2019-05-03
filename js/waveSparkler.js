let counter = 0;

const animate = (elementId) => {
  const element = document.getElementById(elementId);
  element.className = '';
  className = selectClass();
  element.className = className;
};

// private

const selectClass = () => {
  const randomInt = randomInteger();
  const randomClass = classes()[randomInt];
  return randomClass;
};

const randomInteger = () => {
  return Math.floor(Math.random() * classes().length);
};

const classes = () => {
  return [
    "sparkle10",
    "sparkle30",
    "sparkle50",
  ];
};


(function loop() {
    var rand = Math.round(Math.random() * (800 - 50)) + 50;
    setTimeout(function() {
            animate("colors-1");
            animate("image-top");
            animate("wave-logo");
            counter += 1
            loop();
    }, rand);
}());
