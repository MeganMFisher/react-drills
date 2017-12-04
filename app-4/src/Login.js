import React, { Component } from 'react';

export default class Login extends Component {
    constructor() {
        super() 

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this)
    }

    handleNameChange(e) {
        this.setState({
            username: e
        })
    }

    handlePasswordChange(e) {
        this.setState({
            password: e
        })
    }

    login() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render() {
        return (
            <div>
                <input onChange={ e => this.handleNameChange(e.target.value) }/>
                <input onChange={ e => this.handlePasswordChange(e.target.value) }/>
                <button onClick={ this.login }>Login</button>
            </div>
        )
    }
}