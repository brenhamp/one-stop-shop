document.getElementById('sortAlphabet').addEventListener('click', function () {
    var ul = document.getElementById("myList");
    Array.from(ul.getElementsByTagName("li"))
    .sort((a,b) => a.textContent.localeCompare(b.textContent))
    .forEach(li => ul.appendChild(li))

});

document.getElementById('sortReverseAlphabet').addEventListener('click', function () {
    var ul = document.getElementById("myList");
    Array.from(ul.getElementsByTagName("li"))
    .sort((a,b) => b.textContent.localeCompare(a.textContent))
    .forEach(li => ul.appendChild(li))
});

document.getElementById('sortPriceHighLow').addEventListener('click', function () {
    var ul = document.getElementById("myList");
    Array.from(ul.getElementsByTagName("li"))
    .sort((a,b) => b.value - a.value)
    .forEach(li => ul.appendChild(li))
});

document.getElementById('sortPriceLowHigh').addEventListener('click', function () {
    var ul = document.getElementById("myList");
    Array.from(ul.getElementsByTagName("li"))
    .sort((a,b) => a.value - b.value)
    .forEach(li => ul.appendChild(li))
});