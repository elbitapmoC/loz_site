export function getWebpUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  if (url.includes("fm=")) {
    return url.replace(/fm=[^&]*/, "fm=webp");
  }
  return `${url}${url.includes("?") ? "&" : "?"}fm=webp`;
}
