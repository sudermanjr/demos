helm repo add fairwinds-stable https://charts.fairwinds.com/stable
helm upgrade --install insights-agent fairwinds-stable/insights-agent -f values.yaml \
  --set insights.base64token=$INSIGHTS_PIKUBE_TOKEN \
  --version "2.11.*" \
  --create-namespace \
  --namespace insights-agent
