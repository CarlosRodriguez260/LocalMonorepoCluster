FROM node:22-alpine
WORKDIR /app

COPY src/package.json src/package-lock.json ./
RUN npm ci

COPY src/ .
EXPOSE 4000

CMD ["node", "backend/backend.js"]
