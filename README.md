# Mutantjs Challenge

Requisitos :


Devera ter instalado `Vagrant` com `VirtualBox` para provisionar sua instância da aplicacão.

Lembretes: Deixar as Porta 8080 e 9200 do seu host local livre, pois serão essas portas que a aplicacão/elasticsearch ira executar, 

como pedido -> ( 
... 2. Este aplicativo inicia na porta 8080 no host local ).


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


#Frameworks Utilizadas

- Nodejs com Express, Axios(Requisições Http) e Jest(TDD).

# Variáveis de ambiente

- PORT; (Porta para Nodejs ouvir - Padrao 8080)

