import puppeteer from "puppeteer";

function rgbToHex(rgb) {
  const match = rgb.match(/\d+/g);

  if (!match || match.length < 3) return null;

  const [r, g, b] = match.map(Number);

  return (
    "#" +
    [r, g, b]
      .map((value) => value.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

export async function analyze(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }

  console.log("Navigating to:", url);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const result = await page.evaluate(() => {
    const colorCounts = {};
    const fonts = new Set();

    const elements = [...document.querySelectorAll("*")];

    const addColor = (color, weight) => {
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") {
        return;
      }

      colorCounts[color] = (colorCounts[color] || 0) + weight;
    };

    elements.forEach((element) => {
      const style = getComputedStyle(element);

      // Fonts
      const font = style.fontFamily.split(",")[0].replace(/['"]/g, "").trim();

      if (font) {
        fonts.add(font);
      }

      // Weighted colors
      addColor(style.backgroundColor, 3);
      addColor(style.color, 2);
      addColor(style.borderColor, 1);
    });

    return {
      colorCounts,
      fonts: [...fonts],
    };
  });

  await browser.close();

  // Convert RGB → HEX and merge duplicate colors
  const hexCounts = {};

  Object.entries(result.colorCounts).forEach(([rgb, count]) => {
    const hex = rgb.startsWith("#") ? rgb.toUpperCase() : rgbToHex(rgb);

    if (!hex) return;

    hexCounts[hex] = (hexCounts[hex] || 0) + count;
  });

  const colors = Object.entries(hexCounts)
    .filter(([, count]) => count >= 5)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([hex]) => hex);

  return {
    colors,
    fonts: result.fonts,
  };
}
