"use strict";

var React = require('react');

var Home  = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1> Hello from first reach component </h1>
                <p> Test test test </p>
            </div>
        );
    }
});

module.exports = Home;