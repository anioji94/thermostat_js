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
		this.temp -= 1;
	}
}