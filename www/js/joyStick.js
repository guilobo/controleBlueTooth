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
    updateScreenText('stop');
    resetSpeedIndicators();
    sendCommand('stop', 40);
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
    updateScreenText('stop');
    resetSpeedIndicators();
    sendCommand('stop', 40);
  },
});

function turnCar(speedIncrease) {
  const minSpeed = 100;
  const maxSpeed = 255;
  const speedRange = maxSpeed - minSpeed;
  const direction = getLeftRightDirection(speedIncrease);
  const finalSpeed = 100 + (speedRange * Math.abs(speedIncrease));
  updateScreenText(direction);
  addSpeedIndicators(Math.abs(speedIncrease));
  sendCommand(direction, finalSpeed);
}

function moveCar(speedIncrease) {
  const minSpeed = 100;
  const maxSpeed = 255;
  const speedRange = maxSpeed - minSpeed;
  const direction = getForwardsBackDirection(speedIncrease);
  const finalSpeed = 100 + (speedRange * Math.abs(speedIncrease));
  console.log("Y"+finalSpeed)
  console.log(finalSpeed);
  console.log(direction);
  updateScreenText(direction);
  addSpeedIndicators(Math.abs(speedIncrease));
  sendCommand(direction, finalSpeed);
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
    console.log('stopped');
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

function sendCommand(direction, speed) {
  console.log('sendCommand');
  console.log(direction);
  console.log(speed);
  var moveCommand = 'moveMotor,' + direction + ',' + speed;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.particle.io/v1/devices/12345/triggerFunction",
    "method": "POST",
    "headers": {
      "Authorization": "..",
      "Content-Type": "application/x-www-form-urlencoded",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Host": "api.particle.io",
      "accept-encoding": "gzip, deflate",
      "content-length": "27",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    },
    "data": {
      "args": moveCommand
    }
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}

// const onDragUpDown = function(e) {
//   console.log(this.x, this.y);
// };
