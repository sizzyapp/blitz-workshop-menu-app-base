import React, { Suspense } from "react"
import { Routes, useParam } from "@blitzjs/next"
import { NextLink } from "@mantine/next"

const MenusPage = () => {
  const id = useParam("id", "number")!

  return (
    <h1>{id}</h1>
  )
}

const EditMenusPage = () => {
  return (
    <>
      <NextLink href={Routes.Home()}>Back</NextLink>

      <h1>Edit Menu</h1>

      <Suspense fallback={<div>Loading...</div>}>
        <MenusPage />
      </Suspense>
    </>
  )
}

export default EditMenusPage
