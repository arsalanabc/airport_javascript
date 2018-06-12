describe('Airport', function() {
  it ('confirms the plane is no longer at the airport', function () {
    plane = new Plane();
    airport = new Airport();
    airport.lands(plane);
    expect(airport.planes).toContain(plane);
    airport.takesOff(plane);
    expect(airport.planes).not.toContain(plane);
  });
});
