FROM node:14-alpine AS build

WORKDIR /src/app

COPY package.json ./ 
COPY yarn.lock ./

# Alpine doesnt have git
ENV NODE_OPTIONS=--max_old_space_size=8092



RUN apk add git 
RUN yarn install

COPY . .

RUN yarn build 

FROM node:14-alpine

WORKDIR /app
COPY --from=build /src/app/ .

# ENV NUXT_PORT=3000
# ENV NUXT_HOST=0.0.0.0

EXPOSE 3000

CMD ["yarn", "start"]