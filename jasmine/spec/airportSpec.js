
describe('Airport', function() {
  it ('confirms the plane is no longer at the airport', function () {
    plane = new Plane();
    airport = new Airport();
    
    //airport.stormyWeather();

    airport.lands(plane);

    expect(airport._planes).toContain(plane); // illegal
    
    spyOn(airport,'stormyWeather').and.returnValue(false);

 console.log(airport);

    airport.takesOff(plane);
    expect(airport._planes).not.toContain(plane);
  });

  it ('no take offs in stormy weather', function () {
  	airport = new Airport();

  	 console.log(airport);
  	 spyOn(airport,'stormyWeather').and.returnValue(true);

   	//expect(airport.takesOff(new Plane)).toThrow(new Error("Stromy weather"));
   	expect(function(){airport.takesOff(new Plane);}).toThrow(new Error ("Stormy weather"));

   	//expect( function(){ throw new Error("Parsing is not possible") } ).toThrow(new Error("Parsing is not possible"));
  });


});
