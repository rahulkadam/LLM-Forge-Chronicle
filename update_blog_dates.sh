#!/bin/bash

# Script to update all blog post dates to 2025
# Finds all .tsx files in the blogs directory and updates their date attributes

BLOG_DIR="/Users/rkadam/Documents/project/repo/poc/LLM-Forge-Chronicle/src/pages/blogs"

# Find all TSX files and update dates from 2023/2024 to 2025
find "$BLOG_DIR" -name "*.tsx" | while read -r file; do
  echo "Processing $file"
  
  # Update dates with format like date="March 25, 2024" to date="March 25, 2025"
  # First, identify if the date is from 2023 or 2024
  if grep -q 'date="[^"]*202[34]"' "$file"; then
    # Replace 2023 or 2024 with 2025
    sed -i '' 's/\(date="[^"]*\)202[34]\(".*\)/\12025\2/g' "$file"
    echo "  Updated date in $file"
  else
    echo "  No date found or already updated in $file"
  fi
done

echo "All blog dates have been updated to 2025"