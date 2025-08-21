#!/usr/bin/env bash
set -e

# Thư mục dự án frontend
FE_SRC="/root/novaaff/nova_aff_frontend/nova-aff"
# Thư mục web root mà Nginx phục vụ
FE_DST="/var/www/novaaff_fe"

echo ">>> Bắt đầu build frontend"
cd "$FE_SRC"
npm ci
npm run build

echo ">>> Copy build ra $FE_DST"
sudo rm -rf "$FE_DST"
sudo mkdir -p "$FE_DST"
sudo cp -r dist/* "$FE_DST"

echo ">>> Set quyền cho Nginx"
sudo chown -R www-data:www-data "$FE_DST"
sudo chmod -R 755 "$FE_DST"

echo ">>> Reload Nginx"
sudo systemctl reload nginx

echo ">>> Done!"
