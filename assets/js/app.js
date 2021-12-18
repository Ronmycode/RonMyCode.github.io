const img = document.querySelector("#img-win");
const letters = document.querySelector('#letters');

const tl = new TimelineMax();

tl.fromTo(
    img,
    1.5,
    {opacity: 0, y:-100},
    {opacity: 1, y:0},
).fromTo(
    letters,
    1.5,
    {opacity: 0, y:100},
    {opacity: 1, y:0},
    "-=1.5"
);