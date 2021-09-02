function generator() {
    // lists
    var pronoun = ["I", "She", "The", "We", "It"];
    var adj = ["pink", "huge", "sweet", "smart"];
    var noun = ["paper", "history", "time", "money"];
    // generate name
    var name = pronoun[Math.floor(Math.random() * pronoun.length)] + adj[Math.floor(Math.random() * adj.length)] + noun[Math.floor(Math.random() * noun.length)];
    //alert(name);
    // remove name div if existing
    if (document.getElementById("name")) {
    document.getElementById("placeholder").removeChild(document.getElementById("name"));
    }
    // append to placeholder div
    var element = document.createElement("div");
    element.setAttribute("id", "name");
    element.appendChild(document.createTextNode(name));
    document.getElementById("placeholder").appendChild(element);
    }