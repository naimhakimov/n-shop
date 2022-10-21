import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline, NextUIProvider as NextProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Document() {
    return (
        <Html>
            <Head>{CssBaseline.flush()}
                <title>n-shop</title>
            </Head>
            <body>
            <NextThemesProvider
                defaultTheme="system"
                attribute="class">
                <NextProvider>
                    <Main/>
                    <NextScript />
                </NextProvider>
            </NextThemesProvider>
            </body>
        </Html>
    )
}