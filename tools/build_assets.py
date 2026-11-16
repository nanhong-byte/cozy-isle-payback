# -*- coding: utf-8 -*-
"""把島民 GLB 的貼圖縮到 1024 JPEG，重新封裝後以 base64 寫進 dist/assets.js。
這樣遊戲雙擊 index.html（file://）就能跑，不需要伺服器。
用法： python tools/build_assets.py
"""
import base64, io, json, os, struct, sys
from PIL import Image

SRC = r"E:/Claude/pumpkin-jira-isles/assets/villagers"
MODELS = {
    "cinna": "cinna/review-01/delivery/Cinna.glb",
    "cocoa": "cocoa/review-01/delivery/Cocoa.glb",
    "kuri": "kuri/review-01/delivery/Kuri.glb",
    "matcha": "matcha/review-01/delivery/Matcha.glb",
    "minto": "minto/review-01/delivery/Minto.glb",
    "mochi": "mochi/review-01/delivery/Mochi.glb",
    "persi": "persi/review-03/delivery/Persi.glb",
    "shiro": "shiro/review-01/delivery/Shiro.glb",
    "wasabi": "wasabi/review-01/delivery/Wasabi.glb",
    "lop": "lop/production-20261105/revision-02/delivery/Lop_R2_game_512.glb",
}
TEX = 1024
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "dist", "assets.js")


def repack(path):
    b = open(path, "rb").read()
    jl = struct.unpack("<I", b[12:16])[0]
    j = json.loads(b[20:20 + jl])
    bin0 = b[20 + jl + 8:]
    img_views = {im["bufferView"]: im for im in j.get("images", []) if "bufferView" in im}
    chunks, off = [], 0
    for i, bv in enumerate(j["bufferViews"]):
        o = bv.get("byteOffset", 0)
        data = bin0[o:o + bv["byteLength"]]
        if i in img_views:
            im = Image.open(io.BytesIO(data))
            has_alpha = im.mode in ("RGBA", "LA") and im.getextrema()[-1][0] < 255
            if max(im.size) > TEX:
                im = im.resize((TEX, TEX), Image.LANCZOS)
            buf = io.BytesIO()
            if has_alpha:
                im.save(buf, "PNG", optimize=True)
                img_views[i]["mimeType"] = "image/png"
            else:
                im.convert("RGB").save(buf, "JPEG", quality=86, optimize=True)
                img_views[i]["mimeType"] = "image/jpeg"
            data = buf.getvalue()
        pad = (-len(data)) % 4
        data += b"\x00" * pad
        bv["byteOffset"] = off
        bv["byteLength"] = len(data) - pad
        chunks.append(data)
        off += len(data)
    binn = b"".join(chunks)
    j["buffers"][0]["byteLength"] = len(binn)
    js = json.dumps(j, separators=(",", ":")).encode("utf-8")
    js += b" " * ((-len(js)) % 4)
    total = 12 + 8 + len(js) + 8 + len(binn)
    return (struct.pack("<4sII", b"glTF", 2, total) + struct.pack("<I4s", len(js), b"JSON") + js
            + struct.pack("<I4s", len(binn), b"BIN\x00") + binn)


def main():
    parts, tot = [], 0
    for name, rel in MODELS.items():
        glb = repack(os.path.join(SRC, rel))
        tot += len(glb)
        print(f"{name:8s} {len(glb)/1024:8.0f} KB")
        parts.append(f'"{name}":"{base64.b64encode(glb).decode("ascii")}"')
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.COZY_ASSETS={" + ",".join(parts) + "};\n")
    print(f"total {tot/1024/1024:.1f} MB -> {os.path.getsize(OUT)/1024/1024:.1f} MB assets.js")


if __name__ == "__main__":
    sys.exit(main())
