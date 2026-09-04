import { AnalyticsEvent } from "@/types";

type AnalyticsProvider = {
  track: (event: AnalyticsEvent) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
};

const noopProvider: AnalyticsProvider = {
  track: () => {},
  identify: () => {},
  page: () => {},
};

let provider: AnalyticsProvider = noopProvider;

export function setAnalyticsProvider(p: AnalyticsProvider) {
  provider = p;
}

export function trackEvent(name: string, properties?: Record<string, unknown>) {
  provider.track({ name, properties, timestamp: Date.now() });
}

export function identifyUser(userId: string, traits?: Record<string, unknown>) {
  provider.identify(userId, traits);
}

export function trackPage(name: string, properties?: Record<string, unknown>) {
  provider.page(name, properties);
}

// Predefined events
export const events = {
  componentViewed: (slug: string) => trackEvent("component_viewed", { slug }),
  demoPlayed: (slug: string) => trackEvent("demo_played", { slug }),
  searchUsed: (query: string) => trackEvent("search_used", { query }),
  filterUsed: (filter: string, value: string) => trackEvent("filter_used", { filter, value }),
  pricingClicked: () => trackEvent("pricing_clicked"),
  checkoutStarted: () => trackEvent("checkout_started"),
  purchaseCompleted: (amount: number) => trackEvent("purchase_completed", { amount }),
  componentDownloaded: (slug: string) => trackEvent("component_downloaded", { slug }),
} as const;
