import { AuthorizationError, NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"

export const deleteMenuSchema = z.object({ id: z.number() })

const deleteMenuFn = resolver.pipe(
  resolver.zod(deleteMenuSchema),
  resolver.authorize(),
  async ({ id }, ctx) => {
    const menu = await db.menu.findUnique({ where: { id } })
    if (!menu) throw new NotFoundError()
    if (menu.userId !== ctx.session.userId) throw new AuthorizationError()

    return db.menu.delete({
      where: { id },
    })
  }
)

export default deleteMenuFn
