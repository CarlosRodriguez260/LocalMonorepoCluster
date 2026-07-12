#!/bin/bash
set -e

source "$(dirname "$0")/../utils/common.sh" 2>/dev/null || true

echo "Deploying all applications via Argo CD..."

# Apply all Application definitions
for app_file in cluster-configs/argocd/apps/*.yaml; do
    if [ -f "$app_file" ]; then
        echo "  Deploying $(basename "$app_file")..."
        kubectl apply -f "$app_file"
    fi
done

echo "All applications registered with Argo CD!"

# Show status
echo "Application status:"
kubectl get applications -n argocd