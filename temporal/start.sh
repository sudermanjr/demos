#! /bin/bash

kind create cluster --config cluster.yaml
helm upgrade --install --create-namespace --namespace stackgres stackgres-operator  https://stackgres.io/downloads/stackgres-k8s/stackgres/latest/helm/stackgres-operator.tgz
kubectl get ns temporal || kubectl create ns temporal
kubectl apply -f db.yaml
helm upgrade --install --repo https://go.temporal.io/helm-charts temporal temporal --timeout 900s --namespace temporal --create-namespace --values values.postgresql.yaml
kubectl apply -f https://kind.sigs.k8s.io/examples/ingress/deploy-ingress-nginx.yaml
echo "DB Password: $(kubectl get secret temporal-db -ojson | jq .data[\"superuser-password\"] -r | base64 -d)"
