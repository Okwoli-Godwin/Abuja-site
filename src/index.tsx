import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux/es/exports';
import { Store } from './Components/Apis/Store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from './Components/Scrolltotop';
import { HashRouter } from "react-router-dom";

const queryClient = new QueryClient();
let persistor = persistStore(Store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <HashRouter>
            <ScrollToTop />
            <App />
          </HashRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
