let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let form = document.getElementById("form-js");

let input = document.getElementById("input-js");

let error_text = document.getElementById("error-text");

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let val = input.value;

    if (pattern.test(val)) {
        add(error_text, "hidden");
        remove(input, "red--border");
        remove(input, "error--icon");
    }
    else {
        remove(error_text, "hidden");
        add(input, "red--border");
        add(input, "error--icon");
    }
})