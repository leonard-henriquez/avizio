import React from 'react';
import '../styles/globals.css'
import '../styles/_bootstrap.scss';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';


function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
