import os

ROOT_PATH = r"C:\projects\luxe-shop"
OUTPUT_FILE = os.path.join(ROOT_PATH, "project_structure_with_content.txt")

# پوشه‌هایی که باید نادیده گرفته شوند
EXCLUDE_DIRS = {
    "node_modules",
    ".next",
    ".git",
    ".vscode",
    ".idea",
    "dist",
    "build",
    "out",
    "public",
}

# فایل‌هایی که باید نادیده گرفته شوند
EXCLUDE_FILES = {
    ".gitignore",
    "package-lock.json",
    "yarn.lock",
    "pnpm-lock.yaml",
    "icon.png",
    "project_tree.py",
    "project_structure.txt",
    "run_tree.bat",
}

# پسوند فایل‌هایی که محتواشون چاپ میشه
TEXT_EXTENSIONS = {
    ".ts", ".tsx", ".js", ".jsx",
    ".json", ".md", ".css", ".html",
    ".mjs", ".cjs", ".txt"
}


def write_tree(path, file, prefix=""):
    try:
        items = sorted(os.listdir(path))
    except PermissionError:
        return

    items = [
        item for item in items
        if item not in EXCLUDE_DIRS and item not in EXCLUDE_FILES
    ]

    for index, item in enumerate(items):
        full_path = os.path.join(path, item)
        is_last = index == len(items) - 1

        connector = "└── " if is_last else "├── "
        file.write(prefix + connector + item + "\n")

        if os.path.isdir(full_path):
            extension = "    " if is_last else "│   "
            write_tree(full_path, file, prefix + extension)


def write_file_contents(path, file):
    for root, dirs, files in os.walk(path):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

        for name in files:
            if name in EXCLUDE_FILES:
                continue

            full_path = os.path.join(root, name)
            ext = os.path.splitext(name)[1]

            if ext not in TEXT_EXTENSIONS:
                continue

            relative_path = os.path.relpath(full_path, ROOT_PATH)

            file.write("\n" + "=" * 80 + "\n")
            file.write(f"📄 FILE: {relative_path}\n")
            file.write("=" * 80 + "\n\n")

            try:
                with open(full_path, "r", encoding="utf-8") as f:
                    file.write(f.read())
            except UnicodeDecodeError:
                file.write("❌ [امکان خواندن فایل به صورت متنی وجود ندارد]\n")


def main():
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        # بخش اول: ساختار پروژه
        f.write("📁 PROJECT STRUCTURE\n")
        f.write("=" * 80 + "\n\n")
        f.write("luxe-shop\n")
        write_tree(ROOT_PATH, f)

        # بخش دوم: محتوای فایل‌ها
        f.write("\n\n📄 FILE CONTENTS\n")
        f.write("=" * 80 + "\n")
        write_file_contents(ROOT_PATH, f)

    print("✅ ساختار + محتوای فایل‌ها با موفقیت ساخته شد")
    print("📄 مسیر فایل خروجی:")
    print(OUTPUT_FILE)


if __name__ == "__main__":
    main()
