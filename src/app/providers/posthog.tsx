// app/providers.tsx
"use client"
import posthog from "posthog-js"
import { PostHogProvider } from "posthog-js/react"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false // IMPORTANTE: Desligamos o padrão...
  })
}

// ... para usar este componente personalizado que captura no App Router
function PostHogPageview(): null {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture(
        "$pageview",
        {
          "$current_url": url,
        }
      )
    }
  }, [pathname, searchParams])

  return null
}


export function PHProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogPageview /> {/* Este componente cuidará de TUDO */}
      {children}
    </PostHogProvider>
  )
}