# ICC UH Web App

ICC UH Web App is a Web Application used by ICC UH for business and exposure.

## Contributing

Create a branch for each task/feature using conventions from [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/). Always rebase from the develop branch first.

## Development

Run the development server:

```shellscript
bun dev
```

## Deployment

First, build your app for production:

```sh
bun build
```

Then run the app in production mode:

```sh
bun start
```

Make sure to deploy the output of `bun build`:

- `build/server`
- `build/client`

## Tech Stack

- Language: Typescript
- Framework: Remix (React)
- Caching: [Tanstack Query](https://tanstack.com/query)
- UI Framework: [Tailwind CSS](https://tailwindcss.com/)
