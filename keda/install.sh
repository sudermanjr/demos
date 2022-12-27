helm repo add kedacore https://kedacore.github.io/charts
helm repo up
helm upgrade --install keda kedacore/keda --namespace keda --create-namespace --values values.yaml
