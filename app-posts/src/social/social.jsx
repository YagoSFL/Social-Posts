import React, { Component } from 'react'
import PostContent from './content'
import PostForm from './form'

export default class Social extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            conteudo: '',
            user: '',
            texto: '',
            post: []
        }
        this.handleChangeNome = this.handleChangeNome.bind(this)
        this.handleChangePost = this.handleChangePost.bind(this)
        this.handlePost = this.handlePost.bind(this)
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleClickComment = this.handleClickComment.bind(this)
        this.handleUserChange = this.handleUserChange.bind(this)
        this.handleCommentChange = this.handleCommentChange.bind(this)
        this.handleInputComment = this.handleInputComment.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

    }

    atualiza(nome = '', conteudo = '', user = '', texto= ''){
        this.setState({nome, conteudo, user, texto})
    }

    handleClear(){
        this.atualiza()
    }

    handleChangeNome(e) {
        this.setState({...this.state, nome: e.target.value})
    }

    handleChangePost(e) {
        this.setState({...this.state, conteudo: e.target.value})
    }

    handleUserChange(e) {
        this.setState({...this.state, user: e.target.value})
    }

    handleCommentChange(e) {
        this.setState({...this.state, texto: e.target.value})
    }

    handleInputComment(postagem) {
        let i = postagem.id -1 
        let user = this.state.user
        let texto = this.state.texto
        let id = this.state.post[i].comments.length +1
        postagem.comments = postagem.comments.concat({id, user, texto})
        let post  = Object.assign(
            [...this.state.post], 
            {[i]:
              Object.assign({}, this.state.post[i], postagem)})
        this.setState({...this.state, post})
        this.atualiza()
    }
    handlePost() {
        let nome = this.state.nome
        let conteudo = this.state.conteudo
        let id = this.state.post.length +1
        this.setState((prevState) => {
            return { 
              post: prevState.post.concat(
                  {id, nome, conteudo, like: false, dislike: false, comment: false, comments: []}) 
            }
          })
        this.atualiza()
    }

    handleRemove(postagem) {
        let i = postagem.id -1
        let post  = Object.assign(
            [...this.state.post], 
            {[i]:
              Object.assign({}, this.state.post[i], {id: null, nome: null, conteudo: null})})
        this.setState({...this.state, post})
    }

    handleLike(postagem) {
        postagem.like = !postagem.like
        postagem.dislike = false
        let i = postagem.id -1
        let post  = Object.assign(
            [...this.state.post], 
            {[i]:
              Object.assign({}, this.state.post[i], postagem)})
        this.setState({...this.state, post})
        this.atualiza()
    }

    handleDislike(postagem) {
        postagem.dislike = !postagem.dislike
        postagem.like = false
        let i = postagem.id -1
        let post  = Object.assign(
            [...this.state.post], 
            {[i]:
              Object.assign({}, this.state.post[i], postagem)})
        this.setState({...this.state, post})
        this.atualiza()
    }

    handleClickComment(postagem) {
        postagem.comment = !postagem.comment
        let i = postagem.id -1
        let post  = Object.assign(
            [...this.state.post], 
            {[i]:
              Object.assign({}, this.state.post[i], postagem)})
        this.setState({...this.state, post})
        this.atualiza()
    }
    render(){
        console.log(this.state.post)
        return (
            <div className="container">
                <div className='card white'>
                    <PostForm handleChangeNome={this.handleChangeNome}
                        handleChangePost={this.handleChangePost}
                        handlePost={this.handlePost}
                        handleClear={this.handleClear}
                        nome={this.state.nome}
                        conteudo={this.state.conteudo}/>
                    <PostContent post={this.state.post}
                        handleLike={this.handleLike}
                        handleDislike={this.handleDislike}
                        handleClickComment={this.handleClickComment}
                        user={this.state.user}
                        texto={this.state.texto}
                        list={this.state.comments}
                        handleUserChange={this.handleUserChange}
                        handleCommentChange={this.handleCommentChange}
                        handleInputComment={this.handleInputComment}
                        handleClear={this.handleClear}
                        handleRemove={this.handleRemove}/>
                </div>
            </div>
            
        )
    }
}