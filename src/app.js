/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/online-domain-logo.png";
import "./assets/img/4geeks.ico";

// lists
var pronoun = ["I", "She", "The", "We", "It"];
var adj = ["pink", "huge", "sweet", "smart"];
var noun = ["paper", "history", "time", "money"];
var result = "";

// function
window.onload = function() {
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        result += pronoun[i] + adj[j] + noun[k] + ".com" + "<br>";
        document.querySelector("div > p.alert").innerHTML = result;
        console.log(pronoun[i] + adj[j] + noun[k] + ".com");
      }
    }
  }
};
