import { Provider } from "../store";
import "../styles/globals.css";


export default function MyApp(props) {
  const { Component, pageProps } = props;
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

