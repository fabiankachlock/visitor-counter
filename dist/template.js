"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructResponse = void 0;
var constructResponse = function (count) { return "\n<svg width=\"150\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect fill=\"#444\" width=\"60\" height=\"22\"></rect>\n    <text fill=\"#fff\" x=\"4\" y=\"16\" font-family=\"sans-serif\" font-size=\"14px\" >Visitors</text>\n    <rect fill=\"#45b\" x=\"60\" width=\"90\" height=\"22\"></rect>\n    <text fill=\"#fff\" x=\"64\" y=\"16\" font-family=\"sans-serif\" font-size=\"14px\">" + count + "</text>\n</svg>"; };
exports.constructResponse = constructResponse;
