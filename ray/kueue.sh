#!/bin/bash

VERSION=v0.8.2
kubectl delete -f https://github.com/kubernetes-sigs/kueue/releases/download/$VERSION/manifests.yaml

helm install kueue oci://registry.k8s.io/kueue/charts/kueue \
  --version=0.11.3 \
  --namespace  kueue-system \
  --create-namespace \
  --wait --timeout 300s
