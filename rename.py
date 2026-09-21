# -*- coding: utf-8 -*-
import os
import re

html_files = [
    'index.html',
    'info/index.html',
    'contact/index.html',
    'works/index.html',
    'jesko_hero/index.html',
    'src/App.tsx',
    'src/first_app.tsx',
    'src/first_app_utf8.tsx'
]
js_files = [
    'public/js/i18n.js'
]

replacements = {
    'Luke Baffait': 'Santosh V',
    'Luke': 'Santosh',
    'computer science student in Vannes': 'Software Engineer in Bangalore, India',
    'étudiant en informatique à Vannes': 'Software Engineer in Bangalore, India',
    'computer science student': 'Software Engineer',
    'étudiant en informatique': 'Software Engineer',
    'Vannes': 'Bangalore, India',
    'luke.baffait@yahoo.com': 'santoshv.live@gmail.com',
    'lukebaffait.fr': 'santoshv.live',
    'lukebaffait': 'santoshv'
}

for file_path in html_files + js_files:
    if not os.path.exists(file_path):
        continue
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Apply text replacements
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Replace favicon
    if file_path.endswith('.html'):
        content = re.sub(r'<link\s+rel="icon"\s+type="[^"]+"\s+href="[^"]+">', '<link rel="icon" type="image/png" href="/logo.png">', content)
        content = re.sub(r'<link\s+rel="icon"\s+href="[^"]+">', '<link rel="icon" type="image/png" href="/logo.png">', content)
        # Ensure favicon is replaced even if it was somewhat different
        content = re.sub(r'<link\s+rel="icon"\s+type="image/x-icon"\s+href="/assets/favicon/favicon.ico">', '<link rel="icon" type="image/png" href="/logo.png">', content)
        content = re.sub(r'<link\s+rel="icon"\s+type="image/x-icon"\s+href="assets/favicon/favicon.ico">', '<link rel="icon" type="image/png" href="/logo.png">', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Replacement complete.")
