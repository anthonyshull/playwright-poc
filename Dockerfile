FROM node:21-bookworm-slim

COPY package.json .
COPY package-lock.json .
RUN npm ci
RUN npx playwright install --with-deps chromium
