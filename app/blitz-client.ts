import { AuthClientPlugin } from "@blitzjs/auth"
import { setupBlitzClient } from "@blitzjs/next"
import { BlitzRpcPlugin } from "@blitzjs/rpc"

const isCodeSandbox = process.env.PWD === "/sandbox"

export const authConfig = {
  cookiePrefix: "workshop-menu-app-base-cookie-prefix",
  ...(isCodeSandbox && {
    sameSite: "none",
    secureCookies: true,
  }),
}

export const { withBlitz } = setupBlitzClient({
  plugins: [AuthClientPlugin(authConfig), BlitzRpcPlugin({})],
})
