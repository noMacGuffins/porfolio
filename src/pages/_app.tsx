import type { AppProps } from "next/app";
import { wrapper } from "src/store/store";
import "styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
