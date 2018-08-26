import React from 'react'
import Grid from './grid'

export default props =>{

    let like = props.like ? 'clicked' : 'unclicked'
    let dislike = props.dislike ? 'clicked' : 'unclicked'
    let comment = props.comment ? 'clicked' : 'unclicked'

    return (
        <div className="row">
        <Grid cols={props.space}>
            <div className={`card ${props.color} hoverable`}>
                <div className="card-content">
                <span className="flow-text">
                    <h4><i className={`${props.size} material-icons prefix`}>
                        {props.icone}
                    </i> {props.user} diz:</h4>
                </span>
                    <p className="flow-text">{props.text}</p>
                    {props.children}
                </div>
                <div className="card-action">
                <a className={like} onClick={props.clickLike}>
                    <i className={`small material-icons ${like} waves-effect waves-light`}>thumb_up</i></a>
                <a className={dislike} onClick={props.clickDislike}>
                    <i className={`small material-icons ${dislike} waves-effect waves-light`}>thumb_down</i></a>
                <a className={comment} onClick={props.clickComment}>
                    <i className={`small material-icons ${comment} waves-effect waves-light`}>comment</i>Responder</a>
                <a className='grey-text text-lighten-1 right' onClick={props.remove}>
                    <i className={`normal material-icons`}>delete_forever</i></a>
                </div>
            </div>
        </Grid>
    </div>
    )
} 