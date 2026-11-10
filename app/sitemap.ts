import type { MetadataRoute } from "next";

const siteUrl = "https://www.samscare.fi";
const routes = [
  "/",
  "/ajanvaraus",
  "/asiakkaat-kertovat",
  "/hae-tyota",
  "/hinnasto",
  "/kielet",
  "/laatu-ja-hygienia",
  "/more",
  "/ota-yhteytta",
  "/palvelut",
  "/palvelut/henkilokohtainen-apu",
  "/palvelut/kotihoito",
  "/palvelut/kotisairaanhoito",
  "/palvelut/palveluseteli",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
