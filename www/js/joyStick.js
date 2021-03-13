window.scrollTo(0,1);

const speedIndicator = $('<div/>').addClass('speed-indicator');

Draggable.create(".left .joystick", {
  type:"y",
  bounds: ".left .movement-channel",
  edgeResistance: 0.65,
  onDrag: function () {
    if (this.y > 47) {
      TweenLite.set(this.target, {y:47});
      this.y = 47;
    } else if (this.y < -47) {
      TweenLite.set(this.target, {y:-47});
      this.y = -47;
    }
    console.log(-this.y/47);
    moveCar(-this.y/47);
  },
  onDragEnd: function() {
    TweenLite.set(this.target, {x:0, y:0});
    bluetoothSerial.write("Y0Y", function(){}, function(){});
    updateScreenText('stop');
    resetSpeedIndicators();
  },
});

Draggable.create(".right .joystick", {
  type:"x",
  bounds: ".right .movement-channel",
  edgeResistance: 0.65,
  onDrag: function () {
    if (this.x > 47) {
      TweenLite.set(this.target, {x:47});
      this.x = 47;
    } else if (this.x < -47) {
      TweenLite.set(this.target, {x:-47});
      this.x = -47;
    }
    turnCar(this.x/47);
  },
  onDragEnd: function() {
    TweenLite.set(this.target, {x:0, y:0});
    bluetoothSerial.write("X0X", function(){}, function(){});
    updateScreenText('stop');
    resetSpeedIndicators();
  },
});

function turnCar(speedIncrease) {
  const minSpeed = 0;
  const maxSpeed = 255;
  const speedRange = maxSpeed - minSpeed;
  const direction = getLeftRightDirection(speedIncrease);
  const finalSpeed = minSpeed + (speedRange * Math.abs(speedIncrease));
  updateScreenText(direction);
  addSpeedIndicators(Math.abs(speedIncrease));
  if (direction == "right")
  bluetoothSerial.write("X"+Math.round(finalSpeed)+"X", function(){}, function(){});
  if (direction == "left")
  bluetoothSerial.write("x"+Math.round(finalSpeed)+"x", function(){}, function(){});


}

function moveCar(speedIncrease) {
  const minSpeed = 0;
  const maxSpeed = 255;
  const speedRange = maxSpeed - minSpeed;
  const direction = getForwardsBackDirection(speedIncrease);
  const finalSpeed = minSpeed + (speedRange * Math.abs(speedIncrease));
  if (direction == "forwards")
  bluetoothSerial.write("Y"+Math.round(finalSpeed)+"Y", function(){}, function(){});
  if (direction == "backwards")
  bluetoothSerial.write("y"+Math.round(finalSpeed)+"y", function(){}, function(){});
  console.log(finalSpeed);
  console.log(direction);
  updateScreenText(direction);
  addSpeedIndicators(Math.abs(speedIncrease));
}

function getLeftRightDirection(speed) {
  let direction;
  if (speed > 0) {
    direction = 'right';
  } else if (speed < 0) {
    direction = 'left';
  } else {
    direction = 'stop';
  }
  return direction;
}

function getForwardsBackDirection(speed) {
  let direction;
  if (speed > 0) {
    direction = 'forwards';
  } else if (speed < 0) {
    direction = 'backwards';
  } else {
    direction = 'stop';
  }
  return direction;
}

function updateScreenText(direction) {
  if (direction !== 'stop') {
    $('.main-text').text('Moving ' + direction);
  } else {
    //console.log('stopped');
    $('.main-text').text('Stopped');
  }
}

function addSpeedIndicators(speedIncrease) {
  resetSpeedIndicators();
  if (speedIncrease > 0) {
    $('.speed-indicators').append(speedIndicator.clone());
  }
  if (speedIncrease > 0.2) {
    $('.speed-indicators').append(speedIndicator.clone());
  }
  if (speedIncrease > 0.4) {
    $('.speed-indicators').append(speedIndicator.clone());
  }
  if (speedIncrease > 0.6) {
    $('.speed-indicators').append(speedIndicator.clone());
  }
  if (speedIncrease > 0.8) {
    $('.speed-indicators').append(speedIndicator.clone());
  }
}

function resetSpeedIndicators() {
  $('.speed-indicators').empty();
}

// const onDragUpDown = function(e) {
//   console.log(this.x, this.y);
// };
