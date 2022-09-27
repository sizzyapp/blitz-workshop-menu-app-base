import dynamic from "next/dynamic"
import { Controller, useFormContext } from "react-hook-form"

// TODO: extract
const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => null,
})
export const ControlledEditor = ({ name }) => {
  const { control } = useFormContext()
  return <Controller control={control} name={name} render={({ field }) => <Editor {...field} />} />
}
