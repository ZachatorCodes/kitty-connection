#!/usr/bin/env bash
# exit on error
set -o errexit

# Build commands for front end to create the production build
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# Build commands for back end
bundle install
bundle exec rake db:migrate

# if you have seed data, run this command for the initial deploy only to avoid duplicate records
# bundle exec rake db:seed 

# for destructive behavior
# DISABLE_DATABASE_ENVIRONMENT_CHECK=1