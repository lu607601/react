import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => {
    return ({
        active: ownProps.filter === state.filter
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink