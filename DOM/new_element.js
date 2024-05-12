const first = document.querySelector('.parent')
for(let i=0; i < first.children.length; i++){
    console.log(first.children[i].innerHTML);
}
first.children[3].style.color="green";
console.log(first.firstElementChild);
console.log(first.lastElementChild);