helm repo add kyverno https://kyverno.github.io/kyverno/
helm repo up
helm upgrade --install kyverno kyverno/kyverno -n kyverno --create-namespace --values values.yaml
