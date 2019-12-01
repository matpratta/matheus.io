# My personal website. 2020 edition.

Complete redesign of my website, made to be simple and easy to update and also open-sourced.

## Setting up

Customize the layout as you feel like. You can edit the dark and light themes in the `scss/main.scss` file.

All information regarding your résumé is on the `assets/resume.json` file.

Before deploying to Now, you need to configure the `now.json` to set your own alias and project name. You also need to set the following secrets:

- `sendgrid-key`: Your own SendGrid API key for sending contact emails.
- `contact-from`: The email you're using with SendGrid as the sender.
- `contact-to`: The email you want to receive contact emails.

You can check how to add secrets to Now here: https://zeit.co/docs/v2/build-step/#adding-secrets

## Deployment

This project is created for using with [Now.sh](https://now.sh). Sure, you can run it in whatever platform you desire, it's simply a Vue application, after all, except you will need to replace the contact API with one fitting your provider.

## Author

This project is developed and mantained by Matheus Pratta.

You can check my website here: https://matheus.io