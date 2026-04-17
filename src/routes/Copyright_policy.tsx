import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Copyright_policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Copyright_policy"!</div>
}
