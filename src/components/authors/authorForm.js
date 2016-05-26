"use strict";
var React = require('react');
var InputText = require('../common/textInput');

var AuthorForm = React.createClass({
    render: function () {

        return (
            <form>
                <h1>Manage Author</h1>

                <InputText
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}/>

                <br />

                <InputText
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}/>
                    
                <br />

                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        );
    }
});


module.exports = AuthorForm;