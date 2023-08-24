import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  datasource: any[] = [
    {
        "sha": "aec8badbbdd24d0e75b4340a2ca7c6008b6d793f",
        "message": "🚑 bug: Fix error of using fetch. It is not recognized in the render environment. Used HttpModule instead",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/aec8badbbdd24d0e75b4340a2ca7c6008b6d793f",
        "date": "2023-08-23T14:42:26Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "1606bb7ab77d4d1ee680c89c477663cd2664dd31",
        "message": "🚧 bug:  inspect errors on live app",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/1606bb7ab77d4d1ee680c89c477663cd2664dd31",
        "date": "2023-08-23T13:47:07Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "2a7f7eba2ef986e25136cd7471ed0315c6071079",
        "message": "🐛 bug: properly throw error",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/2a7f7eba2ef986e25136cd7471ed0315c6071079",
        "date": "2023-08-23T13:38:55Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "438d11cf05ca023f6adae6d7502c94e0cb23f5e1",
        "message": "✨ feat: return error object at exception",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/438d11cf05ca023f6adae6d7502c94e0cb23f5e1",
        "date": "2023-08-23T13:17:23Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "c2a00a1b465ba117c5eb484ebd22a4b6b2100e69",
        "message": "📝  doc: Update documentation on Readme file",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/c2a00a1b465ba117c5eb484ebd22a4b6b2100e69",
        "date": "2023-08-23T12:27:33Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "793f1c5ceafebb15440353db6e135578c793f8b6",
        "message": "📝  doc: Update documentation on Readme file",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/793f1c5ceafebb15440353db6e135578c793f8b6",
        "date": "2023-08-23T12:27:33Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "4ec7c80ae7597c877435839d056336fc5ada8ac3",
        "message": "📝  doc: Add api documentation following openapi standard and using Swagger",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/4ec7c80ae7597c877435839d056336fc5ada8ac3",
        "date": "2023-08-23T12:20:21Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "94c3ad6a5aea07bd091f5e3de5484c0f89bf8bcc",
        "message": "🐛 bug: Update headers definition to fix deploy",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/94c3ad6a5aea07bd091f5e3de5484c0f89bf8bcc",
        "date": "2023-08-23T03:47:17Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "c4bee9aa86106a722908af8bfce36010805e5886",
        "message": "🏷️ feat: Add types to controller and service",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/c4bee9aa86106a722908af8bfce36010805e5886",
        "date": "2023-08-23T01:53:21Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "6de1533c2a376561f3dec9625a6829e62a636cfd",
        "message": "🚧  feat: connect with github api, retrieve and map result",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/6de1533c2a376561f3dec9625a6829e62a636cfd",
        "date": "2023-08-23T01:42:58Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "5d794650205adaf51cc4a05bb1f1e191a501cad7",
        "message": "✨ feat: create commits module, controller and service",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/5d794650205adaf51cc4a05bb1f1e191a501cad7",
        "date": "2023-08-23T00:12:41Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "319679f2d2688b5f624e745f23cb22c7ed8326cf",
        "message": "🔧 feat: Set config module in app module",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/319679f2d2688b5f624e745f23cb22c7ed8326cf",
        "date": "2023-08-22T23:53:26Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    },
    {
        "sha": "8d4f93ff90b57db3f54d66d95c158be7607d8663",
        "message": "🎉 feat: Create project with nestjs and install intial dependencies",
        "commitUrl": "https://api.github.com/repos/carlosempd/gh-test-backend/git/commits/8d4f93ff90b57db3f54d66d95c158be7607d8663",
        "date": "2023-08-22T23:18:23Z",
        "author": {
            "id": 31997674,
            "login": "carlosempd",
            "name": "Carlos",
            "email": "carlosempd@gmail.com",
            "avatar": "https://avatars.githubusercontent.com/u/31997674?v=4"
        }
    }
  ]
  selected = new FormControl(0); // Tab index selected, 0 for frontend 1 for backend
  data = 'This is the data';
  ctx = { commitsContext: this.data };
  displayedColumns: string[] = ['sha', 'message', 'date', 'author'];

  constructor() {
    this.selected.valueChanges.subscribe(res => {
      this.getCommits();
    })
  }
  ngOnInit(): void {
    this.getCommits();
  }

  getCommits() {
    const repository = this.selected.value ? 'backend': 'frontend';
    this.data = repository;
    this.ctx = { commitsContext: this.data };
  }

}
