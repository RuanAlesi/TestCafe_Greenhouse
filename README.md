# TestCafé Project
There is in this repository the Test Project that validates the web page https://manage-test.lemonpi.io/. You can find how install and run the automated tests, a Test Report and Bug Report.

## Automated Tests
### Installing
The Automated Tests were implemented with TestCafe, so you need install the following programs:
- Node.JS and NPM: https://nodejs.org/en/
- Chrome Browser: https://www.google.com/chrome/

After, open the command prompt from your SO and run these commands:
> npm install testcafe

> npm install testcafe-reporter-html

To take this code, you will need:
- Git: https://git-scm.com/downloads

And after installed, choose a directory for clone with:
> git clone https://github.com/RuanAlesi/TestCafe_Greenhouse.git

	- If you preferer, you can just download this repository in Code -> Download ZIP
	
### Running
Open the command prompt from the created directory and run this command:
> testcafe chrome:headless tests/ --reporter html

### Report
A HTML report will be avaiable in %your_directory%/reports

## Tests Report
TEST CASES
### Login Flow
C1 - Successful login: Validate that the home page is correctly opened.<br>
Steps: 
	
1. open the page https://manage-test.lemonpi.io/r/login
2. inform existed credentials and click on 'Login' button

> Result: the home page is opened

C2 - Failed login: Validate that the home page isn't opened with wrong credentials. <br>
Steps: 
1. open the page https://manage-test.lemonpi.io/r/login
2. inform inexisted credentials and click on 'Login' button

> Result: there is the message 'Invalid email/password combination.'

C3 - Forgotten password: validate that 'Forgot password' feature is working.<br>
Steps:
1. open the page https://manage-test.lemonpi.io/r/login
2. click on 'Forgot password' button and inform a valid email
3. check if the instruction email has received and follow the instructions;
4. Execute the test C1 with the new password;

> Result: the home page is opened

### Advertisers Flow:
C1 - New advertiser: Validate that a new advertiser is correctly added.<br>
Steps:
1. Access the home page;
2. Select the 'Advertisers' page;
3. Click on 'Create advertiser' button;
4. Inform the Advertiser's 'Name', 'Shortcode' and 'Backup URL' and click on 'Create advertiser'

> Result: The advertiser is added, there is the message 'Successfully created advertiser';

C2 - New advertiser rules: Validate that new advertiser rules are correct.<br>
Steps:
1. Access the home page;
2. Select the 'Advertisers' page;
3. Click on 'Create advertiser' button;
4. Inform the Advertiser's 'Name', a 'Shortcode' from other Advertiser, and a wrong HTTP address 'Backup URL' and click on 'Create advertiser'.<br>

> Result: It's not possible to use a shortcode from from other Advertiser and the URL has to be a valid HTTP address;

### My account Flow:
C1 - Edit my account: Validate that my account edition is correctly working.<br>
Steps:
1. Access the home page;
2. Select the 'User management' page;
3. Select your user;
4. Click on 'Edit my account' button;
5. Change your name and click on 'Save' button.<br>
> Result: your profile is updated and there is the message 'Successfully saved'


## Bug Report
### Page Advertisers:
1. The filter by date isn't working;
2. After create a new advertiser, the page isn't reloaded automatically;
3. After being created, the advertiser is not available to be settled, there is just the message: "Whoops, it looks like something went wrong! Unfortunately the requested Advertiser does not exist or you do not have access for it."

### User management	
1. After edit my profile, the page 'My account' still on screen, making not possible return to 'User management';
2. After create a new profile, the Role's user column doesn't show the correct information;