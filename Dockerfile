FROM node:12.5.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm run build
COPY ./ ./
CMD npm start -- --port ${PORT:-8080}