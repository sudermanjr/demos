package fairwinds

violation[actionItem] {
 kinds := {"Deployment", "StatefulSet", "Daemonset"}
 container := input.spec.template.spec.containers[_]
 startswith(container.image, "k8s.gcr.io")

 msg := sprintf("container <%v> comes from the deprecated k8s gcr repo - %v", [container.name, container.image])
   actionItem := {
    "title": "K8s CGR registry",
    "description": "Container image comes from deprecated k8s gcr repo",
    "remediation": "Change to the new repo.",
    "category": "Reliability",
    "severity": 0.7,
  }
}

violation[actionItem] {
  kinds := {"Deployment", "StatefulSet", "Daemonset"}
  container := input.spec.template.spec.initContainers[_]
  startswith(container.image, "k8s.gcr.io")
  msg := sprintf("container <%v> comes from the deprecated k8s gcr repo - %v", [container.name, container.image])
  actionItem := {
    "title": "K8s CGR registry",
    "description": "Container image comes from deprecated k8s gcr repo",
    "remediation": "Change to the new repo.",
    "category": "Reliability",
    "severity": 0.7,
  }
}
