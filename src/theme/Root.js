import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { CookiesConsent } from "@site/src/components/CookiesConsent";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useGtm from "@site/src/hooks/useGtm";
import { SpeedInsights } from "@vercel/speed-insights/next"

// Default implementation, that you can customize
export default function Root({children}) {
  if (useIsBrowser()) {
    useGtm();
  }
  return <>
    {children}
    <Analytics />
    <SpeedInsights />
    <CookiesConsent />
  </>;
}
