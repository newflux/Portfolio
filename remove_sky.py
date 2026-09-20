import numpy as np
from PIL import Image

def process():
    # Open the image
    img = Image.open('public/assets/images/portal_transparent.png').convert('RGBA')
    data = np.array(img)
    
    # We want to remove the blue sky from the bottom half of the image.
    # The man is roughly in the center bottom.
    # Let's find the blue sky color. It's roughly R < 120, G > 100, B > 150
    # Let's just make a simple heuristic:
    r, g, b, a = data[:, :, 0], data[:, :, 1], data[:, :, 2], data[:, :, 3]
    
    # Sky condition: Blue is dominant
    sky_mask = (b > 130) & (r < 130) & (g > 100) & (b > r + 30)
    
    # We only want to apply this mask to the bottom half (where it covers the text)
    # Let's say from y = 600 downwards
    h, w = data.shape[:2]
    for y in range(int(h * 0.6), h):
        for x in range(w):
            if sky_mask[y, x]:
                data[y, x, 3] = 0 # Make transparent
                
    out_img = Image.fromarray(data)
    out_img.save('public/assets/images/portal_man_alpha.png')
    print("Created portal_man_alpha.png")

if __name__ == '__main__':
    process()
