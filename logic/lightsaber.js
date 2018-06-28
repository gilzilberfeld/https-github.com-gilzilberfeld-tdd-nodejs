class Lightsaber {
	constructor() {
		this.ison = false;
	}
	
	isOn() {
		return this.ison;
	}
	
	turnOn() {
		this.ison = true;
	}
}

module.exports = Lightsaber;	