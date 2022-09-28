import { invalidateQuery, useMutation } from "@blitzjs/rpc"
import { Button } from "@mantine/core"
import deleteMenuFn from "../mutations/deleteMenu"
import getMenus from "../queries/getMenus"

export const DeleteMenu = ({ id }) => {
  const [deleteMenu] = useMutation(deleteMenuFn)

  const onDelete = async () => {
    if (confirm("Are you sure you want to delete this menu?")) {
      await deleteMenu({ id })
      await invalidateQuery(getMenus, undefined)
    }
  }

  return (
    <Button color="red" onClick={onDelete}>
      Delete
    </Button>
  )
}
