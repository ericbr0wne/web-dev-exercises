const jsonString = '{"name":"John", "age":30, "city":"New York"}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); 
console.log(jsonObject.city); 