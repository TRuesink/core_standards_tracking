FROM python:3.7
WORKDIR /app
ADD ./backend/requirements.txt /app/backend/
ADD ./backend/wait-for-it.sh /app/backend/


RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./docker /app/docker
ADD ./backend /app/backend