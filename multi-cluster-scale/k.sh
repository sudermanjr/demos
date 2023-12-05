#!/bin/env bash

clusters=('us-east' 'us-west' 'eu-central')

for cluster in ${clusters[@]}; do
  echo $cluster
  kubectl --context $cluster "$@"
done
