export function assetUrl(path: string): string {
  return new URL(path.replace(/^\//, ''), document.baseURI).toString();
}
