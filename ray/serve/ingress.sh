
cat ingress.yaml | sed  's/__SVC_NAME__/deepseek-r1-raycluster-7lv55-head-svc/' | kubectl apply -f -
