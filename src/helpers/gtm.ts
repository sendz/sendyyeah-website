// helpers/gtm.ts
type WindowWithDataLayer = Window & {
  dataLayer: Record<string, any>[];
}

declare const window: WindowWithDataLayer;

export const pushDataLayer = (data: Record<string, any>) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push(data);
  } else {
    console.log(data);
  }
}
