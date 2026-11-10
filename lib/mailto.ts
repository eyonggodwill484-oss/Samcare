export function createMailtoLink(subject: string, body: string): string {
  return `mailto:info@samscare.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
