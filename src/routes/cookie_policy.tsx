import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cookie_policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cookie_policy"!</div>
}
