// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
import "regenerator-runtime/runtime";
import Handlebars from "handlebars";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import "jquery";
// import "popper.js";

const countryItem = document.querySelector("#countries_template").innerHTML;
let compiler = Handlebars.compile(countryItem);

// Import any additional modules you want to include below \/
const restCountries = "https://restcountries.eu/rest/v2/all";

// \/ All of your javascript should go here \/

document.addEventListener("DOMContentLoaded", () => {
  fetch(restCountries)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} ${res.statusText}`);
      }
    })
    .then(data => {
      let country = data;
      document.querySelector(".wrapper").innerHTML = compiler({ country });
      console.log("Content loaded!");
    })
    .catch(e => {
      console.log(e);
    });
});
