# Issue
How to create a `Belt.Set.t` with 2 identical items:

## Setup

```
$ git clone https://github.com/bodymindarts/belt-bug-reproduction.git
$ cd belt-bug-reproduction
$ yarn -v
1.7.0
$ yarn install
$ ./node_modules/.bin/bsb -make-world
$ yarn start
```
Open your browser to `localhost:3000` and you should see:
```
This number should be '1' if you are running the production build you will see something else! ->1<- Looks like all is well
```

## Bug
To see the bug you need to kill the dev server with `<crtl>-c` and run the production build via nginx:

```
$ brew install nginx
$ yarn build
$ sed -i '' "s#PATH_TO_BUILD_DIR#$(pwd)/build#" ./nginx.conf
$ nginx -c "$(pwd)/nginx.conf"
```
Refresh your browser and be amazed...

To stop nginx
```
nginx -c "$(pwd)/nginx.conf" -s stop
```

The package.json and webpack config are more or less the result of using the `create-react-app` tool and running the `eject` command. This bug was found serving a production web app from a cloud storage bucket. The version that was being served had been built inside a ubuntu docker container. This repo demonstrates a smallish reproduction of the bug that shows up when built with the latest OSX.
