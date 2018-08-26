import React from 'react'
import Card from '../template/card'
import If from '../template/if'
import Grid from '../template/grid'
import Input from  '../template/input'
import IconButton from '../template/iconButton'
import TextArea from '../template/textarea'

export default props => {

    const renderComments = (list) => {
        const postComments = list || ''
        return postComments.map((cmt) => (
            cmt.user ?
            <li key={cmt.id}>
                <h5>{cmt.user} diz:</h5>
                <h6>{cmt.texto}</h6>
                <div className="divider"></div>    
            </li> : ''
        ))
    }

    const renderPost = () =>  {  
        const postList = props.post || ''
        return postList.map((obj) => (
            obj.nome ?
            <li key={obj.id}>
                <Card color='grey lighten-5' actions={true} user={obj.nome} 
                    text={obj.conteudo} space='12' icone='account_circle' size='medium'
                    like={obj.like} dislike={obj.dislike} comment={obj.comment}
                    clickLike={() => props.handleLike(obj)}
                    clickDislike={() => props.handleDislike(obj)}
                    clickComment={() => props.handleClickComment(obj)}
                    remove={() => props.handleRemove(obj)}>
                    
                    <If teste={obj.comment}>                   
                        <div className='container'>
                            <div className='row'>
                                <Grid cols='12'>
                                    <ul className='posit section'>
                                        <blockquote className='color'>
                                            {renderComments(obj.comments)}
                                        </blockquote>
                                    </ul>
                                </Grid>
                            </div>      
                            <div className='row'>
                                <Grid cols='12 8'>
                                <Input id='user' icone='account_circle' label='Nome de usuário' size='medium'
                                    value={props.user} onChange={props.handleUserChange}/>
                                </Grid>
                                <Grid cols='12 8'>
                                    <TextArea id='post' label='Dê sua opinião...' value={props.texto}
                                        onChange={props.handleCommentChange}/>
                                </Grid>
                                <Grid cols='6 4'>
                                    <IconButton type='-floating pulse' color='light-blue darken-3' 
                                        plus='right' icone='send'
                                            onClick={() => props.handleInputComment(obj)}/>
                                    <IconButton type='-floating' color='white' icone='close' size='normal' 
                                        plus='grey-text text-darken-4' onClick={props.handleClear}/>
                                </Grid>
                            </div>      
                        </div>                                       
                    </If>
                </Card>
            </li> : ''
        ))
    }

    return(
        <div className='row'>
            <ul>
                {renderPost()}
            </ul>
        </div>
    )

}
