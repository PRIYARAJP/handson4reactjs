PS D:\react project\handson4reactjs\handson4reactjs> git add .
warning: in the working copy of 'src/App.js', LF will be replaced by CRLF the next time Git touches it
PS D:\react project\handson4reactjs\handson4reactjs>  git commit -m "first commit"
[main 1457aa8] first commit
 1 file changed, 14 insertions(+), 3 deletions(-)
PS D:\react project\handson4reactjs\handson4reactjs> git branch -M main
PS D:\react project\handson4reactjs\handson4reactjs> git remote add origin https://github.com/PRIYARAJP/handson4reactjs.git
error: remote origin already exists.
PS D:\react project\handson4reactjs\handson4reactjs> git push
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 4 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 475 bytes | 118.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/PRIYARAJP/handson4reactjs.git
   49da57f..1457aa8  main -> main
PS D:\react project\handson4reactjs\handson4reactjs> git init
Reinitialized existing Git repository in D:/react project/handson4reactjs/handson4reactjs/.git/
PS D:\react project\handson4reactjs\handson4reactjs> git add .
PS D:\react project\handson4reactjs\handson4reactjs> git commit -m "first commit"
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
PS D:\react project\handson4reactjs\handson4reactjs> git branch -M main
PS D:\react project\handson4reactjs\handson4reactjs> git remote add origin https://github.com/PRIYARAJP/handson4reactjs.git
error: remote origin already exists.
PS D:\react project\handson4reactjs\handson4reactjs> git push
Everything up-to-date
PS D:\react project\handson4reactjs\handson4reactjs> npm run deploy

> handson4reactjs@0.1.0 predeploy
> npm run build


> handson4reactjs@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  48.09 kB (+29 B)  build\static\js\main.91bb9ff6.js
  1.79 kB           build\static\js\787.673d55fa.chunk.js
  865 B             build\static\css\main.1f5a2d7b.css

The project was built assuming it is hosted at /handson4reactjs/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment


> handson4reactjs@0.1.0 deploy
> gh-pages -d build

Published
PS D:\react project\handson4reactjs\handson4reactjs> 