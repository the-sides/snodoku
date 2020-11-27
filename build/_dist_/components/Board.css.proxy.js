
const code = ".board__row input:not(:last-child) {\n  border-right-width: 0px;\n}\n\n.board__row input:nth-child(3n):not(:last-child) {\n  border-right-width: 2px;\n}\n\n.board__rows:not(:last-child) input {\n  border-bottom-width: 0px;\n}\n\n.board__rows:nth-child(3n):not(:last-child) input {\n  border-bottom-width: 2px;\n}\n\ninput.square {\n  box-sizing: content-box;\n  width: 24px;\n  height: 24px;\n  padding: 7px;\n  font-size: 42px;\n  border: 1px solid #000;\n  outline-offset: -3px;\n  appearance: none;\n  -moz-appearance: textfield;\n}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);