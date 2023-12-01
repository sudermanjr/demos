#!/bin/env bash

clusters=('us-east' 'us-west' 'eu-central') 

################
#### Install ArgoCD

for cluster in ${clusters[@]}; do
  kubectl get ns argocd --context $cluster || kubectl create ns argocd --context $cluster
  kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
  kubectl --context $cluster apply -f manifests/argocd-apps/app-of-apps.yaml
done
