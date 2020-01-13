#! /bin/bash

set -e

name=$npm_package_config_docker_image_org_name/$npm_package_config_docker_image_name
gc_image=gcr.io/$npm_package_config_project/$npm_package_config_service

echo $name
echo $gc_image

docker build -t $name . \
  --force-rm \
  --build-arg modulePath=$npm_package_config_modulePath \
  --build-arg distFolder=$npm_package_files_0

docker tag $name \
  $gc_image
#
docker push gcr.io/$npm_package_config_project/$npm_package_config_service
#
gcloud run deploy $npm_package_config_service \
  --image $gc_image \
  --platform managed \
  --allow-unauthenticated \
  --region europe-west1
