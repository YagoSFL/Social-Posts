import React from 'react'
import If from './if'

export default props => (
    <If teste={!props.hide}>
    <button className={`btn${props.type} waves-effect ${props.color}`} onClick={props.onClick}>
        {props.label}
        <i className={`material-icons ${props.plus}`}>{props.icone}</i>
    </button>
    </If>
)