import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => {
    return (
        <p>
            Show:
            <FilterLink filter='SHOW_ALL'>
            all
            </FilterLink>
            {','}
            <FilterLink filter='SHOW_COMPLETED'>
            completed
            </FilterLink>
            {','}
            <FilterLink filter='SHOW_ACTIVE'>
            active
            </FilterLink>
        </p>
    )
}

export default Footer
