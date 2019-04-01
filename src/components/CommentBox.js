import React from "react";
import { connect } from "react-redux"
import * as actions from "actions"

class CommentBox extends React.Component {
  state = { comment: "" };

  componentDidMount(){
    this.shouldNavigateAway()
  }

  componentDidUpdate(){
    this.shouldNavigateAway()
  }

  shouldNavigateAway(){
    if(!this.props.auth){
      console.log(this.props.auth)
       this.props.history.push('/')
    }
  }

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

function mapStateToProps(state) {
  return { title: state.title,
            auth: state.auth };
}

export default connect(mapStateToProps, actions)(CommentBox);
