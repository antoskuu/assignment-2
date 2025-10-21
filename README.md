


## Step 1: Start the Fast API REST API

```sh
# Clone the rest api repo
git clone https://github.com/antoskuu/assignment-6-rest-api.git


# Create Environment
python -m venv venv

# Enable it
source venv/bin/activate

# Install dependencies
pip install "fastapi[standard]"

# Start server
fastapi dev restapi.py
```



## Step 2: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

```sh
# Using npm
npm start
```

## Step 3: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

```sh
# Using npm
npm run android
```
