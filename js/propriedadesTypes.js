var Component = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    render: function () {
        return React.DOM.span(null, "My name is " + this.props.name);
    }
});

ReactDOM.render(
        React.createElement(Component, {
//            name: "Bob"
            name: 123
        }),
        document.getElementById("app")
        );