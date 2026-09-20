from PIL import Image

img = Image.open('public/assets/images/portal_transparent.png').convert('RGBA')
w, h = img.size

# The man's body starts roughly at 55% height (just below the rolled paper)
crop_y = int(h * 0.55)
man_crop = img.crop((0, crop_y, w, h))

man_crop.save('public/assets/images/portal_man.png')
print(f"Cropped man: {w}x{h-crop_y} (from y={crop_y})")
print(f"Image dimensions: {w}x{h}")
