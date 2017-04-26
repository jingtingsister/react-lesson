import React from "react"

class CommentInput extends React.Component {
    //static propTypes = {
    //    onSubmit: PropTypes.func
    //}


    state = {
        username: "",
        content: ""
    }

    componentWillMount () {
        this._loadUsername()
    }


    componentDidMount () {
        this.textarea.focus()
    }

    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }


    _saveUsername (username) {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur = (event) => {
        this._saveUsername(event.target.value)
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
            /*透過event.target.value獲取<input />中用戶輸入的內容，*/
            /*然後透過setState把它設置到state.username，input的value就會更新*/
        })
    }

    handleContentChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = () => {
         if (this.props.onSubmit) {
             this.props.onSubmit({
                 username: this.state.username,
                 content: this.state.content,
                 createdTime: +new Date()
             })
         }

         this.setState({content: ''})
    }

    render () {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用戶名：</span>
                    <div className="comment-field-input">
                        <input
                          value={this.state.username}
                          onBlur={this.handleUsernameBlur}
                          onChange={this.handleUsernameChange} />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">評論內容：</span>
                    <div className="comment-field-input">
                        <textarea
                          ref={(textarea) => this.textarea = textarea}
                          value={this.state.content}
                          onChange={this.handleContentChange} />
                    </div>
                </div>
                <div className="comment-field-button">
                    <button
                        onClick={this.handleSubmit} >
                        發布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
