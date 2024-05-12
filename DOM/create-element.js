function addLanguage(langName){
    const li = document.createElement('li')
    li.innerHTML=`${langName}`
    document.querySelector('.language').appendChild(li)
}
addLanguage("python");
function addOtiLanguage(langName){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChilde(li)
}
addOtiLanguage("typeScript")