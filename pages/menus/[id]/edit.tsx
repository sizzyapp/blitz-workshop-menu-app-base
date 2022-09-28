import React, { Suspense } from "react"
import { Routes, useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import { NextLink } from "@mantine/next"

import getMenu from "../../../app/menu/queries/getMenu"
import { MenuForm } from "app/menu/components/MenuForm"

const MenusPage = () => {
  const id = useParam("id", "number")!
  const [menu] = useQuery(getMenu, { id })

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <MenuForm
      initialValues={menu}
      onSubmit={onSubmit}
    />
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
