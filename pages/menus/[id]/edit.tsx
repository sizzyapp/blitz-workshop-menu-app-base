import React, { Suspense } from "react"
import { Routes, useParam } from "@blitzjs/next"
import { invalidateQuery, useMutation, useQuery } from "@blitzjs/rpc"
import { NextLink } from "@mantine/next"

import getMenu from "../../../app/menu/queries/getMenu"
import getMenus from "app/menu/queries/getMenus"
import updateMenuFn from "../../../app/menu/mutations/updateMenu"
import { MenuForm } from "app/menu/components/MenuForm"

const MenusPage = () => {
  const id = useParam("id", "number")!

  const [menu, { refetch }] = useQuery(getMenu, { id })
  const [updateMenu] = useMutation(updateMenuFn)

  const onSubmit = async (data) => {
    try {
      await updateMenu({ data, id })
      await Promise.all([invalidateQuery(getMenus, undefined), refetch()])
    } catch (err) {
      alert(err)
    }
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
