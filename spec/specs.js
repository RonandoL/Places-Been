describe('placesBeen', function(){
  it("will create an object that contains information about places we have been", function(){
    var testPlace = new Place("Paris", "France", 2010, "it was fun");
    expect(testPlace.city).to.equal("Paris");
    expect(testPlace.country).to.equal("France");
    expect(testPlace.year).to.equal(2010);
    expect(testPlace.note).to.equal("it was fun");
  });

  it("will put the city and country together with a method", function() {
    var testPlace = new Place("Paris", "France");
    expect(testPlace.cityCountry()).to.equal("Paris, France");
  });


});
