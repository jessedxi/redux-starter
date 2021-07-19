import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "<div>";

// trim string and wrap in div element

const trim = (str) => str.trim();
const wrap = (type, str) => `<${type}>$${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase;

const transform = pipe(trim, toLowerCase, wrap);
transform(input);
