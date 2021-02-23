describe('Thermostat', function() {

  beforeEach (function() {
    thermostat = new Thermostat;
  });

  describe('Starting temperature', function() {
    it('is 20 degrees', function() {
      expect(thermostat.temp).toBe(20)
    })

  });

  describe('Modify temperature', function() {
    
    it('to increase', function() {
      thermostat.up(5);
      expect(thermostat.temp).toBe(25);
    });

    it('to decrease', function() {
      thermostat.down(5);
      expect(thermostat.temp).toBe(15);
    });

  });

  describe('Temperature limit', function() {
    
    it('minimium is 10', function() {
      thermostat.down(10);
      expect(function() { thermostat.down(3); } ).toThrow(new Error("Minimum temperature is 10 degrees!"))
    });

    it('maximum 25 degrees when power saving mode is on', function() {
      thermostat.switch()
      expect(function() { thermostat.up(6); } ).toThrow(new Error("Maximum temperature is 25 degrees for power saving mode!") )
    });

  });

});