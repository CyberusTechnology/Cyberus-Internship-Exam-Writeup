FROM pwn.red/jail
COPY --from=ubuntu:22.04 / /srv/
RUN mkdir /srv/app
COPY ./vuln /srv/app/run
COPY ./flag.txt /srv/app/
RUN chmod +x /srv/app/run
