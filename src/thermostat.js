class ThermoStat {
	constructor() {
		this.temp = 20;
		//this.powersaving = true
	}

	viewTemp() {
		return this.temp;
	}

	upTemp(num = 1) {
		this.temp += num;
		// is power saving on? if so...
		// is power saving off
	}

	downTemp(num = 1) {
		if(this.temp - num > 10){
			this.temp -= num;
		} else {
				return "Temperature can't go below 10";
		}
	}

	//power-saving on/off method

}

// power-saving mode is on by default - something in
// our constrcutor method
//
//
