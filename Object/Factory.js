/*
Factory Function:
-A factory function is a regular JavaScript function that returns an object.
-It is called a factory function because it creates and returns new instances of objects.
-Factory functions are useful for creating multiple instances of similar objects without the need for the new keyword.
-They often encapsulate the object creation process and can contain private variables and functions.
 */
//Ex:1

function createperson(name, age, city){
    return {
        name: name,
        age: age,
        city: city,
        greet(){
            console.log(`Hello my name is ${this.name} and i am ${this.age} years old i am from ${this.city}.`);
        }
    };
}
const person1 =createperson("mamoon", 22, "lucknow");
const person2 = createperson("shiakh",20, "lucknow" );

person1.greet();
person2.greet();

//Ex:2
 function Humanbing(head,eye,nose,ears,teeth,hand,fingers,){
    
    return {
    head:head,
    eye:eye,
    nose: nose,
    ears:ears,
    teeth:teeth,
    hand:hand,
    fingers:fingers,
    body(){
        console.log(`all human body similer to  head:${this.head}  ears:${this.ears}  hands:${this.hand} eyes:${this.eye}  nose:${this.nose} and ${this.teeth}:teeth ${this.fingers}:fingers `)
    }
 } 
}
const bodyparts = Humanbing(1, 2,1,2,32,2,10, );
bodyparts.body();