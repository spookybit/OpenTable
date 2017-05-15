## Schema ##

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
location        | string    |

## restaurants
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
name            | string    | not null, index, unique
location        | string    | not null, index
rating          | integer   |
price           | string    | not null

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

## restaurants
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key, unique
user_id         | integer   | not null, index, unique
restaurant_id   | string    | not null
rating          | integer   | not null
date_visited    | string    | not null
description     | integer   | not null
food            | string    | not null
ambience        | integer   | not null
service         | string    | not null
value           | string    | not null
