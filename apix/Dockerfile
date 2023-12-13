FROM python:3.11-slim

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip

# Copy local code
ENV APP_HOME /apix

WORKDIR $APP_HOME

COPY . .

# COPY main.py .

ENV FLASK_APP=main.py
ENV FLASK_ENV=development

# Install dependencies.
RUN pip install --no-cache-dir -r requirements.txt

ENV PORT 5001

# Copy the content of the local src directory to the working directory
# COPY main.py .

CMD [ "flask", "run", "--host=0.0.0.0"]
