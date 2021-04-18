import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import './Payment.css'

const SimpleCardForm = ( {handelPaymentSuccess}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError(null);
            handelPaymentSuccess(paymentMethod.id);
            console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <div className="mt-5">
            <form  onSubmit={handleSubmit}>
                <CardElement className="paymentFrom" />
                <button className="paymentButton" type="submit" disabled={!stripe}>
                 Confirm Payment
                </button>
            </form>
            {
                paymentError && <p style={{color:'red'}}>{paymentError}</p>
            }
             {
                paymentSuccess && <p style={{color:'green'}}>Your Payment Was Successfully</p>
            }
        </div>
    );
};

export default SimpleCardForm;