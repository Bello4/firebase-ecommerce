import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6cXcArMgFWBJDO1AM0gK2zhxpp8bPmrPCDTYeL5ZbMThHtPuRldP0nXlyXVJwcfEtZLNmKxkAK5WrZNvjfFD1t00EpCahouB';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Bello Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;