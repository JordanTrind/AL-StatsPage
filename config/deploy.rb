# config valid only for current version of Capistrano
lock "3.8.2"

set :application, "statspage"
set :repo_url, "git@bitbucket.org:roleplayuk/statspage.git"
set :keep_releases, 2

set :ssh_options, {
    forward_agent: true,
    auth_methods: ["publickey"],
    keys: ["~/.ssh/id_rsa"]
}
