## Installing

```
npm i https://github.com/santiment/san-webkit
```

## Updating and publishing library

1. Local `master` branch should include all necessary updates
    - Development branches should be based on `master` branch. PRs are merged to `master`; 
2. Run `npm run lib:publish` (make sure the `master` branch is selected before running the script)

## Environment variables

```
process.browser
process.env.IS_DEV_MODE
process.env.IS_PROD_MODE
process.env.IS_STAGE_BACKEND
process.env.IS_PROD_BACKEND
process.env.GQL_SERVER_URL
process.env.MEDIA_PATH
process.env.ICONS_PATH
```
