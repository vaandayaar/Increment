let a = document.getElementById("man");
let b = document.querySelector(".game");
let c = document.getElementById("sam");
let d = document.getElementById("mam");
let count = 0;

b.addEventListener("click", function() {
    count += 1
    a.textContent = count
})

c.addEventListener("click", function() {
    count = count - 1
    a.textContent = count
})

d.addEventListener("click", function() {
    count = 0
    a.textContent = count;
})