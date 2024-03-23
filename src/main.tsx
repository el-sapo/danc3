import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { WagmiProvider, createConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains'; // add base
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig, ConnectKitButton } from 'connectkit';
import { Analytics } from "@vercel/analytics/react"

const config = createConfig(
  getDefaultConfig({
    appName: 'Danc3',
    chains: [sepolia],
    walletConnectProjectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  })
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
        <ConnectKitButton />
        <App />
        <Analytics />
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>  
  </React.StrictMode>,
);