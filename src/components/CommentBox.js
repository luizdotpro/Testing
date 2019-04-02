import React from "react";
import { connect } from "react-redux"
import * as actions from "actions"
import requireAuth from "./requireAuth"

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => this.setState({ comment: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment)

    this.setState({ comment: ""});

    this.props.setTitle('Luiz')
  };

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <h4> {this.props.title} </h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button> Submit a comment! </button>
        </div>
      </form>
      <button className="fetch-comments" onClick={this.props.fetchComments}> Fetch comments </button>
      </>
    );
  }
}


export default connect(null, actions)(requireAuth(CommentBox));
