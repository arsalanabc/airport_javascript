describe ('Plane', function(){
	it ('plane can land', function (){
	plane = new Plane()
	expect(plane.land()).toEqual(true)

	});
});