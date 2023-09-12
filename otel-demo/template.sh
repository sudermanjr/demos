kns otel-demo
helm template otel-demo open-telemetry/opentelemetry-demo --values values.yaml | kubectl slice -f - -o manifests/
