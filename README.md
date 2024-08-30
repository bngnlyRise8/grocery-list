The purpose of this app is to get a nextjs application with a prisma orm connection onto kuberetes

## get the app running locally on docker containers

`docker build -t grocery-list:0.1 .` \
`docker compose up -d` \

the containers should be running under a single docker network \ 
you can access the app at localhost:3000


## run the images on kubernetes -n default

connect to kubernetes cluster \
navigate to the kuberetes folder /kuberenetes \

`kubectl apply -f db-secret.yaml` \
`kubectl apply -f db.yaml` \
`kubectl apply -f app.yaml` \

## run the images on kubernetes using helm 

### dev

* assuming this is a clean cluster \

`helm install devrelease helm --values helm/values.yaml -f helm/values-dev.yaml -n dev --create-namespace` \

* to upgrade \
`helm upgrade devrelease helm --values helm/values.yaml -f helm/values-dev.yaml -n dev` \

* to rollback \
`helm rollback devrelease -n dev` \

### prod
* assuming this is a clean cluster \

`helm install devrelease helm --values helm/values.yaml -f helm/values-dev.yaml -n prod --create-namespace` \

* to upgrade \
`helm upgrade devrelease helm --values helm/values.yaml -f helm/values-dev.yaml -n prod` \

* to rollback \
`helm rollback devrelease -n prod` \