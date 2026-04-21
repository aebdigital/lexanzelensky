import os
import re
import unicodedata

def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)

def slugify_filename(filename):
    name, ext = os.path.splitext(filename)
    return slugify(name) + ext.lower()

sources_dir = 'public/sources'
mappings = {}

for root, dirs, files in os.walk(sources_dir):
    for filename in files:
        if filename.startswith('.'): continue
        safe_name = slugify_filename(filename)
        if safe_name != filename:
            old_path = os.path.join(root, filename)
            new_path = os.path.join(root, safe_name)
            os.rename(old_path, new_path)
            
            # Create mapping for string replacement
            # Convert paths to web paths
            old_web = old_path.replace('public/sources', '/sources')
            new_web = new_path.replace('public/sources', '/sources')
            mappings[old_web] = new_web
            
            # Since Macs use NFD, the old string might be different in code than what os.walk returned.
            # So let's map the literal ascii version or just find all URLs that look like image paths in code.

import glob
search_dirs = ['app', 'components', 'lib']
extensions = ['.tsx', '.ts', '.css']
for d in search_dirs:
    for root, dirs, files in os.walk(d):
        for f in files:
            if any(f.endswith(ext) for ext in extensions):
                p = os.path.join(root, f)
                with open(p, 'r') as file:
                    content = file.read()
                
                changed = False
                for old_web, new_web in mappings.items():
                    # code might have literal spaces rather than URL encoded
                    if old_web in content:
                        content = content.replace(old_web, new_web)
                        changed = True
                    # Also try NFD normalized versions as they appear in code
                    old_nfc = unicodedata.normalize('NFC', old_web)
                    old_nfd = unicodedata.normalize('NFD', old_web)
                    if old_nfc in content:
                        content = content.replace(old_nfc, new_web)
                        changed = True
                    if old_nfd in content:
                        content = content.replace(old_nfd, new_web)
                        changed = True

                if changed:
                    with open(p, 'w') as file:
                        file.write(content)

print(f"Renamed {len(mappings)} files and updated references.")
