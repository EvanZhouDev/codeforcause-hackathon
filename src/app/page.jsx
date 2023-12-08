'use client'
import Form from "@/components/form.jsx"

export default function Home() {
  return (
    <>
      <Form>
        <Form.PasswordInput id="test1" />
        <Form.TextInput id="test2" />
        <Form.Dropdown id="test3" />
        <Form.Submit />
      </Form>
    </>
  )
}
