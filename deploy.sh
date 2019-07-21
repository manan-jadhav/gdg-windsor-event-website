#/bin/bash

if [ "$#" -ne 3 ]; then
  echo "Usage: ./deploy.sh <branch> <is_pr> <firebase_token>"
  exit 1
fi

IS_PR="$2"
BRANCH="$1"
FIREBASE_TOKEN="$3"

if [ "$IS_PR" == "false" ]; then
  if [ "$BRANCH" == "master" ]; then
    echo "Deploying to staging..."
    firebase deploy --only hosting:test --token $FIREBASE_TOKEN
  elif [ "$BRANCH" == "release" ]; then
    echo "Deploying to production..."
    firebase deploy --only hosting:prod --token $FIREBASE_TOKEN
  fi
else
  echo "Skipped deploy"
fi