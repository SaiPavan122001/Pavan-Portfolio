import { chromium } from "playwright";

const url = process.argv[2] || "http://localhost:5173";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await page.waitForTimeout(2000);

// 1. LinkedIn links in Contact + Footer
await page.evaluate(() => {
  const el = document.getElementById("contact");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 10);
});
await page.waitForTimeout(1500);

const liLinks = page.locator('a[href*="linkedin.com"]');
const n = await liLinks.count();
console.log("linkedin links found:", n);
for (let i = 0; i < n; i++) {
  const link = liLinks.nth(i);
  const popupPromise = context.waitForEvent("page", { timeout: 8000 }).catch(() => null);
  await link.click();
  const popup = await popupPromise;
  if (popup) {
    await popup.waitForLoadState("domcontentloaded", { timeout: 20000 }).catch(() => {});
    console.log(`OK   linkedin[${i}] -> ${popup.url()}`);
    await popup.close();
  } else {
    console.log(`FAIL linkedin[${i}] -> NO NEW TAB (href=${await link.getAttribute("href")})`);
  }
}

// 2. project card sizes (should be equal within each row)
await page.evaluate(() => {
  const el = document.getElementById("projects");
  if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + 10);
});
await page.waitForTimeout(2000);
const cards = await page.evaluate(() =>
  [...document.querySelectorAll(".proj-card")].map((c) => {
    const r = c.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height), title: c.querySelector(".proj-card__title")?.textContent?.slice(0, 30) };
  })
);
console.log("card sizes:", JSON.stringify(cards, null, 1));
const hs = new Set(cards.map((c) => c.h));
console.log("distinct card heights:", [...hs].join(", "), hs.size === 1 ? "(all equal ✓)" : "(NOT equal ✗)");

// 3. screenshot projects grid
await page.screenshot({ path: "scripts/projects-layout.png" });
console.log("screenshot saved: scripts/projects-layout.png");

await browser.close();







