#!/bin/env bash

curl -LO https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.crds.yaml
mv cert-manager.crds.yaml ./manifests/cert-manager/
helm template cert-manager -n cert-manager jetstack/cert-manager --version 1.13.2  | kubectl slice -f - -o ./manifests/cert-manager/

helm template polaris -n polaris fairwinds-stable/polaris --values polaris.values.yaml | kubectl slice -f - -o ./manifests/polaris/

curl -LO https://github.com/kyverno/kyverno/releases/download/v1.10.0/install.yaml
kubectl slice -f install.yaml -o ./manifests/kyverno/
rm install.yaml