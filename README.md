# sillon

Work in progress, stay tuned :) !

<!-- TODO: description -->

## How it has been written

To facilite the collaboration on the first version we used a collaborative ".docx" and once we considered it as a first acceptable version we had to convert it to the Markdown format to be compatible with Docusaurus. For this we used `pandoc` and then we just splitted the result across multiple files depending on our document sections.

Since then we rely on direct text contributions but keep in mind this process can be reuse in case you write multiple big sections.

The command:

```sh
pandoc -f docx -t gfm-raw_html "$MY_DOCX_FILENAME" --wrap=none
```

## Technical setup of this repository

### Secrets

The following ones must be repository secrets (not environment ones) to be used during the CI/CD:

- `NETLIFY_AUTH_TOKEN`: [SECRET]
- `NETLIFY_SITE_ID`: [SECRET]
- `CRISP_WEBSITE_ID`: [SECRET]

### Hosting & domain

The "documentation" build is static and we chose Netlify to host it. Just configure the 2 environments variables you can find from the Netlify interface and you're good to go!

_Note: you can add a custom domain easily_

### Crisp

Crisp is used as a livechat to facilitate communication with people not used to GitHub issues. It makes us accessible and available to solve quick questions or discuss how to improve the guide.

From their interface we create a website named: `sillon`

Then upload as the icon the one used for the DSFR website (usually `apple-touch-icon.png` has enough quality).

Into the `Chatbox & Email settings` section go to `Chat Appearance` and set:

- Color theme (chatbot color): `Red`
- Chatbox background (message texture): `Default (No background)`

Then go to `Chatbox Security` and enable `Lock the chatbox to website domain (and subdomains)` (not need to enable it inside the development environment).

### PDF generation

You need [Prince](https://www.princexml.com/) installed through your package manager and to have the built website running to execute:

```bash
make generate-pdf
```

_(Ideally we wanted to use a Docker container directly but there is an ongoing issue with it https://github.com/signcl/docusaurus-prince-pdf/issues/34)_

### IDE

Since the most used IDE as of today is Visual Studio Code we decided to go we it. Using it as well will make you benefit from all the settings we set for this project.

## Contribute

As explained this guide is a suggestion but lot of point of views exist. We are definitely open to discussions to improve it, just post an issue or contact us through the livechat module on the website.
