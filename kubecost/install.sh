#!/bin/bash


helm upgrade --install kubecost cost-analyzer \
  --repo https://kubecost.github.io/cost-analyzer/ \
  --namespace kubecost --create-namespace \
  --set kubecostToken="${KUBECOST_TOKEN}" \
  --set global.prometheus.enabled=false \
  --set prometheus.nodeExporter.enabled=false \
  --set prometheus.serviceAccounts.nodeExporter.create=false \
  --set prometheus.kubeStateMetrics.enabled=false \
  --set global.prometheus.fqdn=http://prometheus-operated.prometheus.svc:9090
