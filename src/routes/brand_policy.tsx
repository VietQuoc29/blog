import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/brand_policy')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/brand_policy"!</div>
}
