# syntax=docker/dockerfile:1
FROM ruby:3.0.2-alpine
RUN apk add --update --no-cache \
    build-base \
    postgresql-dev \
    nodejs \
    yarn \
    tzdata

WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN bundle install

EXPOSE 8000

CMD ["rails", "server", "-b", "0.0.0.0"]