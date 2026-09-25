// Pushes every URL in the live sitemap to Bing via IndexNow (https://www.indexnow.org/documentation).
// Usage: node scripts/indexnow.mjs            (after the site is deployed)
import { readdirSync, readFileSync } from "node:fs";

const SITE = "https://timeback.hominexis.com";
const ENDPOINT = "https://www.bing.com/indexnow";

const keyFile = readdirSync(new URL("../public/", import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file (32 hex chars + .txt) found in public/");
const key = readFileSync(new URL(`../public/${keyFile}`, import.meta.url), "utf8").trim();
const keyLocation = `${SITE}/${keyFile}`;

const live = await fetch(keyLocation);
if (!live.ok || (await live.text()).trim() !== key) {
  throw new Error(`Key file not live at ${keyLocation} (HTTP ${live.status}) — deploy first`);
}

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (urlList.length === 0) throw new Error("Sitemap has no <loc> entries");

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation, urlList }),
});
console.log(`POST ${ENDPOINT} → HTTP ${res.status} ${res.statusText} (${urlList.length} URLs)`);
const body = await res.text();
if (body) console.log(body);
if (res.status !== 200 && res.status !== 202) process.exit(1);
