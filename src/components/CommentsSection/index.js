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
exports.CommentSection = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const CommentBox_1 = require("./CommentBox");
const PostingComment_1 = require("./PostingComment");
const context_1 = require("../../context");
const react_loader_spinner_1 = require("react-loader-spinner");
function CommentSection() {
    const { comments } = React.useContext(context_1.CommentsContext);
    return ((0, jsx_runtime_1.jsx)(react_1.Box, { children: comments.length < 1 ? ((0, jsx_runtime_1.jsxs)(react_1.Box, Object.assign({ display: "flex", flexDir: "column", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(react_loader_spinner_1.MutatingDots, { height: "100", width: "100", color: "#5457B6", secondaryColor: "#5457B6", radius: "12.5", ariaLabel: "mutating-dots-loading", wrapperStyle: {}, wrapperClass: "", visible: true }), (0, jsx_runtime_1.jsx)(react_1.Text, Object.assign({ textTransform: "uppercase", color: "#5457B6" }, { children: "Loading" }))] }))) : ((0, jsx_runtime_1.jsxs)(react_1.Box, { children: [(0, jsx_runtime_1.jsx)(CommentBox_1.CommentBox, {}), (0, jsx_runtime_1.jsx)(PostingComment_1.PostingComment, { defaultValue: "", replyMode: false })] })) }));
}
exports.CommentSection = CommentSection;
