let numberBox = document.querySelector("#numberBox");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const reset = document.querySelector("#reset");

let my_number = 0;

plus.addEventListener('click', function () {
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number++;
    numberBox.value = my_number;
});

// This works the same as the function above
minus.addEventListener('click', () => {
    let existing_number = numberBox.value;
    my_number = existing_number;
    my_number--;
    numberBox.value = my_number;
});

reset.addEventListener('click', function () {
    my_number = 0;
    numberBox.value = my_number;
});