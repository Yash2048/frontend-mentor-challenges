
const res = await fetch('data.json');
const data = await res.json();
console.log(data);
const category = document.getElementsByClassName('category-name');
const score = document.getElementsByClassName('ind-score');
const icon = document.getElementsByClassName('icon');
data.map((item, index) => {
    category[index].innerHTML = item.category;
    score[index].innerHTML = item.score;
    icon[index].src = item.icon;
})

