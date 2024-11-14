# Admin Dashboard - User and Role Management

This project is a simple admin dashboard built with Next.js for user and role management. It includes basic features for managing users and assigning roles, with user authentication and permissions management. The app uses a combination of Next.js, CSS framework for styling, and basic functionality for managing users and roles.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)


## Overview

This admin dashboard allows the management of users and roles. Key features include:

- **User List Page**: Displays a list of users and allows the admin to add, update, or delete users.
- **Role Management**: Admin can assign or change roles (Admin or User) when adding or updating a user.
- **Basic Styling**: A simple, clean interface styled using Tailwind CSS for ease of use.

## Installation

To get started with the app, clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/Oluwateezzy/admin-dashboard-frontend/

# Navigate into the project directory
cd admin-dashboard-frontend

# Install the dependencies
npm install

# Run the development server
npm run dev
```

The app will be available at `http://localhost:8080`.


## Features

- **User List**: Displays all users in a table, with options to add, update, and delete.
- **Add/Update User**: A form to add or update users with role selection.
- **Role Management**: Select or change the user role (Admin or User).
- **Basic Styling**: Use Tailwind CSS to style components with a responsive layout.

## Technologies

- **Next.js**: A React framework for building the app and server-side rendering.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **React**: JavaScript library for building UI components.
- **API Routes**: Next.js API routes for handling user-related data.
- **CSS**: Basic styling applied where needed.

## Usage

1. **User List Page**:
   - Displays a table of all users.
   - Includes buttons for adding, updating, and deleting users.
   
2. **Add/Update User Form**:
   - Includes fields for adding/updating user information (name, email).
   - Allows selection of user roles (Admin/User).

3. **Role Management**:
   - Admin can assign roles when adding or updating users.

4. **Delete User**:
   - Users can be deleted from the list.
