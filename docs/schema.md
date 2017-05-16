## Schema ##

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## restaurants
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
name            | string    | not null, index
location_id     | integer   | not null, index
rating          | integer   |
price           | string    | not null
hours           | string    | not null
description     | Text      |

## favorites
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
user_id         | integer   | not null
restaurant_id   | integer   | not null

## reservations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
user_id         | integer   | not null, index
restaurant_id   | integer   | not null, index
time_slot       | string    | not null
date            | string    | not null
num_guests      | integer   | not null

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
user_id         | integer   | not null, index
restaurant_id   | integer   | not null, index
rating          | integer   | not null
date_visited    | string    | not null
description     | text      | not null

## locations
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
location        | string    | not null, index, unique
