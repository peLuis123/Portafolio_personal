#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f https://github.com/peLuis123/peLuis123.github.io master:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push https://github.com/peLuis123/Portafolio_personal.git master:gh-pages

cd -