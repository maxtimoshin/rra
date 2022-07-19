import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilterTo } from '../../redux/Slices/filterSlice'
import './styles.css'

const Button = React.memo(({ type }) => {
    const currentFilter = useSelector(state => state.filters.filter)
    const dispatch = useDispatch()
    return (
        <button className={currentFilter === type ? 'filter-button current' : 'filter-button'} onClick={() => dispatch(changeFilterTo(type))}>{type}</button>
    )
})

export default Button