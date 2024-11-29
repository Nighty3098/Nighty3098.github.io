#!/bin/bash

npm install -g prettier

find . -type f -regex '.*\.(html|css|js)' -print0 | while IFS= read -r -d $'\0' file; do
    prettier --write "$file"
    echo "🚀 Formaing: $file"
done
rm -rf node_modules

echo "Formatting completed successfully!"
