'use client'

import { useEffect } from 'react'
import { htmlContent } from './_html_content'
import { jsContent } from './_js_content'

export default function Page() {
  useEffect(() => {
    const script = document.createElement('script')
    script.textContent = jsContent
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  )
}
