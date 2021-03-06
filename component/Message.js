Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var MessageBody = (function (_super) {
    tslib_1.__extends(MessageBody, _super);
    function MessageBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBody.prototype.render = function () {
        return (React.createElement("div", { className: "message-body" }, this.props.children));
    };
    return MessageBody;
}(React.Component));
var MessageHeader = (function (_super) {
    tslib_1.__extends(MessageHeader, _super);
    function MessageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageHeader.prototype.render = function () {
        return (React.createElement("div", { className: "message-header" }, this.props.children));
    };
    return MessageHeader;
}(React.Component));
var Message = (function (_super) {
    tslib_1.__extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.render = function () {
        var _a = this.props, isDark = _a.isDark, isInvisible = _a.isInvisible, isMarginLess = _a.isMarginLess, isPaddingLess = _a.isPaddingLess, isSrOnly = _a.isSrOnly;
        var className = classnames("message", {
            "is-dark": isDark,
        }, modifiers_1.helpersPropsToClassnames({
            isInvisible: isInvisible,
            isMarginLess: isMarginLess,
            isPaddingLess: isPaddingLess,
            isSrOnly: isSrOnly,
        }), modifiers_1.mainColorsPropsToClassnames(this.props), modifiers_1.sizePropsToClassnames(this.props));
        return (React.createElement("article", { className: className }, this.props.children));
    };
    Message.Body = MessageBody;
    Message.Header = MessageHeader;
    return Message;
}(React.Component));
exports.default = Message;
