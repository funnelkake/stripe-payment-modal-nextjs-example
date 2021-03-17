# Stripe Payment Modal Next JS Demo

This sample project shows how to implement Stripe payments & subscriptions within a modal dialog using [PaymentModal](https://paymentmodal.com) and [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Demo

See a hosted version of the Next JS sample project [here](https://nextjs.paymentmodal.com).

The hosted demo is running in Stripe test mode. Use `4242424242424242` as a test card number with any CVC + future expiration date.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation

To see the Stripe modals in action, you need to create a free [PaymentModal account](https://paymentmodal.com).

1. Create a [PaymentModal site](https://paymentmodal.com).
2. Clone this repo
3. In the project directory, run `cp .env.local.sample .env.local`
4. Open `.env.local` and update `NEXT_APP_PAYMENT_MODAL_SITE_ID` with your [PaymentModal site id](https://paymentmodal.com)
5. Run `yarn` to download npm packages
6. Run `yarn dev` to open the Next app in development mode.
7. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
8. Update the `products` array in `pages/api/index.js` to use any HTML element attributes to attach click listeners to open your modals.

This sample and hosted demo project uses the following HTML element attributes, but you can use any valid [HTML selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors#reference_table_of_selectors). Be sure to update the selectors in your PaymentModal account.

- `buttonId` creates a modal with a Stripe payment intent using an amount.
- `className` creates a modal with a Stripe payment intent using a Stripe price id.
- `dataSubscriptionCheckout` creates a modal with a Stripe subscription using a Stripe price id.

## Learn More

You can learn more about configuring Stripe modal properties in the [PaymentModal documentation](https://paymentmodal.com/docs).

You can learn more about the Next app in the [Next.js](https://nextjs.org/) and [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

#### Get Support

If you found a bug or want to suggest a new [feature/use case/sample], please [file an issue](https://github.com/funnelkake/stripe-payment-modal-nextjs-example/issues).

If you have questions, comments, or need help with the code, we're here to help:

on Twitter at [@paymentmodal](https://twitter.com/paymentmodal)
on Stack Overflow at the stripe-modal tag
by [email](mailto:support@paymentmodal.com?subject=[GitHub]%20Source%Next%20Demo)
