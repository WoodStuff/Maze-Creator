class Level {
	constructor(name, spawnx, spawny) {
		this.name = name;
		this.spawn = {
			x: spawnx,
			y: spawny,
		}
		this.walls = [];
		this.goal = [
			{}
		]
	}
}