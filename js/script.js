// Question 1

let cat = {
    complain() {
        return ("Meow");
    }
};

console.log(cat.complain());

// Question 2

const heading = document.querySelector("h3");
heading.innerHTML = "Updated Heading";

// Question 3

heading.style.fontSize = "2em";

// Question 4

heading.classList.add("subheading");

// Question 5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";

// Question 7

function listCats(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

listCats(cats);

// Question 8

function createCats(cats) {

    let html = "";
    for (let i = 0; i < cats.length; i++) {
        var item = cats[i]
        if (item.age === undefined) {
            item.age = "Age unknown";
        }
        html = html + "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>" + "</div>";

    }
    return html;
}

const newHtml = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;


console.log(newHtml);

