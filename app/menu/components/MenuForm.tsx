import React from "react"

import { Form } from "app/core/components/Form"
import { ControlledEditor } from "app/core/components/ControlledEditor"
import LabeledTextField from "app/core/components/LabeledTextField"

export const MenuForm = ({ onSubmit, initialValues }) => {
  return (
    <Form
      initialValues={initialValues}
      submitText={initialValues?.id ? "Update Menu" : "Create Menu"}
      onSubmit={onSubmit}
    >
      <LabeledTextField name="title" label="Title" />
      <LabeledTextField name="slug" label="Slug" />
      <ControlledEditor name="body" />
    </Form>
  )
}
