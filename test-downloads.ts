import { getVideoManifest } from "./src/app/actions";

async function run() {
  const manifest = await getVideoManifest();
  const withDownload = manifest.filter(m => m.hasDownload);
  const withoutDownload = manifest.filter(m => !m.hasDownload);
  console.log(`Total: ${manifest.length}`);
  console.log(`With download: ${withDownload.length}`);
  console.log(`Without download: ${withoutDownload.length}`);
  console.log("\nSample with download:", withDownload.slice(0, 5).map(x => ({ slug: x.slug, downloadUrl: x.downloadUrl })));
  console.log("\nSample without download:", withoutDownload.slice(0, 5).map(x => ({ slug: x.slug, video: x.video })));
}

run();
