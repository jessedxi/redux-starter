import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "<div>";

// trim string and wrap in div element

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>$${str}</div>`;
const toLowerCase = (str) => str.toLowerCase;

compose(wrapInDiv, toLowerCase, trim);

const result = wrapInDiv(toLowerCase(trim(input)));
