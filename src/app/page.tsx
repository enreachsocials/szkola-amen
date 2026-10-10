'use client'

import Script from 'next/script'
import { htmlContent } from './_html_content'
import { jsContent } from './_js_content'

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <Script id="amen-main" strategy="afterInteractive">
        {jsContent}
      </Script>
    </>
  )
}
