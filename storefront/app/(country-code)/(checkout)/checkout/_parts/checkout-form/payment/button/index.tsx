import type {StoreCart} from "@medusajs/types";

import {isManual, isStripe} from "../utils";
import ManualPaymentButton from "./manual";
import StripePaymentButton from "./stripe";

type Props = {
  cart: StoreCart;
  disabled: boolean;
};
export default function PaymentButton({cart, disabled}: Props) {
  const paymentSession = cart.payment_collection?.payment_sessions?.[0];

  const notReady =
    !cart ||
    !cart.shipping_address ||
    !cart.email ||
    (cart.shipping_methods?.length ?? 0) < 1 ||
    disabled;

  if (isStripe(paymentSession?.provider_id)) {
    return <StripePaymentButton cart={cart} notReady={notReady} />;
  }

  if (isManual(paymentSession?.provider_id)) {
    return <ManualPaymentButton notReady={notReady} />;
  }
}