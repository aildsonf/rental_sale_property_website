import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="pt-BR">
				<Head>
					<meta name="title" content="Challenge Grupo ZAP" />
					<meta name="description" content="Code Challenge Grupo ZAP para pessoa desenvolvedora frontend" />
					<meta name="keywords" content="tecnologia, technology, challenge, web development" />
					<meta name="robots" content="noindex, nofollow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="Portuguese" />
					<meta name="author" content="Aildson Ferreira" />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
