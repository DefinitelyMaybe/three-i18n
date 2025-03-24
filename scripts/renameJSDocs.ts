import { walk } from "@std/fs";

const targetDir = "../src/content/docs";

async function renameHtmlToMd() {
  try {
    console.log(`Processing directory: ${targetDir}`);

    let renamedCount = 0;

    // Walk through the directory recursively
    for await (const entry of walk(targetDir)) {
      if (entry.isFile && entry.name.endsWith(".html")) {
        const oldPath = entry.path;
        const newPath = entry.path.replace(".html", ".mdx");

        try {
          await Deno.rename(oldPath, newPath);
          // console.log(`Renamed: ${oldPath} -> ${newPath}`);
          renamedCount++;
        } catch (error) {
          console.error(`Error renaming ${oldPath}: ${error}`);
        }
      }
    }

    console.log(`\nDone! Renamed ${renamedCount} files.`);
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    Deno.exit(1);
  }
}

// Run the function
renameHtmlToMd();
