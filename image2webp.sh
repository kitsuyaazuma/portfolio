#!/bin/bash

INPUT_DIR="./images"
OUTPUT_DIR="./public/images"

QUALITY=50

if ! command -v cwebp &>/dev/null; then
    echo "Error: cwebp command not found. Install WebP tools first."
    echo "macOS: brew install webp"
    echo "Linux: apt install webp"
    exit 1
fi

find "$INPUT_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r FILE; do
    OUT_PATH="${FILE/$INPUT_DIR/$OUTPUT_DIR}"
    OUT_PATH="${OUT_PATH%.*}.webp"

    mkdir -p "$(dirname "$OUT_PATH")"

    echo "Converting: $FILE → $OUT_PATH"

    cwebp -q $QUALITY "$FILE" -o "$OUT_PATH"
done

echo "Images optimized"
