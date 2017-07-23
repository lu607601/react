import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'

const FILTER_TITLES = {
    [SHOW_ALL]: 'ALL',
    [SHOW_ACTIVE]: 'ACTIVE',
    [SHOW_COMPLETED]: 'COMPLETED'
}
export default class Footer extends Component {
    static propTypes = {
        onShow: PropTypes.func.isRequired,
        filter: PropTypes.string.isRequired
    }

    renderFilterLink (filter) {
        const title = FILTER_TITLES[filter]
        const { filter: selectedFilter, onShow } = this.props

        return (
            <a className={classnames({ selected: filter === selectedFilter })}
               style={{ cursor: 'pointer' }}
               onClick= {() => onShow(filter)} >
                {title}
            </a>
        )
    }
    render () { 
        return (
            <div className='footer'>
                <ul className='filter'>
                    {
                        [ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter => 
                            <li key={filter}>
                                {this.renderFilterLink(filter)}
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
