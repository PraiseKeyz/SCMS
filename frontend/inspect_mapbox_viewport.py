import os

lib_path = os.path.expanduser('~/.pub-cache/hosted/pub.dev/mapbox_maps_flutter-2.25.0/lib/')
for root, dirs, files in os.walk(lib_path):
    for file in files:
        if file.endswith('.dart'):
            with open(os.path.join(root, file), 'r') as f:
                content = f.read()
                if 'Viewport' in content or 'viewport' in content:
                    print(f"File: {file}")
