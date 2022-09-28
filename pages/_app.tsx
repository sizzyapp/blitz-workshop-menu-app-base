import { AppProps, ErrorBoundary } from "@blitzjs/next"
import { AppShell, Loader, MantineProvider } from "@mantine/core"
import { withBlitz } from "app/blitz-client"
import { RootErrorFallback } from "components/RootErrorFallback"
import React, { Suspense } from "react"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ErrorBoundary FallbackComponent={RootErrorFallback}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light"
        }}
      >
        <AppShell>
          <Suspense fallback={<Loader />}>
            <Component {...pageProps} />
          </Suspense>
        </AppShell>
      </MantineProvider>
    </ErrorBoundary>
  )
}

export default withBlitz(MyApp)
