import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Arimo } from "next/font/google"

//replace with google font of choice
const arimo = Arimo({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={arimo.className}>
			<Component {...pageProps} />
		</div>
	)
}
