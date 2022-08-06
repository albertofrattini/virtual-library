```sh
npm init -y
mkdir src
touch src/index.ts
mkdir test
git init
git remote add origin <git_repo_link>
git branch -M main
gitu push -u origin main
touch .gitignore
touch tsconfig.json
touch .eslintrc
touch .env
touch .env.example
npm install typescript ts-node nodemon mocha chai eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin @types/node --save-dev
npm install prisma
npx prisma init
npx prisma db push
```