# LocalMonorepoCluster
Personal project for testing deployment using local k8s and ArgoCD through a Monorepo.

## Repository Structure
ProjectDirectory/
├── README.md
├── .gitignore
├── Makefile
├── scripts/
│   ├── cluster/
│   │   ├── create-cluster.sh
│   │   ├── destroy-cluster.sh
│   │   └── bootstrap.sh
│   └── apps/
│       ├── build-all.sh
│       └── deploy-all.sh
├── cluster-configs/
│   ├── kind/
│   │   └── kind-config.yaml
│   ├── argocd/
│   │   ├── install.yaml
│   │   └── apps/
│   │       ├── app-of-apps.yaml      # References this repository
│   │       ├── nginx-app.yaml
│   │       └── (more apps...)
│   └── local-registry/
│       └── registry.yaml
├── apps/
│   ├── sample-app/
│   │   ├── Dockerfile
│   │   ├── src/
│   │   └── k8s/
│   │       ├── deployment.yaml
│   │       └── service.yaml
│   └── (more apps...)
└── .env.example

## Workflow

### Starting Point: `bootstrap.sh`

- It will check if you have Docker, kubectl, and kind installed

- It will create a local Kind cluster (takes 30-60 seconds)

- It will install Argo CD (takes another 30-60 seconds)

- You'll see the Argo CD name/password displayed

If you can't see ArgoCD UI on localhost:8080, run this:

```
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

It will persist on whichever terminal you run it. That terminal closes, you will have to re-run it.

## On Windows

Tested with Docker using WSL2
- Uses `Cgroup Driver = cgroupfs`
- Uses `Cgroup Version = 2`

## On POSIX

Untested