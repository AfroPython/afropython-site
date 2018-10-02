.RECIPEPREFIX +=

GIT_HASH	?= $(shell git rev-parse --short HEAD)
NAMESPACE	?= afropython
REPOSITORY	?= afropython-site
LABEL		?= $(shell sed -n 's/.*"version": "\(.*\)",/\1/p' package.json)
BASENAME	?= ${REPOSITORY}:${LABEL}
LATEST		?= ${REPOSITORY}:latest

build:
    docker build -t ${BASENAME} -f Dockerfile .
    docker tag ${BASENAME} ${LATEST}
    docker tag ${BASENAME} ${NAMESPACE}\/${BASENAME}

push:
    @docker tag ${BASENAME} ${NAMESPACE}\/${BASENAME}
    docker push ${NAMESPACE}\/${BASENAME} 

info:
    @echo "GIT Hash:	        ${GIT_HASH}"
    @echo "Docker Namespace:	${NAMESPACE}"
    @echo "Docker Repository:	${REPOSITORY}"
    @echo "Docker Label:		${LABEL}"