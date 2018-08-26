import React from 'react'

export default props => (
    <div className='input-field'>
        <i className={`${props.size} material-icons prefix`}>{props.icone}</i> 
        <input type='text' id={props.id}  onChange={props.onChange}
                onKeyUp={props.onKeyUp} value={props.value}/>
        <label htmlFor={props.onKeyUp}>{props.label}</label>
    </div>
)