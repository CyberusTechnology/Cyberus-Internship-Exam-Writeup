FROM golang:latest
WORKDIR /app
COPY main.go go.mod /app
COPY static /app/static
RUN go build

EXPOSE 3000
CMD ["/app/robot"]
