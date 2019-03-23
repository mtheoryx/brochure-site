# README

## About

This is a Gatsby static site primarly developed on a Twitch live stream. The goal was to have conditional content for what would
be client-specific images/text vs "safe for stream" content.

This is accomplished using a technique similar to how i18n/l10n is done.

## Development

## Building

## Storybook

## Deployment

Currently, dev/prod is really streaming/prod. There are a set of
npm run commands defined in client-source/package.json.

Any command that includes `:stream` is configured to deploy to the
dev S3 bucket, and include the sanitized content.

Running any command that does not include `:stream` will pull real
client content and deploy to the production S3 bucket.

## Notes

- This repo has a shelf life, as I will hand it over for actual client development soon. This will result in a hard-fork of the repo, and privatizing the code.
- Feel free to learn from this repo, but don't expect sustained development on it.
