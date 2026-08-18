from pathlib import Path
from PIL import Image, ImageOps


ROOT = Path('/home/ubuntu/prime-shot-creative-portfolio-v2/client/public/assets')
SOURCE_DIRECTORIES = ('brand', 'covers', 'bts', 'gallery', 'social')
MAX_EDGE = 1600
QUALITY = 82


def optimize(source: Path) -> None:
    if source.suffix.lower() == '.webp' or source.name == 'prime-shot-final-logo.webp':
        return

    target = source.with_suffix('.webp')
    with Image.open(source) as opened:
        image = ImageOps.exif_transpose(opened)
        image.thumbnail((MAX_EDGE, MAX_EDGE), Image.Resampling.LANCZOS)
        if image.mode not in ('RGB', 'RGBA'):
            image = image.convert('RGBA' if 'transparency' in image.info else 'RGB')
        image.save(target, 'WEBP', quality=QUALITY, method=6)


for directory in SOURCE_DIRECTORIES:
    for image_file in (ROOT / directory).iterdir():
        if image_file.is_file():
            optimize(image_file)
