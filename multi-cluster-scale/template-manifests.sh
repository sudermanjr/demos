#!/bin/env bash

curl -LO https://github.com/cert-manager/cert-manager/releases/download/v1.13.2/cert-manager.crds.yaml
mv cert-manager.crds.yaml ./manifests/cert-manager/
helm template cert-manager -n cert-manager jetstack/cert-manager --version 1.13.2  | kubectl slice -f - -o ./manifests/cert-manager/
