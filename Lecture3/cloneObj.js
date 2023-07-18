//Object clonning
//Obj Ref, Obj Clonning assign(), {... x},json

const obj1 = {
    person : 'Pawat',
    weight : 100
}

const obj2 = {... obj1};
obj2.weight = 75;
console.log(obj1);
console.log(obj2);