import { chromium } from "playwright";
/* eslint-disable */

const url = process.argv[2] || "http://localhost:4173";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: "networkidle" });
await page.evaluate(() => {
  document.documentElement.style.scrollBehavior = "auto";
});
await page.waitForTimeout(2500);

const out = "C:/Users/Mukesh/AppData/Local/Temp/shots";
// hero
await page.screenshot({ path: `${out}/01-hero.png` });
// scroll through to fire triggers
const h = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < h; y += 700) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(120);
}
await page.waitForTimeout(600);

const sections = ["about", "experience", "capabilities", "skills", "projects", "contact"];
for (const id of sections) {
  await page.evaluate((i) => {
    const el = document.getElementById(i);
    const y = el ? el.getBoundingClientRect().top + window.scrollY : 0;
    window.scrollTo(0, y + 10);
  }, id);
  await page.waitForTimeout(400);
  if (id === "skills") {
    await page.evaluate(() => window.scrollBy(0, 300));
    await page.waitForTimeout(400);
  }
  await page.screenshot({ path: `${out}/02-${id}.png` });
}
// skills mid-scroll state
await page.evaluate(() => document.getElementById("skills")?.scrollIntoView({ behavior: "instant" }));
await page.waitForTimeout(400);
await page.mouse.wheel(0, 1400);
await page.waitForTimeout(500);
await page.screenshot({ path: `${out}/02-skills-mid.png` });

// mobile
await page.setViewportSize({ width: 390, height: 844 });
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/03-mobile-hero.png` });
await page.evaluate(() => document.getElementById("projects")?.scrollIntoView());
await page.waitForTimeout(800);
await page.screenshot({ path: `${out}/03-mobile-projects.png` });

await browser.close();
console.log("done");