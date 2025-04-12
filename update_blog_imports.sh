#!/bin/bash

# Function to update style import in a file
update_style_import() {
    local file=$1
    local correct_import
    
    # Get the correct import path based on file location
    if [[ $file == */src/pages/blogs/about.tsx ]] || [[ $file == */src/pages/Blogs.tsx ]]; then
        correct_import="../../styles/blogs/blog-base-style.css"
    elif [[ $file == */src/pages/blogs/*/*/* ]]; then
        correct_import="../../../styles/blogs/blog-base-style.css"
    elif [[ $file == */src/pages/blogs/*/* ]]; then
        correct_import="../../styles/blogs/blog-base-style.css"
    else
        correct_import="../styles/blogs/blog-base-style.css"
    fi
    
    # Remove any existing blog style imports
    sed -i '' -e '/import.*blog.*\.css/d' "$file"
    
    # Add the new import after the last import statement
    awk -v import="$correct_import" '
        BEGIN { added = 0 }
        /^import/ { last_import = NR }
        {
            print $0
            if (NR == last_import && !added) {
                printf "\nimport \"%s\";\n", import
                added = 1
            }
        }
    ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
}

# Find and process all blog-related TypeScript files
find src/pages -type f -name "*.tsx" | while read -r file; do
    if [[ $file == */src/pages/blogs/* ]] || [[ $file == */src/pages/Blogs.tsx ]]; then
        echo "Updating imports in $file"
        update_style_import "$file"
    fi
done