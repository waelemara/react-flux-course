"use strict";
var React = require('react');
var ReactRouter = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var Toastr = require('toastr');


var ManageAuthorPage = React.createClass({
    mixins:[
        ReactRouter.Navigation
    ],
    getInitialState: function () {
        
        return {
            author: { id: '', firstName: '', lastName: '' }
        };
    },
    componentWillMount:function(){
        var authorId = this.props.params.id;
        if(!!authorId){
            this.setState({author:AuthorApi.getAuthorById(authorId)});
        }  
    },
    setAuthorState: function (event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },
    saveAuthor:function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        Toastr.success('Author Saved');
        this.transitionTo('authors');
    },
    render: function () {
        return (
            <div>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}/>
            </div>
        );
    }
});

module.exports = ManageAuthorPage;