#!/bin/bash

if [ -d "node_modules" ]; then
  rm -r node_modules
fi

if [ -d "public/node_modules" ]; then
  rm -r public/node_modules
fi

if [ -d "public/bower_components" ]; then
  rm -r public/bower_components
fi

npm install
cd public/
npm install

echo "BUILD SUCCESSFUL"
