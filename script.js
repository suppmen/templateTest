const template = document.querySelector("template").content;

console.log(template)

const aCopy = template.cloneNode(true);
console.log(aCopy)

aCopy.querySelector("h2").textContent = "Jonas the pig";
aCopy.querySelector("p").textContent = "hotpink";
aCopy.querySelector("p:nth-child(3)").textContent = "hello";

const whosYourDaddy = document.querySelector("main");
whosYourDaddy.appendChild(aCopy);
