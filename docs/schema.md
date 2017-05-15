## Schema ##

# users:
- id                  t.integer  not null, primary key
- username            t.string  not null, index, unique
- location            t.string
- email               t.string  not null, index, unique
- password_digest     t.string  not null
- session_token       t.string  not null, index, unique

# restaurants:
- id                  t.integer  not null, primary key, unique
- name                t.string   not null, index, unique
- location            t.string   not null, index
- rating              t.integer
- price               t.string   not null

# favorites:
- id                  t.integer  not null, primary key, unique
- user_id             t.integer
- restaurant_id       t.integer

# reservations:
- id                  t.integer  not null, primary key, unique
- user_id             t.integer
- restaurant_id       t.integer

# reviews:
- id                  t.integer  not null, primary key
- user_id             t.integer  not null, index
- restaurant_id       t.integer  not null, index
- rating              t.integer  not null
- date_visited        t.string   not null
- description         t.text     not null
- food                t.integer  not null
- ambience            t.integer  not null
- service             t.integer  not null
- value               t.integer  not null
