kubectl create namespace ollama-apps
kubectl create namespace kagent
kubectl apply --server-side=true -f https://raw.githubusercontent.com/nekomeowww/ollama-operator/v0.10.7/dist/install.yaml

helm install kagent-crds oci://ghcr.io/kagent-dev/kagent/helm/kagent-crds --namespace kagent --create-namespace

KAGENT_DEFAULT_MODEL_PROVIDER=ollama helm install kagent oci://ghcr.io/kagent-dev/kagent/helm/kagent --namespace kagent --set providers.default="ollama"
