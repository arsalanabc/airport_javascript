function Airport() {
  this._planes = [];
};

Airport.prototype.lands = function(plane) {
	this._planes.push(plane);
};



Airport.prototype.stormyWeather = function(){
 	
 	if (Math.floor(Math.random()*10) > 7)
 		{return true;}
 	else {return false;}
 

};


Airport.prototype.takesOff = function(plane) {

	if (this.stormyWeather()){
		throw new Error("Stormy weather");
	}
	this._planes.pop();
};


