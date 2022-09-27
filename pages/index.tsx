import React, { Suspense } from "react"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Group, Button, Stack } from "@mantine/core"
import { NextLink } from "@mantine/next"

import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"

const Main = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  const onLogout = async () => {
    await logoutMutation()
  }

  if (currentUser) {
    return (
      <Stack align="flex-start">
        <Button onClick={onLogout}>Logout</Button>

        <div>
          User id: <code>{currentUser.id}</code>
          <br />
          User role: <code>{currentUser.role}</code>
        </div>
      </Stack>
    )
  } else {
    return (
      <>
        <h3>Login to continue</h3>

        <Group>
          <Button component={NextLink} href={Routes.SignupPage()}>
            Sign Up
          </Button>
          <Button component={NextLink} href={Routes.LoginPage()}>
            Login
          </Button>
        </Group>
      </>
    )
  }
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to your blitz app</h1>

      <Suspense fallback="Loading...">
        <Main />
      </Suspense>
    </div>
  )
}

export default Home
