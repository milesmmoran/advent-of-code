
# karma-playwright-testing-tools
Under Development...

---
This is a testing tool designed to ease and automate front-end testing with playwright.


## local.sh

Depending on the environment you want to test, the id_token from session storage needs to be placed in your `local.sh` file. This allows playwright to skip logins and go straight to testing. Use `npm run gen-auth` after configuring your `local.sh` file to generate the auth token.

```
export DEV_ID_TOKEN=""
export STAGE_ID_TOKEN=""
export PROD_ID_TOKEN=""
```

## Possible Features
### Flexible Onboarding
I'm building a more flexible unboarding process, where a script tries to identify which onboarding step we are on and fill the data appropriately. Errors should be more forgiving and allow for user input before attempting to contine.

### Fetching Invitations
Currently, gmail won't let me fetch invitation links from our sandboxes because it is suspicious of playwright, but it would be nice to skip this step when onboarding.

### Captcha
Currently, you are hit by many Captchas on dev. Disabling this would be nice. As of now, I pause when a Captcha is required.

# Commands
Here's a collection of random commands that could be useful. The `package.json` also has handy commands.


```
npx playwright codegen --save-storage=auth.json

npx i playwright

npx playwright test

npx playwright codegen --load-storage=auth.json github.com/microsoft/playwright

```

# PROD RESTRICTIONS
The prod email is taken from the JWT token associated with the session, with a + timestamp added before the '@'.

A list of permitted company-group combos can be found in `src/shared/constants.ts`. This only includes KarmaCheck - KarmaCheck.