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

			expect(thermo.downTemp(11)).toBe("Temperature can't go below 10")
		});
	});

	describe('#powersaving', function() {
		it('power-saving mode is on by default', function () {
			expect(thermo.powersaving).toBe(true)
		});

		it('power-saving mode can be turned off', function () {
			thermo.powersaving = false
			expect(thermo.powersaving).toBe(false)
		});

		it('while active, locks the max temp at 25 degrees', function() {
			expect(thermo.upTemp(6)).toBe("Powersaving is active. Temp locked at 25.")
		});

		it('locks the max temp at 32 degrees when not active', function() {
			thermo.powersaving = false
			expect(thermo.upTemp(13)).toBe("Max temp without Powersaving is 32.")
		});

	});

	describe('#reset', function() {
		it('resets the default temp to 20 degrees', function() {
			thermo.upTemp();
			thermo.reset();
			expect(thermo.temp).toBe(20);
		});
	});

// You can ask about the thermostat's current energy usage:
// < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.
	describe("#current_usage", function() {
		  it("returns current_usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage", function() {
				// temp is 20
				expect(thermo.current_usage()).toBe("Medium-Usage")
				thermo.powersaving = false;
				// take temp to 26
				thermo.upTemp(6);
				expect(thermo.current_usage()).toBe("High-Usage")
				// take temp to 17
				thermo.downTemp(9);
				expect(thermo.current_usage()).toBe("Low-Usage")
			});
	});





});
