import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"

export const getMenusSchema = z.void()

const getMenus = resolver.pipe(
  resolver.zod(getMenusSchema),
  resolver.authorize(),
  async (_, ctx) => {
    return db.menu.findMany({ where: { userId: ctx.session.userId } })
  }
)

export default getMenus
