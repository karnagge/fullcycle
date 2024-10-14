# Etapa 1: Construção do binário otimizado
FROM golang:alpine AS builder

WORKDIR /app

COPY main.go .

# Compilando com otimizações
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-s -w" -o fullcycle main.go

# Etapa 2: Imagem final mínima
FROM scratch

COPY --from=builder /app/fullcycle /fullcycle

# Definindo o comando de entrada
ENTRYPOINT ["/fullcycle"]
