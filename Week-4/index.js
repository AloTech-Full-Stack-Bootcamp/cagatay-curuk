import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    // Push the item that comes with foreach to array
    this.series.push(serie);
    //(If a serie has been watched) {
    if (serie.isWatched) {
      // Increase the count of watched series
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if undefined.
      if (!this.lastSerie) {
        this.lastSerie = serie;
      } else {
        // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
        this.last = new Date(this.lastSerie.finishedDate);
        this.current = new Date(serie.finishedDate);
        if (this.current > this.last) {
          this.lastSerie = serie;
        }
      }
    }
    // If a serie hasn't been watched:
    else {
      // Check if we have a "currentSerie" property. Set if undefined
      if (!this.currentSerie) {
        this.currentSerie = serie;
      }
      // Check the nextSerie prop. Set if undefined
      else if (!this.nextSerie) {
        this.nextSerie = serie;
      }
    }
    // If the movie has been watched, Subtract the number of movies watched from the length of the series.
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.forEach((serie) => {
      //Use the .add function to handle adding series, so we keep counts updated.
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    // Loop at the series array with foreach
    this.series.forEach((serie) => {
      // If it is current serie, We make the necessary parameter changes.
      if (serie === this.currentSerie) {
        serie.isWatched = true;
        serie.isCurrent = false;
        serie.finishedDate = new Date();
        this.lastSerie = serie;
        this.numberOfWatched += 1;
        this.numberOfUnWatched -= 1;
      }
      // We change current serie
      else if (serie === this.nextSerie) {
        this.isCurrent = true;
        this.currentSerie = serie;
      } else if (this.nextSerie === this.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          this.nextSerie = serie;
        }
      }
    });
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
