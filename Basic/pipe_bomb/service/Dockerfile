FROM python:slim AS app

# there is no packages need, how ever without doing anything the image just doesn't work
RUN pip install nothing 

FROM pwn.red/jail
COPY --from=app / /srv
COPY ./chall.py /srv/app/run
RUN chmod +x /srv/app/run
