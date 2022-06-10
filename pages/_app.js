import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";
import {Provider} from "react-redux";
import store from '../store/index'

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ScrollObserver>
                <Component {...pageProps} />;
            </ScrollObserver>
        </Provider>
    );
}

export default MyApp;
