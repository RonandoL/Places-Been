// Business Logic
function Place(city, country, year, note) {  // Constructor makes the properties of each place
  this.city = city;
  this.country = country;
  this.year = year;
  this.note = note;
}

Place.prototype.cityCountry = function() {  // Protype: makes the method > city, country
  return this.city + ", " + this.country;
}


// User Interface Logic
$(document).ready(function() {
  $("form.placesInput").submit(function(event) {
    var cityInput = $("input#city").val();
    var countryInput = $("input#country").val();
    var yearInput = $("input#year").val();
    var notesInput = $("input#notes").val();

    var newPlace = new Place(cityInput, countryInput, yearInput, notesInput);

    $("ul#place").append("<li><span class='place'>" + newPlace.cityCountry() + "<br>" + yearInput + "<br>" + notesInput + "</span></li>");

    event.preventDefault();
  });

});
