import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuPrincipal extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted>
                <Menu.Item big inverted
                    icon='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Menu inverted position='right'>
                    <Menu.Item big
                        icon='user'
                        active={activeItem === 'login'}
                        onClick={this.handleItemClick}
                    />
                </Menu.Menu>
            </Menu>
        )
    }
}
