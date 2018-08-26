import React from 'react'
import TextArea from '../template/textarea'
import Input from '../template/input'
import IconButton from '../template/iconButton'
import Grid from '../template/grid'
import PageHeader from '../template/pageHeader'


export default props => (       
    <div className="card-content">
    <span className="card-title"><PageHeader text='Feed' /></span>
        <div className='row'>
            <Grid cols='12 8'>
                <Input id='user' icone='account_circle' label='Nome de usuário' size='medium'
                    value={props.nome} onChange={props.handleChangeNome}/>
            </Grid>
            <Grid cols='12 9'>
                <TextArea id='post' label='O que você está pensando?' value={props.conteudo}
                    onChange={props.handleChangePost}/>
            </Grid>
            <Grid cols='12 3'>
                <div className='posit'>
                <IconButton type='' label='postar' color=' waves-light light-blue darken-3' plus='right' icone='input'
                    onClick={props.handlePost}/>
                <IconButton type='-floating' color=' white' icone='close' size='normal' 
                    plus='grey-text text-darken-4' onClick={props.handleClear}/>
                </div>
            </Grid>
        </div>
</div>
)
