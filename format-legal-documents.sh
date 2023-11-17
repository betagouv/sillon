#!/bin/bash

# Find all ".docx" files in the directory "./src/pages/"
find src/pages -iname "*.docx" | while read -r file; do
  echo "File to transform: $file"

  base_dir=$(dirname "$file")

  # Apply transformer
  pandoc -f docx -t gfm-raw_html "$file" -o "$base_dir/index.md" --wrap=none

  if [ $? -eq 0 ]; then
    echo "Transformation succeeded"
  else
    echo "Transformation failed"
  fi
done
