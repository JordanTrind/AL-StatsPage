# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

server "91.134.145.53", user: "forge", roles: %w{app}

set :deploy_to, "/home/forge/beta.stats.roleplay.co.uk"

set :branch, "dev"
