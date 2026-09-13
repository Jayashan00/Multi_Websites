# src/assets

| Folder | Contents |
|---|---|
| `brand/` | Logo mark, full lockup (SVG, infinitely scalable) |
| `patterns/` | ECG trace + medical-cross grid used as background textures |

## Photography & video

All photographs and the hero video are declared in `scripts/assets.manifest.json`
and mapped to friendly keys in `src/lib/media.js`.

* **Out of the box** they are streamed from the Unsplash / Pexels CDNs with
  width + quality parameters, so the site runs with zero setup.
* **To bundle them locally** (offline demo, client handover, slow network):

  ```bash
  npm run assets          # downloads every file into public/assets/images
  echo "VITE_LOCAL_ASSETS=true" > .env
  npm run dev
  ```

  `src/lib/media.js` reads that flag and silently switches every `<img>` and the
  hero `<video>` over to `/assets/images/...`. No component changes needed.

All media is free-to-use under the Unsplash / Pexels licence. Replace any file
with the real hospital's own photography by keeping the same file name.
