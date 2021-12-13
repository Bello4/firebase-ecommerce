import React from 'react'

import "./Preview.scss"
import CollectionItem from '../collection_item/Collection_Item-component'



const CollectionPreview= ({ title, items, id }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                    .filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default CollectionPreview
