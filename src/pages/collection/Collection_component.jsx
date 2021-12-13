import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/collection_item/Collection_Item-component'
import { selectCollection } from '../../redux/shop/shop_selector'

import './Collection_style.scss'
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
         <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => <CollectionItem key={item.id} item={item} />)
            }
        </div>
    </div>
    )
   
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
