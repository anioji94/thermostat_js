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
	});
});

