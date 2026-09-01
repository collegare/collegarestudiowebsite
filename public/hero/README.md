# Hero media

Drop two files here, then fill in `heroMedia` in `lib/site.ts`:

    collegare-hero.mp4          the loop
    collegare-hero-poster.jpg   frame 1, shown before the video decodes

## Encode spec (matched to how Workhorse ships theirs)

    1280 x 720   H.264 High, yuv420p
    ~2.0 Mbps    -> roughly 2.5-3 MB for a 10-12s loop
    10-12s       silent (strip audio entirely, don't just mute)
    +faststart   so it starts playing before the file finishes downloading

    ffmpeg -i source.mp4 \
      -an -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,fps=24" \
      -c:v libx264 -profile:v high -pix_fmt yuv420p -b:v 2000k -maxrate 2400k -bufsize 4000k \
      -movflags +faststart collegare-hero.mp4

    ffmpeg -i collegare-hero.mp4 -vframes 1 -q:v 3 collegare-hero-poster.jpg

Keep it under 4 MB. It loads before anything else on the page.
