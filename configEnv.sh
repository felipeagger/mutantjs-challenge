#!/usr/bin/env bash

echo "Starting Configuration"

apt-get update -y
apt-get install -y curl git apt-transport-https ca-certificates gnupg2 software-properties-common
#curl -fsSL https://get.docker.com | bash
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
apt-get update -y
#apt-cache policy docker-ce
apt install -y docker-ce 
curl -L --silent "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
systemctl enable docker
systemctl start docker
systemctl status docker | grep "Active:"
usermod -aG docker ${USER}
chown vagrant:docker /var/run/docker.sock
chmod -R a+rwx /var/run/docker.sock
mkdir -p /var/docker/elastic/data
chmod -R g+rwx /var/docker/elastic
chown -R 1000:1000 /var/docker/elastic

docker pull node:10
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.2.0