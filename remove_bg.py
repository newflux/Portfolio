from PIL import Image, ImageFilter

def process():
    img = Image.open('public/assets/images/portal.png').convert("RGBA")
    
    # Create a blurred version to eliminate stars
    blurred = img.filter(ImageFilter.GaussianBlur(radius=5))
    
    # We will do a flood fill on the blurred image starting from the center of the portal
    # Portal center is approx at (width/2, height*0.25)
    start_x = img.width // 2
    start_y = int(img.height * 0.25)
    
    # BFS flood fill
    visited = set()
    queue = [(start_x, start_y)]
    
    # Mask of pixels to remove
    to_remove = set()
    
    while queue:
        x, y = queue.pop(0)
        if (x, y) in visited:
            continue
        visited.add((x, y))
        
        # Check if within bounds
        if x < 0 or x >= img.width or y < 0 or y >= img.height:
            continue
            
        r, g, b, a = blurred.getpixel((x, y))
        
        # The starry sky in the blurred image will be very dark.
        # Blue sky is bright blue, torn paper is white/yellow.
        # So we check if the pixel is relatively dark.
        # We can also check if it's not predominantly blue.
        brightness = r + g + b
        
        # Dark threshold. Blue sky is ~ (100, 150, 255) -> 505
        # Torn paper is ~ (200, 200, 200) -> 600
        # Starry sky is ~ (20, 20, 20) -> 60
        if brightness < 250:
            to_remove.add((x, y))
            # Add neighbors
            queue.append((x+1, y))
            queue.append((x-1, y))
            queue.append((x, y+1))
            queue.append((x, y-1))

    # Now apply the mask to the original image
    pixels = img.load()
    for (x, y) in to_remove:
        pixels[x, y] = (0, 0, 0, 0)
        
    img.save('public/assets/images/portal_transparent.png')
    print(f"Removed {len(to_remove)} pixels from portal background.")

if __name__ == '__main__':
    process()
