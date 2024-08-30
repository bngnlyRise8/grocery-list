The purpose of this app is to get a nextjs application with a prisma orm connection onto kuberetes

## get the app running locally on docker containers

`docker build -t grocery-list:0.1 .`
`docker compose up -d`

the containers should be running under a single docker network
you can access the app at localhost:3000


## run the images on kubernetes

connect to kubernetes cluster

navigate to the kuberetes folder /kuberenetes

`kubectl apply -f db-secret.yaml`
`kubectl apply -f db.yaml`
`kubectl apply -f app.yaml`