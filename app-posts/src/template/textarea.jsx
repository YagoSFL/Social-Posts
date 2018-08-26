import React from 'react'

export default props => (
      <div className="row">
        <div className="input-field">
          <textarea id={props.id} className="materialize-textarea" onChange={props.onChange}
            value={props.value}></textarea>
          <label htmlFor={props.id}>{props.label}</label>
        </div>
      </div>
)