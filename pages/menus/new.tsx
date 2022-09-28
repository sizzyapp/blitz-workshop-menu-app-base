import { MenuForm } from "app/menu/components/MenuForm"

const NewMenuPage = () => {
  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Menus</h1>

      <MenuForm
        initialValues={undefined}
        onSubmit={onSubmit}
      />
    </>
  )
}

export default NewMenuPage
