"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Button(props) {
    return (0, jsx_runtime_1.jsx)("button", { onClick: () => props.onClick(), children: props.children });
}
exports.Button = Button;
