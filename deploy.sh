#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 提交git
git push -f git@github.com:yzz421/yzz421.github.io.git master

cd -
