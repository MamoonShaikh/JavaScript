const arr = [22, 23, 43, 23, 44, 77];
for (const num of arr) {
    console.log(num);
}

const str = "MohdMamoonMasood";
for(const name of str){
    console.log(`Each char is ${name}`);
}
const object =
{
    ' name': "mamoon",
    'age': 23,
    'Profession': "student",
    'id': 7080
}
for (const key of Object.keys(object)) {
    console.log(`${key} : ${object[key]}`);
}
