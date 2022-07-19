import React from 'react'
import Button from '../Button'
import './styles.css'

const FiltersList = React.memo(() => {
    return (
        <div className="filters">
            <Button type="All" />
            <Button type="Tomato" />
            <Button type="Cheese" />
            <Button type="Salami" />
        </div>
    )
})

export default FiltersList
