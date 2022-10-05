#!/usr/bin/env bash

git pull origin "${CI_COMMIT_BRANCH}" || :

export IMAGE_NAME="uprodit_wiki"
export VERSION="${CI_COMMIT_BRANCH}-${CI_COMMIT_SHORT_SHA}"

# Slack
export SLACK_USERNAME="uprodit_doc"
export SLACK_EMOJI=":uprodit:"
export SLACK_CHANNEL="#uprodit-prod"
