// import db from "./index"

import { SecurePassword } from "@blitzjs/auth"
import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * to easily generate realistic data.
 */
const seed = async () => {
  const hashedPassword = await SecurePassword.hash("foobar123")

  await db.user.create({ data: { email: "foo@bar.com", hashedPassword } })
  await db.user.create({ data: { email: "bar@bar.com", hashedPassword } })
}

export default seed
