#!/bin/bash
# 手动部署脚本

cd /home/louhao/Phyll1s0.Space

# 确保在 main 分支
git checkout main

# 提交 dist 目录（临时）
git add dist -f
git commit -m "deploy: manual deploy dist"

# 推送到 gh-pages 分支
git subtree push --prefix dist origin gh-pages

echo "Deployed!"
