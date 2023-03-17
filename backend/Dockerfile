FROM ruby:3.0.2 as development

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /teebay/backend
COPY Gemfile /teebay/backend/Gemfile
COPY Gemfile.lock /teebay/backend/Gemfile.lock
RUN bundle install


COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT [ "entrypoint.sh" ]
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]


FROM development as dev-envs
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF
# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /