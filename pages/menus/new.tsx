import { useMutation } from "@blitzjs/rpc"

import createMenuFn from "app/menu/mutations/createMenu"
import { FORM_ERROR } from "app/core/components/Form"
import { MenuForm } from "app/menu/components/MenuForm"

const NewMenuPage = () => {
  const [createMenu] = useMutation(createMenuFn)

  const onSubmit = async (data) => {
    try {
      const res = await createMenu(data)
      if (!res.ok) {
        return {
          [res.errorField]: res.errorMessage
        }
      }

      console.log("Created")
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
