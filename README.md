## Gerimedica Assignment for Automating UI and API Tests

As part of a technical round interview at Gerimedica, I created and wrote a test framework and test scripts using the Playwright tool for both UI and API test cases.

### UI Testcases

1. TC01 - Scenario A - Verify user can enter new data into the table **(Smoke Test)**
2. TC01 - Scenario B - Verify user can edit the row in a table **(Smoke Test)**
3. TC02 - Verify broken image
   - TC02a - Verify broken image using visual comparison
   - TC02b - Verify broken image using src attribute url
4. TC03 - Verify user can submit the form. **(Smoke Test)**
5. TC04 - Verify the progress bar
6. TC05 - Verify the tooltip
7. TC06 - Verify user can drag and drop

### API Testcases

1. TC01 - Creation of user account
   - Scenario 1 - Validate user creation for the valid input **(Smoke Test)**
   - Scenario 2 - Validate error response for the wrong password criteria **(Smoke Test)**
   - Scenario 3 - Validate error reponse for the existing user name
   - Scenario 4 - Validate created user available in the database **(Smoke Test)**
  
2. TC02 - Add a list of books and removed one of added books
   - Scenario 1a - User able to add a lists of books into book store **(Smoke Test)**
   - Scenario 1b - Validate error response for the non existing isbn number
   - Scenario 2a - User able to delete a already added book from the book store **(Smoke Test)**
   - Scenario 2b - Validate error response for the non existing isbn number

### Dependencies npm package

| Package Name     | Version   | Purpose                                                                              |
| :------------    | :-------: | :-------                                                                             |
| @playwright/test | 1.37.1    | Playwright enables reliable end-to-end testing for modern web/api apps               |
| @faker-js/faker  | 8.0.2     | Generate massive amounts of fake (but realistic) data for testing and development    |
| dotenv           | 16.3.1    | Dotenv is a zero-dependency module that loads environment variables from a .env file |

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
> 

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
> 

### Project Folder Structure

```md
KarthikeyanRajendran-GM-Assignment
├── base-api
│   └── base-http-methods.ts
├── e2e
│   ├── api
│   │   ├── TC01-validate-user-creation-api.spec.ts
│   │   └── TC02-validate-add-delete-book.spec.ts
│   └── ui
│       ├── TC01-validate-data-create-modify.spec.ts
│       ├── TC02-validate-broken-image.spec.ts
│       ├── TC03-validate-form-submition.spec.ts
│       ├── TC04-validate-progress-bar.spec.ts
│       ├── TC05-validate-hover-tooltip.spec.ts
│       └── TC06-validate-drag-drop.spec.ts
├── object-repositories
│   ├── BrokenLinkImagePage.ts
│   ├── DroppablePage.ts
│   ├── ElementsPage.ts
│   ├── FormsPage.ts
│   ├── HomePage.ts
│   ├── InteractionsPage.ts
│   ├── PracticeFormPage.ts
│   ├── ProgressBarPage.ts
│   ├── ToolTipPage.ts
│   ├── WebTablePage.ts
│   └── WidgetsPage.ts
├── pages
│   ├── broken-link-image-page.ts
│   ├── droppable-page.ts
│   ├── elements-page.ts
│   ├── forms-page.ts
│   ├── home-page.ts
│   ├── interactions-page.ts
│   ├── practice-form-page.ts
│   ├── progress-bar-page.ts
│   ├── tool-tips-page.ts
│   ├── webtable-page.ts
│   └── widgets-page.ts
└── utils
    ├── data-utils.ts
    └── object-repositories-handler.ts
```
>
> base-api --> The 'base-api' folder consists of common code for calling HTTP methods and frequently used logic.
>
> e2e/api --> The 'e2e/api' folder consists of the test scripts used to validate the API logic and functionality.
>
> e2e/ui --> The 'e2e/ui' folder consists of the test scripts used to validate the UI logic and functionality.
>
> object-repositories --> An object repository is a central location or database where information about the objects (such as UI elements) of an application under test is stored. It serves as a repository for storing, managing, and accessing information about these objects, making it easier to interact with them in automated tests.
>
> pages --> The 'pages' folder consists of various page classes that have relevant actions, designed based on the Page Object Model (POM).
>
> utils --> The 'utils' folder consist sets of functions that provide commonly used functionality or tools to make programming tasks easier. Here we have two libraries file. One is generating test data based on the need and another one is object repository helper which helps to fetch element from object repositories.
> 