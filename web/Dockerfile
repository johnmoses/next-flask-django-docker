FROM node:alpine

ENV PORT 3000

# where our Next.js app will live
ENV APP_HOME /web

# Set /web as the working directory
WORKDIR $APP_HOME

# Copy package.json and package-lock.json
# to the /app working directory
COPY ./package*.json /web/
# COPY ./.env /app/

# Install dependencies in /app
RUN yarn config set network-timeout 600000 -g && yarn install

# Copy the rest of our Next.js folder into /app
COPY . .

# Ensure port 3005 is accessible to our system
EXPOSE 3000

# Run yarn dev, as we would via the command line 
CMD [ "yarn", "dev" ]