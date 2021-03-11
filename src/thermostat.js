class ThermoStat {
	constructor(temp = 20, powersaving = true, psmaxTemp = 25, maxTemp = 32, minTemp = 10) {
		this.temp = temp;
		this.initialTemp = temp;
		this.powersaving = powersaving;
		this.psmaxTemp = psmaxTemp;
		this.maxTemp = maxTemp;
		this.minTemp = minTemp
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
		if (this.powersaving === true && this.temp + num > this.psmaxTemp) {
			return `Powersaving is active. Temp locked at ${this.psmaxTemp}.`;
		} else if (this.powersaving === false && this.temp + num > this.maxTemp) {
			return `Max temp without Powersaving is ${this.maxTemp}.`;
		} else {
				this.temp += num;
		}
	}

	downTemp(num = 1) {
		if(this.temp - num >= this.minTemp){
			this.temp -= num;
		} else {
				return `Temperature can't go below ${this.minTemp}`;
		}
	}

	reset() {
		this.temp = this.initialTemp;
	}

	//power-saving on/off method

}

// power-saving mode is on by default - something in
// our constrcutor method
//
//
