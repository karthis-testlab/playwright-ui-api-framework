## Gerimedica Assignment for Automating UI and API Tests

As part of a technical round interview at Gerimedica, I created and wrote a test framework and test scripts using the Playwright tool for both UI and API test cases.

### UI Testcases

1. TC01 - Scenario A - Verify user can enter new data into the table
2. TC01 - Scenario B - Verify user can edit the row in a table
3. TC02 - Verify broken image
4. TC03 - Verify user can submit the form.
5. TC04 - Verify the progress bar
6. TC05 - Verify the tooltip
7. TC06 - Verify user can drag and drop

### API Testcases

1. TC01 - Creation of user account
   - Scenario 1 - Validate user creation for the valid input
   - Scenario 2 - Validate error response for the wrong password criteria
   - Scenario 3 - Validate error reponse for the existing user name
   - Scenario 4 - Validate created user available in the database
  
2. TC02 - Add a list of books and removed one of added books
   - Scenario 1a - User able to add a lists of books into book store
   - Scenario 1b - Validate error response for the non existing isbn number
   - Scenario 2a - User able to delete a already added book from the book store
   - Scenario 2b - Validate error response for the non existing isbn number

### Start to Dive

> First clone project repo using below mentioend link
> 
> git clone git@github.com:karthis-testlab/KarthikeyanRajendran-GM-Assignment.git (For SSH)
> 
> git clone https://github.com/karthis-testlab/KarthikeyanRajendran-GM-Assignment.git (For HTTPS)
>
> Sceond one run npm install command
> 
> npm i or npm install
>
> Once very got installed happy to run the test command
> 
> npm run test

### Test Run Condition

> npm run test
>
> When running the above command in the CLI, both the UI and API test scripts will execute on the Chromium project.
>
> npm run test:e2e:ui
>
> When running the above command in the CLI, all the UI test scripts will execute on the Chromium project.
>
> npm run test:smoke:ui
>
> When running the above command in the CLI, @smoke tagged UI test scripts will execute on the all project like Chromium, Firefox and Webkit projects.
>
> npm run test:e2e:api
>
> When running the above command in the CLI, all the API test scripts will execute on the Chromium project.
>
> npm run test:smoke:api
>
> When running the above command in the CLI, @smoke tagged API test scripts will execute on the Chromium project.
