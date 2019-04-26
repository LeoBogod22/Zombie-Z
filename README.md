## Zombie Apocalypse with Google Maps API


This is an application I made using the Google Maps JavaScript API. The user enters a location and the idea of the application is to calculate the odds of survival for someone if a zombie apocalypse broke out at the location instantly. The application takes the input given by the user and uses Places Library in Google Maps API to figure out what kind of resources would be available immediately in their vicinity. Using the results returned from Google Maps, the locationa and places are created in the database in the backend and odds of survival are given based on the resources available in the location as well as the population density at that location compared to an average US city (had a hard time finding that data globally so I had to focus on US cities using the 2010 US census data).

__Demo found at:__ [https://zombie-z.herokuapp.com///](https://zombie-z.herokuapp.com// "Zombie Apocalypse demo")



__Technologies used:__
* Node.js
* React.js
* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/) (geolocation, places library)
* [Data Science Toolkit API](http://www.datasciencetoolkit.org/) (find population density with coordinates)
* Bootstrap 
