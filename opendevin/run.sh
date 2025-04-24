#!/bin/bash

# The directory you want OpenDevin to modify. MUST be an absolute path!
mkdir -p $(pwd)/workspace
export WORKSPACE_BASE=$(pwd)/workspace

docker run \
    -e SANDBOX_RUNTIME_CONTAINER_IMAGE=docker.all-hands.dev/all-hands-ai/runtime:0.14-nikolaik \
    -e SANDBOX_USER_ID=$(id -u) \
    -e WORKSPACE_MOUNT_PATH=$WORKSPACE_BASE \
    -e LOG_ALL_EVENTS=true \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v $WORKSPACE_BASE:/opt/workspace_base \
    --add-host host.docker.internal:host-gateway \
    --name openhands-app \
    -p 3000:3000 \
    docker.all-hands.dev/all-hands-ai/openhands:0.14

#    -e LLM_API_KEY="ollama" \
#    -e LLM_MODEL="ollama/llama3.2" \
#    -e LLM_EMBEDDING_MODEL="local" \
#    -e LLM_BASE_URL="http://localhost:11434" \
