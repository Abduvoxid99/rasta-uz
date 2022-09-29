import { ThemeProvider } from "@emotion/react";
import Layout from "components/Layout";
import "styles/globals.scss";
import theme from "mui-theme";
import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NextNProgress from "nextjs-progressbar";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/http-client";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {typeof window !== "undefined" ? (
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <Toaster position="top-center" reverseOrder={false} />
              <Layout>
                <NextNProgress
                  options={{
                    showSpinner: false,
                  }}
                  color="#22b573"
                />
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </QueryClientProvider>
        </PersistGate>
      ) : (
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Toaster position="top-center" reverseOrder={false} />
            <Layout>
              <NextNProgress
                options={{
                  showSpinner: false,
                }}
                color="#22b573"
              />
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </QueryClientProvider>
      )}
    </Provider>
  );
}

export default MyApp;
