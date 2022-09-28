import { AuthorizationError, NotFoundError } from "blitz"
import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"
import { createMenuSchema } from "./createMenu"

export const updateMenuSchema = z.object({ id: z.number(), data: createMenuSchema.partial() })

const updateMenuFn = resolver.pipe(
  resolver.zod(updateMenuSchema),
  resolver.authorize(),
  async ({ id, data }, ctx) => {
    const menu = await db.menu.findUnique({ where: { id } })
    if (!menu) throw new NotFoundError()
    if (menu.userId !== ctx.session.userId) throw new AuthorizationError()

    return db.menu.update({
      where: { id },
      data: {
        ...data,
      },
    })
  }
)

export default updateMenuFn
