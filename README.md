### Comands

# Database
-   run database with docker: docker run -p 5432:5432 -e POSTGRES_PASSWORD=1234 postgres

# Server
-   run server with nodemon: yarn dev:server
-   run server with sucrase: yarn dev

# Sequelize CLI
-   create migration: npx sequelize-cli migration:generate --name < migration_name >
-   run migration: npx sequelize-cli db:migrate
-   rollback migration: npx sequelize-cli db:migrate:undo < migration_name >