import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/community_guidelines')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/community_guidelines"!</div>
}
