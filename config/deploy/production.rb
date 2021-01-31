# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server "5.196.79.143", user: "statspanel", roles: %w{app}

set :deploy_to, "/home/statspanel/stats/"

set :branch, "master"
