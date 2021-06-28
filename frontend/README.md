# user-management

## Frontend

A web app to create and manage user

### Features

- Manage Users
    - Admin - manages all users
        - Create user
        - Update User
        - Delete User
        - Update role of users
        - Add supervisor / manager
        - view all users
    - Manager - manage users under his/her supervision
        - update user
        - view user under his/her supervision

- Restricted Routes
    All Routes except Signin are protected

- Validate Token expiry
    Token is verified on every request

- Redux stores
    - Modules
        - user
            Manage user operations
        - form
            Use forms for user operations