# Repository Structure

## Core folders

features/                → scenario files
src/step_definitions/    → step system
support/                 → api / auth / db / utils

## Features

features/advisors/
  get_advisors.feature
  get_advisors+me.feature
  get_advisors+{advisorid}.feature

## Step system

functions/ → logic
steps/     → mapping

## Support

support/
  api/
  db/
  utils/
  world.js
