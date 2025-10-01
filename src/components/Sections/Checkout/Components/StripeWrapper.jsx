import { Elements } from '@stripe/react-stripe-js';
import { useState, useEffect } from 'react';
import { getStripePromise } from '@/utils';
import PaymentCheckoutForm from './PaymentCheckoutForm';
import { appAxios } from '@/constants';
import { CircularProgress, Modal, Box, Card, CardContent } from '@mui/material';

export default function StripeWrapper({ open, clientSecret, handleSuccess, handleCancel, cancellLoading, handleFailed }) {
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        getStripePromise().then(setStripePromise);
    }, []);

    return (
        <Modal open={open}>
            <Card
                sx={{
                    // backgroundColor: '#fff',
                    margin: '10% auto',
                    // padding: 4,
                    // borderRadius: 2,
                    width: "40%",
                    // textAlign: 'center',
                }}
            >
                {!stripePromise || !clientSecret ? (
                    <>
                        <CardContent>
                            <CircularProgress />
                            <p>Loading payment form...</p>
                        </CardContent>
                    </>
                ) : (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <PaymentCheckoutForm
                            handleSuccess={handleSuccess}
                            handleCancel={handleCancel}
                            cancellLoading={cancellLoading}
                            handleFailed={handleFailed}
                        // {...props}
                        />
                    </Elements>
                )}
            </Card>
        </Modal>
    );
}
