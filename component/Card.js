var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CardContent = (function (_super) {
    __extends(CardContent, _super);
    function CardContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardContent.prototype.render = function () {
        return (React.createElement("div", { className: "card-content" }, "this.props.children"));
    };
    return CardContent;
}(React.Component));
var CardFooter = (function (_super) {
    __extends(CardFooter, _super);
    function CardFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardFooter.prototype.render = function () {
        return (React.createElement("footer", { className: "card-footer" }, "this.props.children"));
    };
    return CardFooter;
}(React.Component));
var CardHeaderIcon = (function (_super) {
    __extends(CardHeaderIcon, _super);
    function CardHeaderIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderIcon.prototype.render = function () {
        return (React.createElement("a", { className: "card-header-icon" }, "this.props.children"));
    };
    return CardHeaderIcon;
}(React.Component));
var CardHeaderTitle = (function (_super) {
    __extends(CardHeaderTitle, _super);
    function CardHeaderTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeaderTitle.prototype.render = function () {
        return (React.createElement("p", { className: "card-header-title" }, "this.props.children"));
    };
    return CardHeaderTitle;
}(React.Component));
var CardHeader = (function (_super) {
    __extends(CardHeader, _super);
    function CardHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardHeader.prototype.render = function () {
        return (React.createElement("header", { className: "card-header" }, "this.props.children"));
    };
    CardHeader.Icon = CardHeaderIcon;
    CardHeader.Title = CardHeaderTitle;
    return CardHeader;
}(React.Component));
var CardImage = (function (_super) {
    __extends(CardImage, _super);
    function CardImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardImage.prototype.render = function () {
        return (React.createElement("div", { className: "card-image" }, "this.props.children"));
    };
    return CardImage;
}(React.Component));
var Card = (function (_super) {
    __extends(Card, _super);
    function Card() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Card.prototype.render = function () {
        return (React.createElement("div", { className: "card" }, "this.props.children"));
    };
    Card.Content = CardContent;
    Card.Footer = CardFooter;
    Card.Header = CardHeader;
    Card.Image = CardImage;
    return Card;
}(React.Component));
exports.default = Card;