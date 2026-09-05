import { getVideoManifest } from "./src/app/actions";
getVideoManifest().then(m => console.log(m.slice(0, 3)));
