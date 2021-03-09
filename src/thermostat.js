class ThermoStat {
	constructor() {
		this.temp = 20;
	}

	viewTemp() {
		return this.temp;
	}

	upTemp() {
		this.temp += 1;
	}

	downTemp() {
		if(this.temp > 10){
			this.temp -= 1;
		} else {
				return "Temperature can't go below 10";
		}
	}
}