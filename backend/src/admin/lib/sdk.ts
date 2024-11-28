import Medusa from "@medusajs/js-sdk";

export const backendUrl = "https://server-production-34b0.up.railway.app";

export const sdk = new Medusa({
  baseUrl: backendUrl,
  auth: {
    type: "session",
  },
});

// useful when you want to call the BE from the console and try things out quickly
if (typeof window !== "undefined") {
  (window as any).__sdk = sdk;
}
