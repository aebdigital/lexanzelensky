import os, re, unicodedata
def slugify(value):
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore').decode('ascii')
    value = re.sub(r'[^\w\s-]', '', value).strip().lower()
    return re.sub(r'[-\s]+', '-', value)
def slugify_filename(filename):
    name, ext = os.path.splitext(filename)
    return slugify(name) + ext.lower()

sources_dir = 'public/partneri'
mappings = {}
for root, dirs, files in os.walk(sources_dir):
    for filename in files:
        if filename.startswith('.'): continue
        safe_name = slugify_filename(filename)
        if safe_name != filename:
            old_path = os.path.join(root, filename)
            new_path = os.path.join(root, safe_name)
            os.rename(old_path, new_path)
            mappings[old_path.replace('public/partneri', '/partneri')] = new_path.replace('public/partneri', '/partneri')
            
search_dirs = ['app', 'components', 'lib']
extensions = ['.tsx', '.ts', '.css']
for d in search_dirs:
    for root, dirs, files in os.walk(d):
        for f in files:
            if any(f.endswith(ext) for ext in extensions):
                p = os.path.join(root, f)
                with open(p, 'r') as file: content = file.read()
                changed = False
                for old_web, new_web in mappings.items():
                    if old_web in content:
                        content = content.replace(old_web, new_web)
                        changed = True
                if changed:
                    with open(p, 'w') as file: file.write(content)
