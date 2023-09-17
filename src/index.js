import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ErrorBoundary } from "./pages/Error";
import { AppProvider } from './modules/context/index.js';
import { QueryContextProvider } from './modules/store/QueryContext';
import { ConfigProvider, theme } from 'antd';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: true,
            refetchOnWindowFocus: false,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ErrorBoundary>
                    <AppProvider>
                        <QueryContextProvider>
                            <ChakraProvider>
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            // colorPrimary: theme.darkAlgorithm,
                                            // colorPrimary: 'deeppink',
                                            // Button: {
                                            //     colorPrimary: '#00B96B',
                                            // }
                                        },
                                    }}
                                >
                                    <App />
                                </ConfigProvider>
                            </ChakraProvider>
                        </QueryContextProvider>
                    </AppProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
