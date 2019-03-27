import React from "react";
import { connect } from "react-redux"
import * as actions from "actions"

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = e => this.setState({ comment: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment)

    this.setState({ comment: ""});
  };
  componentDidMount(){
    this.props.setTitle('Luiz')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4> {this.props.title} </h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button> Submit a comment! </button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { title: state.title };
}

export default connect(mapStateToProps, actions)(CommentBox);
