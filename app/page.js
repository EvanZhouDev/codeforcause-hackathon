'use client'
import Icon from "./components/icon.jsx"
import Form from "./components/form.jsx"

export default function Home() {
  return (
    <>
      <Form>
        <Form.PasswordInput />
        <Form.TextInput />
        <Form.Dropdown />
        <Form.Submit />
      </Form>
    </>
  )
}
