# mia-extender
The runner for Mia-Platform IDP extention registration.

## How use it

1. reate your own .env file

```bash
cp default.env local.env
```

2. Edit the variable of `local.env`. The `COOKIE` parameter is needed to call the Mia-Platform API. You can retrieve it from the F12 console looking into the cookies of the calls to the Console APIs.

*Authentication is still a WIP. Improvements will come in the future.*

3. Install dependencies
```bash
nvm i && npm ci
```

4. Run it
```bash
node index.js
```

You can then ask for available commands using the `-h` param, like this:
```bash
node index.js -h
```

With this tool you can register, retrieve and activate extensions through a guided experience.