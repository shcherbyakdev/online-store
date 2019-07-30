import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Puf2JcPVutB3znT6v2e1kgpw00kSFHQp4w";

  const onToken = token => {
    console.log(token);

    alert("Payment successful");
  };

  return (
    <StripeCheckout
      name="Ninja Shop"
      billingAddress
      shippingAddress
      label="Pay"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
