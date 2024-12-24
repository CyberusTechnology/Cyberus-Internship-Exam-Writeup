docker build -t find-the-flag .
docker run -d --name find-the-flags -p 7777:80  find-the-flag