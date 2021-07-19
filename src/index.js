import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "<div>";

// trim string and wrap in div element

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>$${str}</div>`;
const wrap = (type, str) => `<span>$${str}</span>`;
const toLowerCase = (str) => str.toLowerCase;

const transform = pipe(trim, toLowerCase, wrapInDiv);
transform(input);
