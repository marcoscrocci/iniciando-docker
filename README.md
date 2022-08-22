# Docker comandos

### Listar containers ativos:
docker ls

### Listar todos os containers:
docker ls -a

### Remover uma imagem e containers:
docker rmi <nome> -f

### Remover um container:
docker rm <id>

### Executar um container sem prender o terminal:
docker run -d <nome>

### Parar um container:
docker stop <ip>

### Executar um container especificando a porta de ligação com o computador hospedeiro:
docker run -d -p 8000:80 <nome>   (onde 8000 é a porta de acesso e 80 é a porta do container que está o serviço)

### Verificar os logs:
docker logs <id> -f

### Criar um arquivo index.html e copiar para o container na pasta do nginx:
docker run -d -p 80:80 -v $(pwd):/usr/share/nginx/html nginx:1.19.10-alpine

### Entrar no terminal dentro do container:
docker exec -it <id> /bin/bash

### Gerar uma imagem a partir do Dockerfile:
docker build -t minha-imagem-node .
docker image ls | grep minha-imagem-node

### Gerar uma imagem para enviar para o Docker Hub
docker build -t marcoscrocci/minha-imagem-node-prod -f Dockerfile.prod .

### Enviar a imagem para o Docker Hub
docker push marcoscrocci/minha-imagem-node-prod



# 
# Docker Compose

### Documentação:
https://docs.docker.com/compose/install/

### Instalação:
sudo apt-get update 
sudo apt-get install docker-compose-plugin

### Criar o arquivo de configurações na pasta raiz do projeto:
docker-compose.yaml

### Arquivo de Configuração: 
docker-compose.yaml



### Executar a aplicação pelo docker compose:
docker compose up

### Executar sem travar o prompt do terminal:
docker compose up -d

### Entrar um comando dentro do container:
docker compose exec app node -v
docker compose exec app npm -v

### Entrar dentro do terminal do container:
docker compose exec app bash (ou sh)

### Depois de mudar o Dockerfile, devemos rodar um novo build:
docker compose up -d --build

### Entrar no MySQL:
docker compose exec db bash
mysql -uroot -proot

### Remover os containers do compose:
docker compose down

### Instalar a Extensão Remote Container
Digitar Ctrl+Shift+P e selecionar Remote-Container:...
...Open...
...Rebuild...
...Reopen WSL...
etc.

### Repositório da Live:
https://github.com/codeedu/live-imersao-fullcycle9-dev-com-docker
