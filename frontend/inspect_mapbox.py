import os
import glob

lib_path = os.path.expanduser('~/.pub-cache/hosted/pub.dev/mapbox_maps_flutter-2.25.0/lib/')
for root, dirs, files in os.walk(lib_path):
    for file in files:
        if file.endswith('.dart'):
            with open(os.path.join(root, file), 'r') as f:
                content = f.read()
                if 'IndicatorPosition' in content or 'LocationComponent' in content:
                    print(f"File: {file}")
                    for i, line in enumerate(content.split('\n')):
                        if 'IndicatorPosition' in line or 'LocationComponent' in line:
                            print(f"{i+1}: {line.strip()}")
