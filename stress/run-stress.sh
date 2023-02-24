#!/bin/bash

helm upgrade --install stress sudermanjr/stress --namespace prod --create-namespace --values stress-values.yaml
