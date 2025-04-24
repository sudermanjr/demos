FROM docker.io/library/golang:1.23-alpine
RUN mkdir -p /app/bin
WORKDIR /app
ENV GOBIN=/app/bin
COPY . .

RUN go mod tidy
RUN go install . ./worker

FROM docker.io/alpine:latest

RUN mkdir -p /app/bin
WORKDIR /app/bin
COPY --from=0 /app/bin/worker /app/bin
CMD ["/app/bin/worker" ]
