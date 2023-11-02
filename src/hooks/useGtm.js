import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function useGtm() {
  const {
    siteConfig: {
      customFields: { gtmId },
    },
  } = useDocusaurusContext();

  // Initialize GTM code snippet
  const gtmCodeSnippet = document.createElement("script");
  gtmCodeSnippet.innerHTML =
    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
    "new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
    "j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
    "'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
    "})(window,document,'script','dataLayer','" + gtmId +"');";
  document.head.appendChild(gtmCodeSnippet);

  // Initialize GTM data layer
  const gtmDataLayerScript = document.createElement("script");
  gtmDataLayerScript.innerHTML = "window.dataLayer = window.dataLayer || [];";
  document.head.appendChild(gtmDataLayerScript);

  // Initialize GTM noscript
  const gtmNoScript = document.createElement("noscript");
  gtmNoScript.innerHTML =
    "<iframe src=\"https://www.googletagmanager.com/ns.html?id=" + gtmId + "\"\n" +
    "height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe>";
  document.body.prepend(gtmNoScript);
}
