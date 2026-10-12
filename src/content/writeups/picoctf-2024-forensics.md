---
title: "picoCTF 2024 — Forensics: Hidden in Plain Sight"
date: "2024-03-20"
tags: ["Forensics", "Steganography", "CTF"]
category: "CTF Write-up"
event: "picoCTF 2024"
difficulty: "Medium"
excerpt: "Analyzing a PNG file to extract hidden data using LSB steganography and metadata analysis techniques."
---

# picoCTF 2024 — Forensics: Hidden in Plain Sight

## Challenge Description

We received a suspicious image file from a compromised server. Find the hidden message.

**Points:** 250  
**Category:** Forensics

## Initial Analysis

First, check basic file metadata:

```bash
$ file suspicious.png
suspicious.png: PNG image data, 800 x 600, 8-bit/color RGB, non-interlaced

$ exiftool suspicious.png
ExifTool Version Number: 12.60
Comment: Hmm, nothing here...
```

## Steganography Analysis

Running `strings` revealed nothing obvious. Let's try LSB analysis:

```python
from PIL import Image

img = Image.open('suspicious.png')
pixels = list(img.getdata())

bits = ''
for pixel in pixels:
    for channel in pixel[:3]:
        bits += str(channel & 1)

# Convert bits to text
message = ''
for i in range(0, len(bits), 8):
    byte = bits[i:i+8]
    if len(byte) == 8:
        char = chr(int(byte, 2))
        if char == '\x00':
            break
        message += char

print(message)
```

Output:
```
picoCTF{st3g0_1s_n0t_s3cur3_xD}
```

## Flag

```
picoCTF{st3g0_1s_n0t_s3cur3_xD}
```

## Tools Used

- `exiftool` — Metadata extraction
- `strings` — String analysis  
- Python PIL — LSB steganography extraction
- `binwalk` — Embedded file detection
