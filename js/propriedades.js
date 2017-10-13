var Component = React.createClass({
    render: function () {
        return React.DOM.span(null, "My name is " + this.props.name);
    }
});

ReactDOM.render(
        React.createElement(Component, {
            name: "Bob",
        }),
        document.getElementById("app")
        );