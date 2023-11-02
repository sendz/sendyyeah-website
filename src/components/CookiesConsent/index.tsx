'use client';

import React from "react";
import { pushDataLayer } from "@site/src/helpers/gtm";
import { useCookie } from "react-use";

export const CookiesConsent = () => {

  const [cookiesConsentCookie, updateCookiesConsentCookie] = useCookie('cookies_consent_config')
  const [showCookiesConsent, setShowCookiesConsent] = React.useState(!cookiesConsentCookie);

  const cookieConsent = (accepted: boolean) => {
    pushDataLayer({ event: 'cookie_consent', cookie_accepted: accepted });
    updateCookiesConsentCookie(JSON.stringify({ accepted }));
    setShowCookiesConsent(false);
  }

  if (cookiesConsentCookie && !showCookiesConsent) {
    // return a floating button to reconfigure the cookies
    return (
      <div className="fixed right-8 bottom-8 shadow-xl">
        <button className="daisy-btn daisy-btn-primary" onClick={() => setShowCookiesConsent(true)}>Cookies</button>
      </div>
    )
  }

  return (
    <div className="daisy-card w-96 bg-base-100 shadow-xl fixed right-8 bottom-8">
      <div className="daisy-card-body items-center text-center">
        <h2 className="daisy-card-title">Cookies!</h2>
        {cookiesConsentCookie && (
          <p>You have already configured your cookies, and here is your decision last time: <span className="font-bold">{JSON.parse(cookiesConsentCookie)?.accepted ? 'Accepted' : 'Denied'}</span>.</p>
        )}
        <p>We are using cookies for no reason.</p>
        <div className="daisy-card-actions justify-end">
          <button className="daisy-btn daisy-btn-primary" onClick={() => cookieConsent(true)}>Accept</button>
          <button className="daisy-btn daisy-btn-ghost" onClick={() => cookieConsent(false)}>Deny</button>
        </div>
      </div>
    </div>
  )
}
