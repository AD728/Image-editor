---

## Project Overview

This Next.js project is an Image Editor application that allows users to upload images, overlay text on them, and add borders. It also includes authentication functionality with login and signup features, storing user data in localStorage.

## Components

### 1. ImageEditor Component

- **Description**: The main component rendering the entire application.
- **Responsibility**: Integrating other components, managing state, and handling user interactions.
- **Components Integrated**:
  - ImageUpload: Handles image upload functionality.
  - TextOverlay: Manages overlay text options.
  - BorderStyle: Controls border style options.
  - ImageCanvas: Displays selected image with 

### 2. ImageUpload Component

- **Description**: Handles the image upload functionality.
- **Responsibility**: Allows users to select an image file from their device to be edited.

### 3. TextOverlay Component

- **Description**: Manages overlay text options.
- **Responsibility**: Enables users to input text, select font size, and choose text color for overlay.

### 4. BorderStyle Component

- **Description**: Controls border style options.
- **Responsibility**: Allows users to choose border width, color, and style for the image.

### 5. ImageCanvas Component

- **Description**: Displays the selected image with overlay text and border.
- **Responsibility**: Renders the selected image with applied overlay text and border.

## Authentication Flow

### 1. Signup Component

- **Description**: Allows new users to create an account.
- **Responsibility**: Collects user details like username, email, and password for registration. Stores user data in localStorage.

### 2. Login Component

- **Description**: Enables existing users to log into their accounts.
- **Responsibility**: Validates user credentials against stored data in localStorage. Grants access to the Image Editor upon successful authentication.

## Project Setup

1. **Installation**: Clone the repository and install dependencies.

```bash
git clone 
cd 
npm install
```

2. **Run Development Server**: Start the Next.js development server.

```bash
npm run dev
```

3. **Access Application**: Open your browser and navigate to `http://localhost:3000` to access the Image Editor application.

## Usage

1. **Signup**: Navigate to the signup page and create a new account by providing username, email, and password.
2. **root**: Once signed up, go to the login page and enter your credentials to access the Image Editor.
3. **Image Editing**: Upload an image, add overlay text, customize text options, and choose border style to edit the image.
4. **Save Image**: After editing, save the image with applied changes.

## Future Enhancements

- Implement backend authentication with secure storage.
- Allow users to save their edited images to cloud storage.
- Support more image editing features like filters and effects.

---
