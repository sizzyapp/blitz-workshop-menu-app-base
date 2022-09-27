import { Input } from "@mantine/core"
import { forwardRef, PropsWithoutRef, ComponentPropsWithoutRef } from "react"
import { useFormContext } from "react-hook-form"

export interface LabeledTextFieldProps {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  placeholder?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>
  labelProps?: ComponentPropsWithoutRef<"label">
}

export const LabeledTextField = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ label, outerProps, labelProps, name, ...props }, ref) => {
    const {
      register,
      formState: { isSubmitting, errors },
    } = useFormContext()
    const error = Array.isArray(errors[name])
      ? // @ts-ignore
        errors[name].join(", ")
      : errors[name]?.message || errors[name]

    return (
      <Input.Wrapper withAsterisk label={label} error={error}>
        <Input disabled={isSubmitting} {...register(name)} {...props} />
      </Input.Wrapper>
    )
  }
)

export default LabeledTextField
