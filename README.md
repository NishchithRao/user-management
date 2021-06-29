# user-management

A web app to create and manage users

For more information please check the readme of frontend and backend.

## Build and Run the app

`docker-compose up --build`

### Sequence Diagram

The Sequence diagram shows the sequence in which the request is processed and how the response gets back. To the user.
When user requests some data, a redux action is fired. A middeleware checks if the user is logged in by chec if the token exists and wether it is valid. If the user is not logged in, user is redirected for login.

If the user is logged in, the saga middleware sends a request to the backend. The backend recieves the request and again here it is checked if the token is valid. If the token is valid, the controller processes the request and contacts the database for data. It sends back the data.

The saga middleware recieves the response and stored in the redux store. The UI accesses the store for data and proccesses it to show it to the user.
The error responses sent back are processed if any and the further processes stop immediatley.

![Sequence Diagram](https://i.ibb.co/XsrfqxP/Sequence-Diagram.png)

### Use Case Diagram

The following diagram shows the possible operations and the permissions which can be provided to the respective type of user.
The Admin can view all users, edit users as well as create new user.
The manager can ony view and edit users under his supervision but he cannot delete them. He aso cannot create new users.
A regular user can view and update only his/her account.

![use Case Daigram](https://i.ibb.co/WsgMdHN/use-case.png)