import { resolver } from "@blitzjs/rpc"
import { z } from "zod"

import db from "db"

export const createMenuSchema = z.object({ title: z.string(), slug: z.string(), body: z.string() })

const createMenuFn = resolver.pipe(
  resolver.zod(createMenuSchema),
  resolver.authorize(),
  async (data, ctx) => {
    const existingSlug = await db.menu.findFirst({ where: { slug: data.slug } })
    if (existingSlug) {
      return {
        ok: false as const,
        errorField: "slug" as const,
        errorMessage: "Slug already in use",
      }
    }

    const menu = await db.menu.create({
      data: {
        ...data,
        user: { connect: { id: ctx.session.userId } },
      },
    })

    return { ok: true as const, menu }
  }
)

export default createMenuFn
