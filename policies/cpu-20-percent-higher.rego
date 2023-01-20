package fairwinds

cpuLimitTooHigh[actionItem] {
  triggerThreshold := 20
  input.kind == "Deployment"
  cpuRequest := units.parse(input.spec.template.spec.containers[_].resources.requests.cpu)
  cpuLimit := units.parse(input.spec.template.spec.containers[_].resources.limits.cpu)
  print(cpuRequest)
  print(cpuLimit)
  percentDifference := round((cpuLimit - cpuRequest)/cpuRequest * 100)

  print(percentDifference)
  percentDifference > triggerThreshold
  actionItem := {
    "title": sprintf("%s cpuLimit should not be more than %d%% higher than the request", [input.kind, triggerThreshold]),
    "description": sprintf("cpu limit is %d%% higher than the request. It should not be more than %d%% greater than the request", [percentDifference, triggerThreshold]),
    "remediation": "Please lower the cpu limit or raise the cpu request",
    "category": "Reliability",
    "severity": 0.5
  }
}
