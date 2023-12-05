#!/bin/bash

curl -LO https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.crds.yaml
mv cert-manager.crds.yaml ./manifests/cert-manager/
helm template cert-manager -n cert-manager jetstack/cert-manager --version 1.13.2  | kubectl slice -f - -o ./manifests/cert-manager/

helm template polaris -n polaris fairwinds-stable/polaris --values polaris.values.yaml | kubectl slice -f - -o ./manifests/polaris/

helm template kyverno -n kyverno kyverno/kyverno --values kyverno.values.yaml | kubectl slice -f - -o manifests/kyverno

helm template argocd -n argocd argo/argo-cd --values argocd.values.yaml | kubectl slice -f - -o manifests/argocd/

mkdir -p manifests/policy-reporter
helm template policy-reporter policy-reporter/policy-reporter -n policy-reporter --values policy-reporter.values.yaml | kubectl slice -f - -o manifests/policy-reporter/
