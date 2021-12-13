import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../preview_collection/previewCollection_Component'
import { selectCollectionsForPreview } from '../../redux/shop/shop_selector'

import './Collections_overview-style.scss'


const CollectionOverview = ({ collections }) => (

    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => 
            <CollectionPreview key={id} {...otherCollectionProps}/>
            )
        }
        
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)