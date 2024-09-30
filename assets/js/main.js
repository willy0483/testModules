import greet from "./Modules/defaultExports.js";
console.log("default exports ");
console.log(greet("Alice"));

import { square, double } from "./Modules/namedExports.js";

console.log("named exports");
console.log(square(5), double(10));
