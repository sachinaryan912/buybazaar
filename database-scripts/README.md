# BuyBazaar Database - SQL Scripts

This repository contains SQL scripts for managing various databases and other related to buybazaar.

## Database Scripts

### `users_db`

- **Database Name:** users_db
- **Table Name:** users
- **Columns:**
  - uid (INT, AUTO_INCREMENT, PRIMARY KEY)
  - name (VARCHAR(255), NOT NULL)
  - email (VARCHAR(255), NOT NULL)
  - password (VARCHAR(255), NOT NULL)

Scripts:

- `users_db/create_database.sql`: Script for creating the 'users_db' database if it does not exist.
- `users_db/create_table_users.sql`: Script for creating the 'users' table.
- `users_db/insert_sample_data.sql`: Script for inserting sample data into the 'users' table.



## Usage

1. For each database, navigate to its respective folder and run the necessary scripts.
2. Execute other scripts as needed for miscellaneous tasks.

## Notes

- Ensure that you have the necessary permissions to execute these scripts.
- Customize and adapt these scripts based on your specific use case.
