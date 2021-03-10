class ThermoStat {
	constructor() {
		this.temp = 20;
	}

	viewTemp() {
		return this.temp;
	}

	upTemp(num = 1) {
		this.temp += num;
	}

	downTemp(num = 1) {
		if(this.temp - num > 10){
			this.temp -= num;
		} else {
				return "Temperature can't go below 10";
		}
	}
}