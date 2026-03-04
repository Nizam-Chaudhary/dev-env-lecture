FROM node:22-alpine

WORKDIR /app

COPY package.json package.json
RUN npm install

COPY tsconfig.json tsconfig.json
COPY src ./src

RUN npm run build && npm prune --omit=dev

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "run", "start"]
