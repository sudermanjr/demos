#!/bin/env bash

clusters=('us-east' 'us-west' 'eu-central')

################
#### Install ArgoCD

for cluster in ${clusters[@]}; do
  ## Create the ArgoCD Namespace and install argocd
  kubectl get ns argocd --context $cluster || kubectl create ns argocd --context $cluster
  kubectl --context $cluster apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
  echo "waiting for argocd to become ready...."
  kubectl --context $cluster -n argocd wait pods --all  --for condition=Ready

  ## Add repo and repo credentials
  kubectl --context $cluster -n argocd create secret generic private-repo-creds --from-literal=type=git --from-literal=url=https://github.com/sudermanjr --from-literal=username=fargle --from-literal=password=$GITHUB_TOKEN --dry-run=client -ojson | kubectl --context $cluster -n argocd apply -f -
  kubectl --context $cluster -n argocd label secret private-repo-creds argocd.argoproj.io/secret-type=repo-creds --overwrite
  kubectl --context $cluster -n argocd apply -f repository.yaml

  ## Add the app-of-apps in order to bootstrap the rest of the argocd apps
  kubectl --context $cluster apply -f manifests/argocd-apps/app-of-apps.yaml
done
