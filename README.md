# Local Monorepo GitOps

Personal project for testing deployment using local k8s deployment and management through Kind, ArgoCD and Kubectl by leveraging a monorepo structure.

## Requirements

This proyect requires the following dependencies to work correctly:
- Docker | Docker Desktop
- Kind
- Kubectl

The proyect manually installs ArgoCD through a bootstrap sequence.

## Monorepo Structure

```text
ProjectDirectory/
├── README.md
├── .gitignore
├── Makefile
├── .env.example
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
│   │       ├── fastapi-test.yaml
│   │       └── (more apps...)
│   └── local-registry/
│       └── registry.yaml
└── apps/
    ├── sample-app/
    │   ├── Dockerfile
    │   ├── src/
    │   └── k8s/
    │       ├── deployment.yaml
    │       └── service.yaml
    └── (more apps...)
```

## Monorepo Reasoning

Each branch can work independently from one another, but the monorepo structure should persist between them.
- Each `app` has to be placed in the `apps/` folder as separate folders.
    + These folders must contain:
        - Source code of app.
        - k8s manifest files for deployment and service (in `yaml` format).
        - A `Dockerfile` to build an image of that app.
- Each `app` also needs their manifest file inside of `cluster-configs/argocd/apps/`.
- If you want to test/deploy in another branch, all ArgoCD app manifests must point to that branch through `repoURL`.
    + By default, they point to `main`, such as the fastapi example.
    + ArgoCD uses this as a source of truth when syncing.
- Checkout the `fastapi-test` app for reference.

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

### Next: `build-all.sh`

- It will build the images of all apps.
    + A `Dockerfile` is needed per app.
- It will load these images into Kind.
    + These are the images accessed by ArgoCD.

### Next: `deploy-all.sh`

- It will deploy all apps through kubectl.
- Deployed apps can be seen in ArgoCD.

## On Windows

Tested with Docker using WSL2
- Uses `Cgroup Driver = cgroupfs`
- Uses `Cgroup Version = 2`

## On POSIX

Untested

## Future Additions

- More Apps
- More Shell Scripts
- Ingress Controller
    + Useful for exposing certain apps to the internet.