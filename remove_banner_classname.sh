#!/bin/bash

# Find all TypeScript files that contain bannerClassName
find src/pages/blogs -type f -name "*.tsx" -exec grep -l "bannerClassName" {} \; | while read -r file; do
    # Remove the bannerClassName line using sed
    sed -i '' -e '/bannerClassName/d' "$file"
done

echo "Removed bannerClassName from all files"