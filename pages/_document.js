// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles';
import { createResolver } from 'next-slicezone/resolver'
import theme from '../theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    await createResolver()
    return { ...initialProps }
  }

  render() {
    return (
      <Html style={{ scrollPaddingTop: 45 }}>
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
          />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap" rel="stylesheet" />
          <link href="/fonts/style.css" rel="stylesheet" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="theme-color" content="#ffffff" />
          {/* Global site tag (gtag.js) - Google Ads: 300427578 */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-300427578"></script>
          <script dangerouslySetInnerHTML={
            {
              __html: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-300427578');`}
          }>

          </script>
        </Head>
        <body>
          <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="moniker" />
            <input type="email" name="email" />
            <input type="text" name="phone" />
            <input type="text" name="message" />
          </form>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};