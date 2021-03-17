import Head from "next/head";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import styles from "../styles/Home.module.css";

const products = [
  {
    title: "Payment w/ Amount",
    price: "10",
    description: "Set amount in Admin Panel",
    buttonText: "Open Modal",
    buttonId: "pm-payment-amount",
    buttonVariant: "outlined",
  },
  {
    title: "Payment w/ PriceId",
    price: "39",
    description: "Set price id in Admin Panel",
    buttonText: "Open Modal",
    className: "pm-payment-stripeid",
    buttonVariant: "outlined",
  },
  {
    title: "Subscription",
    price: "49",
    description: "Set price id in Admin Panel",
    buttonText: "Open Modal",
    dataSubscriptionCheckout: "true",
    buttonVariant: "outlined",
    subscription: "true",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PaymentModal | Stripe Modal Next JS Demo</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="How to implement Stripe modal dialog for payments and subscriptions using Next JS and PaymentModal."
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <CssBaseline />
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
                  id={product.buttonId}
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
