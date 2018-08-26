import React from 'react'

export default props => (
    <div className='navbar-fixed'>
        <nav className='light-blue darken-3 waves-effect waves-light'>
            <div className="nav-wrapper container">
            <a className="brand-logo grey-text text-lighten-5 font-title">
            <i className={`${props.icon_size} material-icons`}>adb</i>Social
            </a>
            </div>
        </nav>
    </div>
)