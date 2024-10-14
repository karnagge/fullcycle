# Desafio Full Cycle - Go Lang e Docker

Este repositório foi criado para cumprir o desafio proposto pela **Full Cycle**:

- Criar uma aplicação em Go que imprime **"Full Cycle Rocks!!"**.
- Gerar uma imagem Docker que, ao ser executada, exiba essa mensagem.
- A imagem Docker deve ter menos de **2MB**.
- Publicar a imagem no Docker Hub.
- Disponibilizar o código em um repositório Git público.

## Como Executar a Aplicação

### Executar a Imagem Diretamente do Docker Hub

A imagem está disponível no Docker Hub e pode ser executada com o seguinte comando:

```bash
docker run --rm karnagge/fullcycle
```

Você verá a saída:

```
Full Cycle Rocks!!
```

### Construir e Executar a Imagem Localmente

#### Pré-requisitos

- Docker instalado na sua máquina.
- Git instalado para clonar o repositório.

#### Passos

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/karnagge/fullcycle.git
   ```

2. **Navegue até o diretório do projeto:**

   ```bash
   cd fullcycle
   ```

3. **Construa a imagem Docker:**

   ```bash
   docker build -t karnagge/fullcycle .
   ```

4. **Execute o contêiner:**

   ```bash
   docker run --rm karnagge/fullcycle
   ```

   A saída deverá ser:

   ```
   Full Cycle Rocks!!
   ```

## Detalhes da Implementação

Para garantir que a imagem Docker tenha menos de **2MB**, foram aplicadas as seguintes otimizações:

- **Multi-stage build:** Utilização de multi-stage build no Docker para separar a etapa de compilação da imagem final.
- **Imagem base `scratch`:** A imagem `scratch` é uma imagem vazia que permite criar imagens extremamente leves.
- **Otimizações no build do Go:**
  - **Desabilitar o CGO:** `CGO_ENABLED=0` para gerar um binário estático.
  - **Definir o sistema operacional e arquitetura alvo:** `GOOS=linux` e `GOARCH=amd64`.
  - **Remover símbolos de depuração:** Utilizando `-ldflags="-s -w"` para reduzir o tamanho do binário.

## Arquivos do Projeto

- **`main.go`:** Código fonte em Go que imprime a mensagem.
- **`Dockerfile`:** Arquivo de configuração para construção da imagem Docker.

## Links

- **Docker Hub:** [karnagge/fullcycle](https://hub.docker.com/r/karnagge/fullcycle)
- **GitHub:** [github.com/karnagge/fullcycle](https://github.com/karnagge/fullcycle)

## Contato

- **GitHub:** [@karnagge](https://github.com/karnagge)
- **Docker Hub:** [karnagge](https://hub.docker.com/u/karnagge)

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.