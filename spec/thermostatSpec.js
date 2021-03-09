describe('ThermoStat', function() {
	beforeEach( function() {
		thermo = new ThermoStat();
	});
// Thermostat starts at 20 degrees
	
	describe('#viewTemp', function() {
		it('should show 20 degrees by default', function() {

			expect(thermo.viewTemp()).toBe(20);
		});
	});

	describe('#upTemp', function() {
		it('should increase the temperature by 1 degree', function() {

			thermo.upTemp();
			expect(thermo.viewTemp()).toBe(21);
		});
	});

	describe('#downTemp', function() {
		it('should decrease the temperature by 1 degree', function() {

			thermo.downTemp();
			expect(thermo.viewTemp()).toBe(19);
		});

		it('should not allow temperature to go below 10 degrees', function() {
			// for loop to repeat code until it reaches 10
			// expect an error message to appear

			var i ;
			for (i = 0; i < 10; i++) {
				thermo.downTemp();
			}
			expect(thermo.viewTemp()).toBe(10);
			// here is where I'll expect an error
			expect(thermo.downTemp()).toBe("Temperature can't go below 10")
		});
	});
});

