### Edit these variables ###
IMG_NAME=applied-predictive-techonologies
PORT=3041
NAME=$(IMG_NAME)
TAG=latest
VOLUME_TO_MOUNT=$(shell pwd)
### End of edit ###

IMG=registry-app.eng.qops.net:5001/profserv/$(IMG_NAME)
CONTAINER=$(NAME)
RUNOPTS=-p $(PORT):80
VOLUME_DESTINATION=/home/default

runenter: rm
	docker run -it $(RUNOPTS) --name $(CONTAINER) -v $(VOLUME_TO_MOUNT):$(VOLUME_DESTINATION) -e QUALTRICSHOSTNAME=dev $(IMG):$(TAG) /bin/bash

run: rm
	docker run -d $(RUNOPTS) --name $(CONTAINER) -e QUALTRICSHOSTNAME=dev $(IMG):$(TAG) npm start

push:
	docker push $(IMG):$(TAG)

build:
	docker build --pull -t $(IMG):$(TAG) -f ./deploy/Dockerfile ./.

test: rm
	docker run $(RUNOPTS) --name $(CONTAINER) --rm -e QUALTRICSHOSTNAME=dev $(IMG):$(TAG) npm test

rm:
	docker rm -f $(CONTAINER) || true

enter:
	docker exec -it $(CONTAINER) /bin/bash