import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.tsx'
import ErrorFallback from './components/ErrorFailBack.tsx'
import CstTxt from './Cst.ts'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error(CstTxt.NoRootHtml)
}

const queryClient = new QueryClient()

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FluentProvider theme={webLightTheme}>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            // Clear the query cache when resetting the error boundary
            void queryClient.invalidateQueries()
          }}
        >
          <App />
          {import.meta.env.DEV && <ReactQueryDevtools initialIsOpen={false} />}
        </ErrorBoundary>
      </FluentProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
