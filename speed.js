function calculateDemeritPoints() {
    const speed = parseInt(prompt("Enter the speed of the car (km/s): "));
    let points = 0;
  
    if (speed > 70) {
      points = Math.floor((speed - 70) / 5);
      if (points > 12) {
        alert("License suspended");
        points = 12;
      }
      alert("Points: " + points);
    } else {
      alert("Ok");
    }
  }
  
  calculateDemeritPoints(9);