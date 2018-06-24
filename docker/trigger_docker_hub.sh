#!/usr/bin/env bash

curl -H "Content-Type: application/json" --data "{\"docker_tag\": \"${1}\"}" -X POST https://registry.hub.docker.com/u/scaleit/ionic-app-skeleton/trigger/${2}/
