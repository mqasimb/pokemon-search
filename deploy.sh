#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd stage/_book

git init
git config user.name "Qasim Bhatti"
git config user.email "bqasim381@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/mqasimb/pokemon-search.git"
git fetch upstream
git reset upstream/gh-pages

echo "example.com" > CNAME

touch .

git add -A .
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages