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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingComment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const image_juliusomo_png_1 = __importDefault(require("../../../images/avatars/image-juliusomo.png"));
const context_1 = require("../../../context");
const formatDistanceToNow_1 = __importDefault(require("date-fns/formatDistanceToNow"));
const DesktopPostingComment_1 = require("./DesktopPostingComment");
const MobilePostingComment_1 = require("./MobilePostingComment");
function PostingComment({ defaultValue, replyMode, }) {
    const { replyToUsername } = React.useContext(context_1.ReplyToUsernameContext);
    const [content, setContent] = React.useState("");
    const { comments, setComments } = React.useContext(context_1.CommentsContext);
    const { replyID, setReplyID } = React.useContext(context_1.ReplyContext);
    const [lengthError, setLengthError] = React.useState(false);
    const ref = React.useRef("");
    function repliesLength(comments) {
        return comments.map((comment) => {
            return comment.replies.length;
        });
    }
    const commentsIdSetter = comments &&
        comments.length +
            1 +
            repliesLength(comments).reduce(function (previousValue, currentValue) {
                return previousValue + currentValue;
            }, 0);
    const addedComment = {
        id: commentsIdSetter,
        content: content,
        createdAt: (0, formatDistanceToNow_1.default)(new Date()),
        replyingTo: replyToUsername,
        score: 0,
        user: {
            image: {
                png: "image-juliusomo.png",
                webp: "./images/avatars/image-juliusomo.webp",
            },
            username: "juliusomo",
        },
        replies: [],
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        function addReplyToReply() {
            const replyToReplyId = comments
                .map((singleComment, commentIndex) => {
                return singleComment.replies
                    .map((reply, replyIndex) => {
                    if (reply.id === replyID) {
                        return [commentIndex, replyIndex];
                    }
                })
                    .filter((element) => {
                    return element !== undefined;
                });
            })
                .flat(3);
            comments[replyToReplyId[0]].replies.splice(replyToReplyId[1] + 1, 0, addedComment);
            return [...comments];
        }
        !content || content.length < 5
            ? setLengthError(true)
            : setComments((comments) => {
                if (replyMode === false) {
                    return [...comments, addedComment];
                }
                if (comments.find((singleComment) => singleComment.id === replyID) !== undefined) {
                    return comments.map((singleComment) => {
                        if (singleComment.id === replyID) {
                            return Object.assign(Object.assign({}, singleComment), { replies: singleComment.replies.concat(addedComment) });
                        }
                        return singleComment;
                    });
                }
                else {
                    return addReplyToReply();
                }
            });
        if (content.length >= 5) {
            setLengthError(false);
            setContent("");
            ref.current.value = "";
        }
        else {
            setLengthError(true);
        }
        if (replyMode === true && content.length >= 5) {
            setReplyID(0);
        }
        if (replyMode === true && content.length >= 5) {
        }
    };
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 613;
    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    }, []);
    return ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: handleSubmit }, { children: width <= breakpoint ? ((0, jsx_runtime_1.jsx)(MobilePostingComment_1.MobilePostingComment, { avatar: image_juliusomo_png_1.default, lengthError: lengthError, ref: ref, replyToUsername: replyToUsername, defaultValue: defaultValue, replyMode: replyMode, setContent: setContent })) : ((0, jsx_runtime_1.jsx)(DesktopPostingComment_1.DesktopPostingComment, { avatar: image_juliusomo_png_1.default, lengthError: lengthError, ref: ref, replyToUsername: replyToUsername, defaultValue: defaultValue, replyMode: replyMode, setContent: setContent })) })));
}
exports.PostingComment = PostingComment;
