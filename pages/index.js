import { useState } from "react";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/Home.module.css";


export default function Home() {
  const [products, updateProducts] = useState(
    [
      {
        title: "Payment w/ Amount",
        price: "10",
        description: "Set amount in Admin Panel",
        buttonText: "Open Modal",
        buttonId: "pm-payment-amount",
        buttonVariant: "outlined",
        openModalSelector: "#pm-payment-amount",
        quantity: 1
      },
      {
        title: "Payment w/ PriceId",
        price: "39",
        description: "Set price id in Admin Panel",
        buttonText: "Open Modal",
        className: "pm-payment-stripeid",
        buttonVariant: "outlined",
        openModalSelector: ".pm-payment-stripeid",
        quantity: 1
      },
      {
        title: "Subscription",
        price: "49",
        description: "Set price id in Admin Panel",
        buttonText: "Open Modal",
        dataSubscriptionCheckout: "true",
        buttonVariant: "outlined",
        subscription: "true",
        openModalSelector: "[data-subscription-checkout=\"true\"]",
        quantity: 1
      },
    ]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>PaymentModal | Stripe Modal Next JS Demo</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="robots" content="index, follow"/>
        <meta
          name="description"
          content="How to implement Stripe modal dialog for payments and subscriptions using Next JS and PaymentModal."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline/>
      <Container maxWidth="sm" component="main" className={styles.heroContent}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Demo Next JS Application
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textPrimary"
          gutterBottom
          className={styles.subheader}
        >
          View{" "}
          <Link
            href="https://github.com/funnelkake/stripe-payment-modal-nextjs-example"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </Link>{" "}
          for full code.
        </Typography>
      </Container>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {products.map((product) => (
            <Grid
              item
              key={product.title}
              xs={12}
              sm={product.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={product.title}
                  subheader={product.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  className={styles.cardHeader}
                />
                <CardContent className={styles.cardContent}>
                  <div className={styles.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${product.price}
                    </Typography>
                    {product.subscription && (
                      <Typography variant="h6" color="textSecondary">
                        /mo
                      </Typography>
                    )}
                  </div>
                  <Typography variant="subtitle1" align="center">
                    {product.description}
                  </Typography>
                  <InputLabel htmlFor={`product_${products.indexOf(product)}`}>
                    Quantity
                  </InputLabel>
                  <Select
                    fullWidth
                    value={product.quantity}
                    defaultValue={1}
                    onChange={
                      (event) => {
                        updateProducts(
                          products.map((prod) => {
                            if (prod.title === product.title) {
                              return { ...prod, quantity: event.target.value }
                            }
                            else {
                              return prod;
                            }
                          })
                        )
                        const openModalElement = document.querySelector(`button${product.openModalSelector}`);
                        openModalElement.setAttribute("data-product-quantity", event.target.value);
                      }
                    }
                    inputProps={{
                      name: `product_${products.indexOf(product)}`,
                      id: `product_${products.indexOf(product)}`
                    }}
                  >
                    <MenuItem disabled>Select quantity</MenuItem>
                    <MenuItem value={1}>
                      1
                    </MenuItem>
                    <MenuItem value="2">
                      2
                    </MenuItem>
                    <MenuItem value="3">
                      3
                    </MenuItem>
                  </Select>
                </CardContent>
                <CardActions>
                  <Button
                    className={product.className}
                    fullWidth
                    data-subscription-checkout={
                      product.dataSubscriptionCheckout
                    }
                    variant={product.buttonVariant}
                    id={product.buttonId}
                  >
                    {product.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* // Paste your src from admin panel*/}

      <script
        src={`${process.env.NEXT_APP_PAYMENT_MODAL_API_HOST_URL}/api/stripe_modals/script.js?siteId=${process.env.NEXT_APP_PAYMENT_MODAL_SITE_ID}`}
        defer
      ></script>
    </div>
  );
}
