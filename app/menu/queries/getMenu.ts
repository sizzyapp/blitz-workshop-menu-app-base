import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"

export const getMenusSchema = z.object({ id: z.number() })

const getMenu = resolver.pipe(
  resolver.zod(getMenusSchema),
  resolver.authorize(),
  async ({ id }) => {
    return db.menu.findUnique({ where: { id } })
  }
)

export default getMenu
