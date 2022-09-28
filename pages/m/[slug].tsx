import React from "react"
import { useParam } from "@blitzjs/next"
import Head from "next/head"

import getPublicMenu from "app/menu/queries/getPublicMenu"

const PublicMenuPage: React.FC = () => {
  const slug = useParam("slug", "string")!

  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>

      <div>
        <h1>{slug}</h1>
      </div>
    </>
  )
}

export default PublicMenuPage
