#!/bin/bash

clusters=('us-east' 'us-west' 'eu-central')

for cluster in ${clusters[@]}; do
  echo "${cluster}:"
  kubectl --context $cluster get secret argocd-initial-admin-secret -ojson -n argocd | jq .data.password -r | base64 -d
  echo
done
