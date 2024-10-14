# Full Cycle Rocks - Node.js, MySQL, and Nginx with Docker

Este projeto demonstra uma aplicação Node.js que se conecta a um banco de dados MySQL, inserindo e exibindo dados de uma tabela. O projeto é orquestrado com Docker Compose e também utiliza o Nginx como proxy reverso.

## Estrutura do Projeto

- **Node.js**: Aplicação principal, que insere e exibe dados do banco MySQL.
- **MySQL**: Banco de dados para armazenar os nomes.
- **Nginx**: Proxy reverso para redirecionar as requisições para a aplicação Node.js.

### Tecnologias utilizadas

- **Node.js** (v14)
- **MySQL** (v8.0)
- **Nginx**
- **Docker** e **Docker Compose**

## Funcionalidades

- A aplicação exibe a mensagem "Full Cycle Rocks!" junto com a lista de nomes da tabela `pessoas`.
- O nome "Francisco" é inserido automaticamente ao iniciar a aplicação.
- O sistema está configurado para usar uma pool de conexões com o MySQL para melhorar o gerenciamento de conexões ao banco de dados.

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuração e Instalação

### 1. Clonar o Repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

### 2. Estrutura de Arquivos

O projeto contém a seguinte estrutura de arquivos:

```
- projeto/
  - docker-compose.yml
  - nodeapp/
    - Dockerfile
    - app.js
    - package.json
  - nginx/
    - conf.d/
      - default.conf
  - mysql-initdb/
    - init.sql
```

### 3. Arquivo `docker-compose.yml`

O arquivo `docker-compose.yml` define os serviços para o MySQL, Node.js e Nginx.

### 4. Subir os containers

Para subir todos os containers (Node.js, MySQL, Nginx) com o Docker Compose, execute:

```bash
docker-compose up --build
```

Isso irá:

- Iniciar o banco de dados MySQL.
- Inicializar a aplicação Node.js e garantir que ela só será executada após o MySQL estar pronto.
- Configurar o Nginx como proxy reverso para servir a aplicação.

### 5. Acessar a aplicação

Após a execução do Docker Compose, a aplicação estará disponível no navegador. Acesse:

```
http://localhost:8080
```

A aplicação exibirá:

```
Full Cycle Rocks!
- Francisco
- [outros nomes da tabela pessoas]
```

### 6. Verificação do Banco de Dados

Você pode acessar o MySQL dentro do container para verificar os dados inseridos na tabela `pessoas`:

```bash
docker exec -it <mysql_container_name> mysql -u karnagge -p
```

Use a senha `fullcycle`.

Em seguida, execute:

```sql
USE fullcycle;
SELECT * FROM pessoas;
```

## Personalização

Se você deseja modificar o código, você pode alterar o arquivo `app.js` na pasta `nodeapp/`. Após realizar as mudanças, reconstrua o container Node.js:

```bash
docker-compose down
docker-compose up --build
```

## Scripts SQL

O arquivo `init.sql` no diretório `mysql-initdb/` é executado durante a inicialização do container MySQL para criar a tabela `pessoas` e inserir dados iniciais.

```sql
CREATE TABLE IF NOT EXISTS pessoas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL
);

INSERT INTO pessoas (nome) VALUES ('Francisco');
```

Projeto criado como parte do curso **Full Cycle** para exemplificar o uso de Docker com Node.js, MySQL e Nginx.

### Notas Finais:

Se precisar de mais alguma coisa ou ajustes, estou à disposição!