#!/bin/bash
set -e  # Stop on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() { echo -e "${GREEN}[INFO]${NC} $1"; }
log_warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }

log_info "Starting local cluster bootstrap..."

# Step 1: Check prerequisites
log_info "Step 1: Checking prerequisites..."
command -v docker >/dev/null 2>&1 || { log_error "Docker is required but not installed."; exit 1; }
command -v kubectl >/dev/null 2>&1 || { log_error "kubectl is required but not installed."; exit 1; }
command -v kind >/dev/null 2>&1 || { log_error "kind is required but not installed."; exit 1; }
log_info "✅Prerequisites check passed"

# Step 2: Create Kind cluster
log_info "Step 2: Creating Kind cluster..."
kind create cluster --name argocd-cluster --config /cluster-configs/kind/kind-config.yaml

# Step 3: Install Argo CD
log_info "Step 3: Installing Argo CD..."
kubectl create namespace argocd --dry-run=client -o yaml | kubectl apply -f -
kubectl apply -n argocd --server-side --force-conflicts -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Step 4: Wait for Argo CD
log_info "Step 4: Waiting for Argo CD to be ready..."
kubectl wait --for=condition=available --timeout=300s -n argocd deployment/argocd-server

# Step 5: Get admin password
log_info "Step 5: Retrieving Argo CD admin password..."
ARGO_PASSWORD=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath='{.data.password}' 2>/dev/null | base64 -d)
if [ -z "$ARGO_PASSWORD" ]; then
    log_warn "Could not retrieve admin password. You may need to reset it."
    ARGO_PASSWORD="(check manually with kubectl)"
fi

log_info "Bootstrap complete!"
log_info ""
log_info "🌐 To access the Argo CD UI, run in another terminal:"
log_info "   kubectl port-forward svc/argocd-server -n argocd 8080:443"
log_info ""
log_info "   Then open: https://localhost:8080"
log_info "   Username: admin"
log_info "   Password: $ARGO_PASSWORD"
log_info ""
log_info "💡 Keep the port-forward terminal open while using the UI."