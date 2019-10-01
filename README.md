# Mutantjs Challenge (Nodejs)

# Objetivos

API que consuma e carregue a saida da API "https://jsonplaceholder.typicode.com/users", que retorna uma lista de usuário em JSON.

EndPoints: 
- "/users"

Retorna 3 Objetos: 
- websites (Os websites de todos os usuários)  
- ordered (Nome, email e empresa em ordem alfabética) 
- filtered (Usuarios Filtrados pela palavra "suite" no endereço)

Logs das interações estão sendo salvos no ElasticSearch.

Obs: Implementado Testes de Integração, e Docker para Entregar a Aplicação.

# Requisitos

Devera ter instalado `Vagrant` com `VirtualBox` para provisionar sua instância da aplicacão.

Lembretes: Deixar as Porta 8080 e 9200 do seu host local livre, pois serão essas portas que a aplicacão/elasticsearch ira executar.


Para Subir a Aplicacao:
  Acesse a raiz do projeto e rode: 
  
```  
  
  vagrant up

```

E aguardar com carinho, pois o tempo depende da internet e poder de processamento do computador.
// Entre 10 a 20 minutos (Somente a Primeira vez)

# Fluxo de Inicialização da Aplicacao

 1. Baixa e Inicializa uma Instancia Debian no Vagrant;
 2. Instala docker e docker-compose nessa instancia;
 3. Baixa as images do Nodejs e ElasticSearch no docker;
 4. Docker Faz o Build da Imagem do Nodejs com o Fonte da Aplicacao;
 5. Docker-Compose sobe uma stack com o Container do Nodejs e ElasticSearch;

# Endereços e Servicos

No Navegador acesse: http://localhost:Porta/

Aplicacao Nodejs versão 10: Porta 8080;
 
ElasticSearch versão 7.2: Porta 9200; 

VM iniciará como private network (host-only) Com IP: 192.168.1.10;

# Libraries Utilizadas

- Nodejs com Express, Axios(Requisições Http) e Jest(TDD).

# Testes

Para testar a Aplicação rode:

- Npm
```  
npm install 

npm run test
```  

- Yarn
```  
yarn 

yarn test
```  

# Variáveis de ambiente

- PORT; (Porta para Nodejs ouvir - Padrao 8080);

- ELASTIC; (IP:PORTA para Node Conectar ao ElasticSearch - Padrao = 192.168.1.10:9200);

Para Visualizar os Logs do ElasticSearch acesse: http://127.0.0.1:9200/logs/_search/

# Links e Observações

Para Utilizar Vagrant é necessario ter instalado:

```  
  Vagrant: https://www.vagrantup.com/

  VirtualBox: https://www.virtualbox.org/

```  
