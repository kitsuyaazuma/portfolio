import fs from "fs";

async function getBlogCount() {
  const url = "https://alvinvin.hatenablog.jp/archive";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const matches = html.match(/<section class="archive-entry /g) || [];
    const count = matches.length;
    return count;
  } catch (error) {
    console.error("Error fetching blog count:", error);
    return 0;
  }
}

async function updateBlogCountFile() {
  const count = await getBlogCount();
  if (count > 0) {
    const content = `export const blogCount = ${count};\n`;
    fs.writeFileSync("src/data/blog.ts", content);
  } else {
    console.error(
      "No blog entries found or an error occurred while fetching the count.",
    );
  }
}

updateBlogCountFile();
