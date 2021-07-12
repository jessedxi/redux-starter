let input = "  JavaScript  ";
let output = "<div>" + input.trim() + "<div>";

// trim string and wrap in div element

const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>$${str}</div>`;
const toLowerCase = (str) => str.toLowerCase;

const result = wrapInDiv(toLowerCase(trim(input)));
