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

### `products_db`

- **Database Name:** products_db
- **Table Name:** products
- **Columns:**
  - productId (INT, AUTO_INCREMENT, PRIMARY KEY)
  - productName (VARCHAR(255) NOT NULL)
  - description (TEXT)
  - image_url (VARCHAR(255))
  - price (DECIMAL(10, 2) NOT NULL)
  - category (VARCHAR(50) NOT NULL)
  - subcategory (VARCHAR(50))
  - availableQuantity (INT NOT NULL)
  - rating (DECIMAL(3, 2))
  - reviews (INT)
  - sellerId (INT, FOREIGN KEY REFERENCES sellers(sellerId))

Scripts:

- `products_db/create_database.sql`: Script for creating the 'products_db' database if it does not exist.
- `products_db/create_table_products.sql`: Script for creating the 'products' table.
- `products_db/insert_sample_data.sql`: Script for inserting sample data into the 'products' table.

### `sellers_db`

- **Database Name:** sellers_db
- **Table Name:** sellers
- **Columns:**
  - sellerId (INT, AUTO_INCREMENT, PRIMARY KEY)
  - sellerName (VARCHAR(100) NOT NULL)
  - sellerLocation (VARCHAR(255))
  - sellerContact (VARCHAR(20))

Scripts:

- `sellers_db/create_database.sql`: Script for creating the 'sellers_db' database if it does not exist.
- `sellers_db/create_table_sellers.sql`: Script for creating the 'sellers' table.
- `sellers_db/insert_sample_data.sql`: Script for inserting sample data into the 'sellers' table.


## Usage

1. For each database, navigate to its respective folder and run the necessary scripts.
2. Execute other scripts as needed for miscellaneous tasks.

## Notes

- Ensure that you have the necessary permissions to execute these scripts.
- Customize and adapt these scripts based on your specific use case.
