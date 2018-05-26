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
To see the bug you need to run the production build via nginx:

```
brew install nginx
yarn build
sed -i '' "s#PATH_TO_BUILD_DIR#$(pwd)/build#" ./nginx.conf
nginx -c "$(pwd)/nginx.conf"
```
Open your browser again and be amazed...
