## Setup

1.  **Clone the repository** (if you haven't already).
2.  **Navigate to the project directory** in your terminal or command prompt.
3.  **Install dependencies:** If you haven't already, run:
    ```bash
    npm install
    ```

## Running the API Tests

You can run the API tests using the following methods:

**1. Using npm scripts (recommended):**

Open your terminal in the project directory and run the appropriate npm script defined in `package.json`:

* **Basic run:**
    ```bash
    npm run test:api
    ```
    (This script is configured to run Newman with your collection and environment, as defined in `package.json`)

* **Run with HTML report (if `newman-reporter-htmlextra` is installed):**
    ```bash
    npm run test:api:report
    ```
    (This script generates an HTML report of the test run)

**2. Directly using Newman in the command line:**

Open your terminal in the project directory and use the `newman run` command directly:

```bash
# Basic run (assuming collection.json is in the current directory)
newman run collection.json

# Run with environment and globals files
newman run collection.json -e testenvironment.postman_environment.json -g globals.json

# Run with HTML extra reporter (if installed)
newman run collection.json -e testenvironment.postman_environment.json -g globals.json -r htmlextra -reporters cli,htmlextra --reporter-htmlextra-export report.html
