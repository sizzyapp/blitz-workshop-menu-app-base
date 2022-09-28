import { useRouter } from "next/router"
import { Routes } from "@blitzjs/next"
import { invalidateQuery, useMutation } from "@blitzjs/rpc"

import createMenuFn from "app/menu/mutations/createMenu"
import getMenus from "app/menu/queries/getMenus"
import { FORM_ERROR } from "app/core/components/Form"
import { MenuForm } from "app/menu/components/MenuForm"

const NewMenuPage = () => {
  const router = useRouter()
  const [createMenu] = useMutation(createMenuFn)

  const onSubmit = async (data) => {
    try {
      const res = await createMenu(data)
      if (!res.ok) {
        return {
          [res.errorField]: res.errorMessage
        }
      }

      await invalidateQuery(getMenus, undefined)
      await router.replace(Routes.Home())
    } catch (err) {
      return { [FORM_ERROR]: err.toString() }
    }
  }

  return (
    <>
      <h1>Menus</h1>

      <MenuForm
        initialValues={undefined}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default NewMenuPage
