"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const DesktopCommentsDisplay_1 = require("./DesktopCommentsDisplay");
const MobileCommentsDisplay_1 = require("./MobileCommentsDisplay");
function CommentDisplay({ id, score, username, date, content, replyingTo, avatar, }) {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 613;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ w: "100%" }, { children: width <= breakpoint ? ((0, jsx_runtime_1.jsx)(MobileCommentsDisplay_1.MobileCommentsDisplay, { id: id, score: score, username: username, date: date, content: content, replyingTo: replyingTo, avatar: avatar })) : ((0, jsx_runtime_1.jsx)(DesktopCommentsDisplay_1.DesktopCommentsDisplay, { id: id, score: score, username: username, date: date, content: content, replyingTo: replyingTo, avatar: avatar })) })));
}
exports.CommentDisplay = CommentDisplay;
