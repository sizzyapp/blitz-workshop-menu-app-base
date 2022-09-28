import React from "react"
import { useParam } from "@blitzjs/next"
import { useQuery } from "@blitzjs/rpc"
import Head from "next/head"

import getPublicMenu from "app/menu/queries/getPublicMenu"

const PublicMenuPage: React.FC = () => {
  const slug = useParam("slug", "string")!
  const [menu] = useQuery(getPublicMenu, { slug })

  return (
    <>
      <Head>
        <title>{menu.title}</title>
      </Head>

      <div>
        <h1>{menu.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: menu.body }} />
      </div>
    </>
  )
}

export default PublicMenuPage
