import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"
import { NotFoundError } from "blitz"

export const getMenusSchema = z.object({ slug: z.string() })

const getPublicMenu = resolver.pipe(resolver.zod(getMenusSchema), async ({ slug }) => {
  const menu = await db.menu.findUnique({ where: { slug } })
  if (!menu) throw new NotFoundError()

  return menu
})

export default getPublicMenu
