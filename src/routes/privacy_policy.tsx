import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy_policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/privacy_policy"!</div>
}
