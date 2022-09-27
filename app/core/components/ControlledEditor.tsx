import { Input } from "@mantine/core"
import dynamic from "next/dynamic"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"

// @mantine/rte only works in the browser so we need to use dynamic import and ssr: false
const Editor = dynamic(() => import("@mantine/rte"), {
  ssr: false,
  loading: () => <h3>Loading editor...</h3>,
})

export const ControlledEditor: React.FC<{ name: string; label?: string }> = ({ name, label }) => {
  const formContext = useFormContext()

  return (
    <Input.Wrapper label={label || name}>
      <Controller
        name={name}
        control={formContext.control}
        render={(props) => <Editor {...props.field} />}
      />
    </Input.Wrapper>
  )
}
