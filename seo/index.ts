/**
 * SEO barrel export
 * ─────────────────
 * Import page-specific metadata from this single entry point.
 *
 * Usage in a page.tsx:
 *
 *   import { kotihoitoSEO } from "@/seo";
 *   export const metadata = kotihoitoSEO;
 */

export { default as homeSEO } from "./home";
export { default as palvelutSEO } from "./palvelut";
export { default as kotihoitoSEO } from "./kotihoito";
export { default as kotisairaanhoitoSEO } from "./kotisairaanhoito";
export { default as henkilokohtainenApuSEO } from "./henkilokohtainen-apu";
export { default as palveluseteliSEO } from "./palveluseteli";
export { default as hinnastoSEO } from "./hinnasto";
export { default as kieletSEO } from "./kielet";
export { default as asiakkaatKertovatSEO } from "./asiakkaat-kertovat";
export { default as laatu } from "./laatu-ja-hygienia";
export { default as haeTyotaSEO } from "./hae-tyota";
export { default as otaYhteyttaSEO } from "./ota-yhteytta";
export { default as ajanvarausSEO } from "./ajanvaraus";
