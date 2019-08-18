#!/usr/bin/env bash

echo "Starting Services"

systemctl start docker
systemctl status docker | grep "Active:"
chmod +x /usr/local/bin/docker-compose
usermod -aG docker ${USER}
chown vagrant:docker /var/run/docker.sock
chmod -R a+rwx /var/run/docker.sock
mkdir -p /var/docker/elastic/data
chmod -R g+rwx /var/docker/elastic
chown -R 1000:1000 /var/docker/elastic

cd /vagrant/
docker-compose build
docker-compose up -d