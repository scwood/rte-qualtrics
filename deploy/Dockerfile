FROM registry-app.eng.qops.net:5001/base/centos7:latest

MAINTAINER treverh@qualtrics.com

# Install programs
RUN yum -y update
RUN curl --silent --location https://rpm.nodesource.com/setup_4.x | bash - \
  && yum -y install nodejs

RUN yum -y install git-1.8.3.1-5.el7

RUN npm install -g forever

# Setup Enviroment
EXPOSE 80
ENV EXPRESS_PORT=80
WORKDIR /home/default

COPY ./package.json /home/default/package.json
# COPY ./npm-shrinkwrap.json /home/default/npm-shrinkwrap.json

RUN npm install

# Copy files
COPY ./ /home/default

ENV NODE_ENV=production
