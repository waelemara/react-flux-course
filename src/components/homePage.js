"use strict";

var React = require('react');
var Link = require('react-router').Link;

var Home  = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1> Hello from first reach component </h1>
                <p> Test test test </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
});

module.exports = Home;