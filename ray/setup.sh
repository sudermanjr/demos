#!/bin/bash

helm install prometheus --namespace prometheus --create-namespace prometheus-community/kube-prometheus-stack

kubectl create secret generic hf-secret   --from-literal=hf_api_token=${HF_TOKEN}   --dry-run=client -o yaml | kubectl apply -f -

helm repo add kuberay https://ray-project.github.io/kuberay-helm/
helm repo update

# Install both CRDs and KubeRay operator v1.3.0.
helm install kuberay-operator kuberay/kuberay-operator --version 1.3.0
