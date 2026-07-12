#!/bin/bash
set -e

source "$(dirname "$0")/../utils/common.sh" 2>/dev/null || true

echo "Building application images..."

for app_dir in apps/*/; do
    if [ -f "$app_dir/Dockerfile" ]; then
        app_name=$(basename "$app_dir")
        echo "Building $app_name..."
        docker build -t "$app_name:local" "$app_dir"
        kind load docker-image "$app_name:local" --name argocd-cluster
    else
        log_warn "  No Dockerfile found in $app_dir, skipping build..."
    fi
done

echo "All images built and loaded to cluster!"