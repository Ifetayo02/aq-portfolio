# Drop your project screenshots here

Add an image for each project and reference it in `src/lib/content.ts`
using the `image` field on the matching `Project` entry, e.g.:

```ts
image: "/projects/taskflow.png",
```

Expected filenames based on the current content.ts:
- taskflow.png
- planify.png
- os-portfolio.png
- sujood.png

Tips:
- 16:10 landscape screenshots work best (desktop UI shots). The card
  crops to that ratio automatically via `object-fit: cover`.
- If a project's mobile UI deserves its own crop, add an
  `imageMobile` path too — it's optional and falls back to `image`.
- .png, .jpg, or .webp all work. Keep files reasonably sized
  (under ~500KB each) for fast loading.
