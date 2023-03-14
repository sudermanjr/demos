package fairwinds

violation[actionItem] {
  kinds := {"Deployment", "StatefulSet", "Daemonset"}
  container := input.spec.template.spec.containers[_]
  startswith(container.image, "k8s.gcr.io")
  actionItem := {
     "title": "Deprecated K8s CGR registry",
     "description": "Container image comes from deprecated k8s gcr repo",
     "remediation": "Change the image to pull from registry.k8s.io - see the annoucnement at https://kubernetes.io/blog/2023/02/06/k8s-gcr-io-freeze-announcement/",
     "category": "Reliability",
     "severity": 0.7,
  }
}

violation[actionItem] {
  kinds := {"Deployment", "StatefulSet", "Daemonset"}
  container := input.spec.template.spec.initContainers[_]
  startswith(container.image, "k8s.gcr.io")
  actionItem := {
     "title": "Deprecated K8s CGR registry",
     "description": "Container image comes from deprecated k8s gcr repo",
     "remediation": "Change the image to pull from registry.k8s.io - see the annoucnement at https://kubernetes.io/blog/2023/02/06/k8s-gcr-io-freeze-announcement/",
     "category": "Reliability",
     "severity": 0.7,
  }
}
