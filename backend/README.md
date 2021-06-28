# user-management
## Backend

A nodeJs backend to handle user requests

### Routes

#### Auth
 - `/signin` - user Login - ` POST ` - returns an auth token
 - `/signup` - create user - ` POST ` - returns user

 #### User
 - `/:id` - get user by ID - `GET` - returns a single user
 **Params**: id - ID of the user

 - `/picture/:id` - get user picture by pictureID - `GET` - returns an image
**Params**: id: - ID of the picture

 - `/manager/:id/add/` - add manager ot the regular user - `GET` - returns a single user
  **Params**: id - ID of the user

 - `/:id` - delete user by ID - `DELETE` - returns a message
 **Params**: id - ID of the user

 - `/:id` - update user by ID - `PUT` - returns a single user
 **Params**: id - ID of the user

 - `/promote/:id` - update user role - `POST` - returns a single user
 **Params**: id - ID of the user

 - `/` - get all users - `POST` - returns users according to the role of the user

### Middlewares

#### Auth
- **isLoggedIn** - check if token is valid

#### Permissions
- **isManagerOrAdmin** - check if user is a manager or admin
- **isAdmin** - check if user is an admin

#### User
- **updatePicture** - update user profile picture
- **promoteRole** - promote role of the user