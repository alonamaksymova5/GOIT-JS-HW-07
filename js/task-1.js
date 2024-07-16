const listItems = document.querySelector("#categories");

const categoryList = listItems.querySelectorAll(".item");

console.log(`Number of categories:`, categoryList.length);

categoryList.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;

    const categoryElem = item.querySelectorAll("ul li").length;

    console.log(`Category: ${categoryName}.
                Elements: ${categoryElem}`);
});