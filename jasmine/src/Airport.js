function Airport() {
  this.planes = [];
};

Airport.prototype.lands = function(plane) {
	this.planes.push(plane);
};

Airport.prototype.takesOff = function(plane) {
	this.planes.pop();
};
