import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  //   render(): JSX.Element {
  //     return (
  //       <Html lang="pt">
  //         <Head>
  //           <meta charSet="utf8" />

  //           <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700" rel="stylesheet" />

  //           {/* <link rel="icon" href="https://rocketseat.com.br/favicon.ico" /> */}
  //         </Head>
  //         <body>
  //           <Main />
  //           <NextScript />
  //         </body>
  //       </Html>
  //     )
  //   }
}
