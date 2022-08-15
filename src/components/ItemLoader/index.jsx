import ContentLoader from "react-content-loader"
import React from 'react'
import './style.css'

const ItemLoader = (props) => {
    return (
        <ContentLoader
            className="card-loader"
            speed={2}
            width={400}
            height={400}
            viewBox="0 0 400 400"
            backgroundColor="#e3e3e3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="8" y="26" rx="0" ry="0" width="400" height="163" />
            <rect x="8" y="199" rx="0" ry="0" width="141" height="52" />
            <rect x="20" y="271" rx="0" ry="0" width="107" height="20" />
            <rect x="49" y="301" rx="0" ry="0" width="43" height="18" />
            <rect x="7" y="331" rx="0" ry="0" width="137" height="33" />
        </ContentLoader>
    )
}

export default ItemLoader