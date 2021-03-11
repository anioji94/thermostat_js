class ThermoStat {
	constructor() {
		this.temp = 20;
		this.powersaving = true;
	}

	current_usage() {
		if(this.temp < 18) {
			return "Low-Usage";
		} else if (this.temp <= 25) {
			return "Medium-Usage";
		} else if (this.temp > 25){
			return "High-Usage";
		}
	}

	viewTemp() {
		return this.temp;
	}

	upTemp(num = 1) {
		if (this.powersaving === true && this.temp + num > 25) {
			return "Powersaving is active. Temp locked at 25.";
		} else if (this.powersaving === false && this.temp + num > 32) {
			return "Max temp without Powersaving is 32.";
		} else {
				this.temp += num;
		}
	}

	downTemp(num = 1) {
		if(this.temp - num >= 10){
			this.temp -= num;
		} else {
				return "Temperature can't go below 10";
		}
	}

	reset() {
		this.temp = 20;
	}

	//power-saving on/off method

}

// power-saving mode is on by default - something in
// our constrcutor method
//
//
