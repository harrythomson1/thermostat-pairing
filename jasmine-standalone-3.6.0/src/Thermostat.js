class Thermostat {


  constructor(temp=20, powerSaver=false) {
    this.temp = temp,
    this.powerSaver = powerSaver
  }

  down(decrease) {
    if (this.temp - decrease < 10) {
      throw new Error("Minimum temperature is 10 degrees!");
    }
    
    try {
      return this.temp -= decrease;
    } catch (e) {
      console.error(e);
    }

  }

  up(increase) {
    if (this.powerSaver == true) {
      if (this.temp + increase > 25) {
        throw new Error("Maximum temperature is 25 degrees for power saving mode!")
      }

      try {
        return this.temp += increase;
      } catch (e) {
        console.error(e);
      }
    }
    return this.temp += increase;
  }

  switch() {
    if (this.powerSaver === false) {
      this.powerSaver = true
    } else {
      this.powerSaver = false
    }
  }

  _checkMode() {

  }

}