console.log("It works 🚀");

const cups = 3;
console.log(`杯数:${cups}`);

const logs = ["家系", "塩", "醤油"];
const list = logs.map(style => `<li>${style}</li>`);
console.log(list);

import {add} from "./util.js";
console.log(add(10,20));