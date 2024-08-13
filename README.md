# Moving Robot

## Overview

This project implements a robot navigation system using Node.js, Express, TypeScript, and other tools by following functional programming principles.

## Table of Contents

1. [Requirements](#requirements)
2. [Use Cases](#use-cases)
3. [Test Cases](#test-cases)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Testing](#testing)
7. [Future Enhancements](#future-enhancements)

## Requirements

List the functional and non-functional requirements of the project.

### Functional Requirements

- **Room Setup:** The system allows defining the room's size.
- **Robot Movement:** The robot can move forward and turn left or right.
- **Boundary Conditions:** The robot should not move out of bounds.
- **Command Execution:** The system processes a series of commands.
- **Error Handling:** The system manages errors, such as out-of-bounds movements.

### Non-Functional Requirements

- **Performance:** The system should process commands efficiently.
- **Scalability:** The architecture should support future enhancements.
- **Usability:** The API should be user-friendly.
- **Maintainability:** The codebase should be easy to maintain.

## Use Cases

1. **Initialize Room:**

   - **Description:** Define the size of the room where the robot will operate.
   - **Input:** Room dimensions (e.g., 5x7).
   - **Output:** Confirmation of room size.

2. **Set Initial Robot Position:**

   - **Description:** Place the robot at a specific starting position and direction within the room.
   - **Input:** Position coordinates and direction (e.g., 3, 3, N).
   - **Output:** Confirmation of the robot's position and direction.

3. **Move the Robot:**

   - **Description:** Execute a series of commands to move the robot.
   - **Input:** Command string (e.g., LFFRFRFRFF).
   - **Output:** Final position and direction of the robot, or an error if the robot tries to move out of bounds.

4. **Handle Errors:**
   - **Description:** Prevent invalid operations, such as moving the robot out of bounds or providing invalid commands.
   - **Input:** Invalid commands or out-of-bounds movement.
   - **Output:** Error message detailing the issue.

## Test Cases

1. **Default Robot Position:**

   - **Input:** `GET /api/robot/default`
   - **Expected Output:** Default room size, position, and direction (`[10, 10]`, `[0, 0]`, `N`).

2. **Set Custom Pose:**

   - **Input:** `POST /api/robot/custom` with body `{"customSize": [10, 10], "customPosition": [3, 3], "customDirection": "E"}`
   - **Expected Output:** Robot is positioned at `[3, 3]` facing `E`.

3. **Invalid Room Size:**

   - **Input:** `POST /api/robot/custom` with body `{"customSize": [150, 5], "customPosition": [2, 2], "customDirection": "E"}`
   - **Expected Output:** Error message stating the room size is invalid.

4. **Move Robot:**

   - **Input:** `POST /api/robot/move?command=F`
   - **Expected Output:** Robot moves forward and the new position is returned.

5. **Out of Bounds Movement:**
   - **Input:** `POST /api/robot/custom` with body `{"customSize": [10, 10], "customPosition": [9, 9], "customDirection": "N"}` followed by `POST /api/robot/move?command=F`
   - **Expected Output:** Error message stating the robot is out of bounds.

## Setup Instructions

### Prerequisites

- **Node.js:** Version 14.x or higher
- **express.js:** Version 4.19.x or higher
- **npm:** Dependency management
- **TypeScript:** Version 5.5.x or higher
- **ESLint:** Version 9.8.x or higher
- **Prettier:** Version 3.3.x or higher
- **Husky:** Version 9.1.x or higher
- **Jest:** Version 29.7.x or higher
- **Supertest:** Version 7.0.x or higher
- **Nodemon:** Version 2.0.x or higher (Optional for development)

### Development Tools

- **ESLint:** For linting and ensuring code quality.
- **Prettier:** For consistent code formatting.
- **TypeScript:** For static type checking and development.
- **Husky:** For managing pre-commit hooks to enforce linting and testing.
- **Jest:** For running unit and integration tests.
- **Supertest:** For API testing.

### Setup and Installation

1. **Download and Unzip the Project:**

   First, download the zipped project folder (moving-robot) and extract it to your desired location on your local machine and unzip it.

2. **Navigate to Project Folder:**

```bash
cd path/to/moving-robot
```

3. **Install Root Dependencies::**

```bash
# from root
npm install
```

4. **Install backend Dependencies::**

```bash
# from backend
cd backend
npm install
```

### Run the Application

Run the application either from backend or root in development mode.

```bash
# from backend
npm run start:dev

# from root
cd ..
npm run dev-backend
```

## Usage

### API Endpoints

1. **Get Default Pose**

- Method: `GET`.
- Endpoint: `/api/robot/default`.
- Description: Returns the default room size, robot position, and direction.

1. **Set Custom Pose**

- Method: `POST`.
- Endpoint: `/api/robot/custom`.
- Description: Sets the custom room size, robot position, and direction.
- Body:

```bash
{
  "customSize": [5, 5],
  "customPosition": [2, 2],
  "customDirection": "N"
}
```

1. **Move Robot**

- Method: `POST`.
- Endpoint: `/api/robot/move`.
- Description: Moves the robot based on the provided command.
- Query Parameter: Moves the robot based on the provided command.

  - `command`: The command to execute (L, R, F).

### Example Usage with curl

```bash
# Get default pose
curl -X GET "http://localhost:3000/api/robot/default"

# Set custom pose
curl -X POST "http://localhost:3000/api/robot/custom" -H "Content-Type: application/json" -d '{"customSize": [5, 5], "customPosition": [2, 2], "customDirection": "N"}'

# Move robot
curl -X POST "http://localhost:3000/api/robot/move?command=F"

```

## Testing

Running Tests once or in watch mode.

```bash
# Run once from root
npm test

# Run in watch mode from root

npm run test:watch
```

## Future Enhancements

### 1. Expanded Movement Commands

- **Diagonal Movement:** Allow the robot to move diagonally with new commands (e.g., D1 for top-right, D2 for bottom-right, etc.).
- **Reverse Movement:** Introduce a command for moving the robot backward.

### 2. Enhanced Error Reporting

- **Detailed Logs:** Improve error logging to include more detailed information, such as the exact command that caused an issue.
- **Retry Mechanism:** Implement a feature allowing users to retry commands that failed due to errors.

### 3. User Interface

- **Web Interface:** Develop a simple web-based GUI for controlling the robot instead of using API commands directly.
- **Real-Time Visualization:** Display the robot's movements in real-time on a grid representing the room.

### 4. API Improvements

- **Versioning:** Introduce API versioning to ensure backward compatibility as new features are added.
- **Rate Limiting:** Implement rate limiting on the API to prevent abuse.

### 5. Database Integration

- **State Persistence:** The robot's state would be saved in the database, ensuring that the state is maintained even after server restarts.
- **Scalability:** With a centralized database, multiple instances of the application could share the robot's state, allowing for distributed setups.

### 6. Deployment Options

- **Dockerization:** Containerize the application using Docker to simplify deployment.
- **Cloud Deployment:** Explore deployment options on cloud platforms like AWS, Azure, or Google Cloud for scalability.
