import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/guest_controls')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/guest_controls"!</div>
}
