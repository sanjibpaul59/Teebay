# syntax=docker/dockerfile:1
FROM ruby:3.0.2-alpine
RUN apk add --update --no-cache \
    build-base \
    postgresql-dev \
    postgresql-client\
    nodejs \
    yarn \
    tzdata

WORKDIR /api
COPY . .
COPY Gemfile Gemfile.lock ./
RUN gem install bundler:2.4.6
RUN bundle install

EXPOSE 8000

CMD ["rails", "server", "-b", "0.0.0.0"]