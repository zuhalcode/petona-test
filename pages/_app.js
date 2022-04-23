import { Provider } from "react-redux";
import { store } from "../components/app/store";
import "../styles/globals.css";
// import { wrapper } from "../components/store/store";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;

