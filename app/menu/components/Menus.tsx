import { useQuery } from "@blitzjs/rpc"
import { Table, Group } from "@mantine/core"

import getMenus from "app/menu/queries/getMenus"

export const Menus = () => {
  const [menus] = useQuery(getMenus, undefined)

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {menus.map((menu) => (
          <tr key={menu.id}>
            <td>{menu.id}</td>
            <td>{menu.title}</td>
            <td>{menu.slug}</td>
            <td>
              <Group spacing="sm">
                <h3>Buttons here</h3>
              </Group>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}