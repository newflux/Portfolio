from PIL import Image, ImageOps
import os

base_path = 'public/assets/images/shader background/background.png'
dir_path = 'public/assets/images/shader background/'

# Load and convert to grayscale
img = Image.open(base_path).convert('RGB')
gray = ImageOps.grayscale(img)

# Define colors
colors = {
    'teal': ((0, 0, 0), (0, 128, 128)),       # Black to Teal
    'amber': ((0, 0, 0), (255, 126, 0)),      # Black to Amber/Orange
    'white': ((0, 0, 0), (230, 230, 255)),    # Black to Stark Cosmic White
    'red': ((0, 0, 0), (220, 20, 20)),        # Black to Red
}

for name, (black_point, white_point) in colors.items():
    colorized = ImageOps.colorize(gray, black=black_point, white=white_point)
    out_path = os.path.join(dir_path, f'background_{name}.png')
    colorized.save(out_path)
    print(f'Saved {out_path}')
