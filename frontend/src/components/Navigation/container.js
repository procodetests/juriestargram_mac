import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
    state = {
        term: "",
        notification: false
    };
    static propTypes = {
        goToSearch: PropTypes.func.isRequired
    };
    render() {
        return ( 
            <Navigation 
                {...this.state}
                onInputChange={this._onInputChange} 
                onSubmit={this._onSubmit} 
                openNotification={this._openNotification}
                value={this.state.term}
                notification={this.state.notification}
            />
        )
    }

    _onInputChange = (event) => {
        const { target: { value } } = event;
        this.setState({
            term: value
        });
        console.log(value);
    };

    _onSubmit = event => {
        const { goToSearch } = this.props;
        const { term } = this.state;

        console.log(`Enter: ${term}`)
        event.preventDefault();
        goToSearch(term)
        this.setState({
            term: ""
        })
    }

    _openNotification = () => {
        const { notification } = this.state;
        console.log('notification')
        console.log(notification)
        if(notification){
            this.setState({
                notification: false
            });
        }
        else {
            this.setState({
                notification: true
            });
        }
    }
}

export default Container;