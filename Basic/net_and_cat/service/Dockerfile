FROM pwn.red/jail
COPY --from=ubuntu:22.04 / /srv
RUN mkdir /srv/app && ln -s /bin/sh /srv/app/run
COPY .flag.txt /srv/app
RUN chmod 444 /srv/app/.flag.txt
