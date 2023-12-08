import { GeistSans } from 'geist/font/sans'
import './globals.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000'

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "Next.js and Supabase Starter Kit",
	description: "The fastest way to build apps with Next.js and Supabase",
};
const theme = createTheme({
	colors: {
		evanGreen: [
			"#f5f8f1",
			"#eaefe4",
			"#d2dec2",
			"#b9cd9e",
			"#a4be7f",
			"#96b46b",
			"#8eaf60",
			"#7b9950",
			"#6c8845",
			"#5b7637"
		],
	},

	// shadows: {
	// 	md: '1px 1px 3px rgba(0, 0, 0, .25)',
	// 	xl: '5px 5px 3px rgba(0, 0, 0, .25)',
	// },

	// headings: {
	// 	fontFamily: 'Roboto, sans-serif',
	// 	sizes: {
	// 		h1: { fontSize: rem(36) },
	// 	},
	// },
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={GeistSans.className}>
			<head>
				<ColorSchemeScript />
			</head>
			<body className="bg-background text-foreground">
				<MantineProvider theme={theme}>
					<main className="min-h-screen flex flex-col items-center">
						{children}
					</main>
				</MantineProvider>
			</body>
		</html>
	);
}
