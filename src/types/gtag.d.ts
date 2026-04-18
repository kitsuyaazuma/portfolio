declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: "js" | "config",
      targetIdOrDate: string | Date,
      config?: {
        page_path?: string;
      },
    ) => void;
  }
}

export {};
