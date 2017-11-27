let apiResponse = {"username": "baluragala", "url": "https://github.com/baluragala", "type1": "paid"};

/*let username = apiResponse.username;
let url = apiResponse.url;
let type = apiResponse.type;*/

let {username: name, url, type1 = 'N/A'} = apiResponse;

console.log(name, url, type1);


let [a, b, ...c] = [{name: 'zeo'}, 2, 3, 4, 5, 6];
console.log(a, b, c);