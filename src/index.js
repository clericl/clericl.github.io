import * as radial from './radial';
import * as util from './util';

window.state = null;

radial.init();

const input = document.getElementById("seed");

input.addEventListener("submit", e => {

    e.preventDefault();
    const seed = util.find(document.getElementById("seed-input").value);

    if (seed) {
        radial.rerender(seed)
    } else {
        alert("don't have that word in the database :(")
    }

    document.getElementById("seed-input").value = "";
    
});