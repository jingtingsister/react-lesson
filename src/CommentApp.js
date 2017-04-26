import React from "react"
import CommentInput from "./CommentInput.js"
import CommentList from "./CommentList.js"

class CommentApp extends React.Component {
    state = {
        comments:[]//初始化一个数组，来保存所有的评论数据，并且通过 props 把它传递给 CommentList
    }

    componentWillMount () {
        this._loadComments()
    }

    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }
//http://cythilya.blogspot.tw/2015/05/javascript-json-parse-stringify.html
    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }



    handleSubmitComment = (comment) => {
        if(!comment) return
        if(!comment.username) return alert('請輸入用戶名')
        if(!comment.content) return alert('請輸入評論內容')
        //const comments = this.state.comments
        this.state.comments.push(comment)//comments.push(comment)
        this.setState({//this.setState({ comments })
            comments: this.state.comments
        })
        this._saveComments(this.state.comments)
    }

    handleDeleteComment = (index) => {
        console.log(index)
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })//重新渲染整個評論列表
        this._saveComments(comments)//把最新的評論列表數據更新到localStorage
    }

    render () {
        return (
            <div className="wrapper">
                <CommentInput
                 onSubmit={this.handleSubmitComment} />
             <CommentList
                 comments={this.state.comments}
                 onDeleteComment={this.handleDeleteComment} />
            </div>
        )
    }
}

export default CommentApp
