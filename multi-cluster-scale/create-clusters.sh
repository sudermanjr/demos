#!/bin/env bash

k3d cluster create us-east \
    -p "8080:80@loadbalancer" -p "8443:443@loadbalancer" \
    --agents=0 \
    --servers=1 \
    --network=world-network \
    --k3s-arg '--cluster-domain=us-east@server:*' \

# In us-west, we map 80 & 443 to 8081 and 8444.
k3d cluster create us-west \
    -p "8081:80@loadbalancer" -p "8444:443@loadbalancer" \
    --agents=0 \
    --servers=1 \
    --network=world-network \
    --k3s-arg '--cluster-domain=us-west@server:*' \

# In eu-central, we map 80 & 443 to 8082 and 8445.
k3d cluster create eu-central \
    -p "8082:80@loadbalancer" -p "8445:443@loadbalancer" \
    --agents=0 \
    --servers=1 \
    --network=world-network \
    --k3s-arg '--cluster-domain=eu-central@server:*' \

kubectl config delete-context us-east >/dev/null 2>&1
kubectl config rename-context k3d-us-east us-east
kubectl config delete-context us-west >/dev/null 2>&1
kubectl config rename-context k3d-us-west us-west
kubectl config delete-context eu-central >/dev/null 2>&1
kubectl config rename-context k3d-eu-central eu-central
