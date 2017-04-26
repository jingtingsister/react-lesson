import React from "react"
import Comment from "./Comment.js"

class CommentList extends React.Component {
    static defaultProps = {
        comments:[]
    }

    // static propTypes = {
        // comments: PropTypes.array,
        // onDeleteComment: PropTypes.func
    // }

    handleDeleteComment = (index) => {
        if(this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }


    render () {


        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}
                        index={i}
                        onDeleteComment={this.handleDeleteComment}
                         />
                )}
            </div>
        )

     }
}

export default CommentList
