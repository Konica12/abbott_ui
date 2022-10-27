# Abott-UI-Tests
## Pre-Requisites

Download & Install below listed software: 
1. NodeJS need to be downloaded with latest version
   https://nodejs.org/en/download
   * open command prompt and check the version
      - run below command
      - node  --version
   * supported node version is 16.X.X

1. Clone the repo 

   - Get GIT_URL from clone button
   - open command prompt/Terminal
   - Use this command to clone: git clone <GIT_URL>
    
     or

2. Download

   - Change branch to development 
   - Click the Download button
   - Then extract the code


## How to run 

 For the test should be configured codeceptjs with webdriver environment.
  
   - open terminal window
   - navigate to project location
   - run below command
      ```
      npm install
      ```
   - update configuration in config/.env
   
      - configure with required field
               url="<url>"
              ``
      - update the test data in csv placed in the path 'tests\features\data'
   - npm run test    
   ```

To run in debug mode:

1. npm install
2. npm run run:tests

## Note
1. The test cases are written in BDD format 
2. The ISO codes and the locale value have been taken from below npm packages
   "country-locale-map": "^1.8.8",
   "iso-639-1": "^2.1.15"



