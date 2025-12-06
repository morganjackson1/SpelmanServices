# Image Integration Instructions

You have uploaded 5 Black women images for the Styld app. To add them to the site:

## Quick Steps:

1. **Save the 5 images you uploaded** to your computer (e.g., Downloads folder) with names:
   - image1.jpg (tan/brown background portrait)
   - image2.jpg (flowers background group)
   - image3.jpg (beige background group)
   - image4.jpg (brick background solo)
   - image5.jpg (pink background solo)

2. **Copy them to the provider folder:**
   ```bash
   cp ~/Downloads/image1.jpg public/assets/providers/p1.jpg
   cp ~/Downloads/image2.jpg public/assets/providers/p2.jpg
   cp ~/Downloads/image3.jpg public/assets/providers/p3.jpg
   cp ~/Downloads/image4.jpg public/assets/providers/p4.jpg
   cp ~/Downloads/image5.jpg public/assets/providers/p5.jpg
   ```

3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "Add custom Black women images to providers"
   git push origin main
   ```

4. **Restart the dev server** and refresh the browser at http://localhost:5173

That's it! The images will appear on the site immediately.
