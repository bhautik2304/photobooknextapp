"use client";
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { CardActions, CardContent, CircularProgress } from '@mui/material';
import { LoadingButton } from '@mui/lab';

export default function PaymentCheckoutForm({ handleSuccess, handleFailed, handleCancel, cancellLoading }) {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const handleSubmit = async () => {
        if (!stripe || !elements) return;

        setLoading(true);

        try {
            const { error, paymentIntent } = await stripe.confirmPayment({
                elements,
                confirmParams: {},
                redirect: "if_required",
            });

            if (error) {
                alert(error.message);
            } else if (paymentIntent?.status === 'succeeded') {
                setPaymentSuccess(true);
                handleSuccess(paymentIntent);
            } else {
                handleFailed(paymentIntent);
            }
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    if (paymentSuccess) {
        return (
            <div style={{ padding: 20 }}>
                <h2>🎉 Payment Successful</h2>
                <p>Thank you! Your payment has been received.</p>
            </div>
        );
    }

    return (
        <>
            <CardContent sx={{ maxHeight: 500, overflow: "scroll", padding: 5, }} >
                <PaymentElement />
            </CardContent>
            <CardActions sx={{ justifyContent: "end", py: 2 }} >
                <button className="btn btn-dark pro btn-sm" disabled={loading} onClick={handleSubmit}>
                    {
                        loading ? (
                            <>
                    <CircularProgress size={15} color="inherit" />{` Please Wait...`}
                            </>
                        ) : "Pay"
                    }
                </button>
                <button disabled={cancellLoading} className='btn btn-outline-danger pro btn-sm' onClick={handleCancel} loading={cancellLoading} >
                    {
                        cancellLoading ? (
                            <>
                    <CircularProgress size={15} color="inherit" />{` Canceling...`}
                            </>
                        ) : "Cancel"
                    }
                </button>
            </CardActions>
        </>
    );
}
