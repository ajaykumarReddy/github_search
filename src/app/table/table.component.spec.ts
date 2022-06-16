/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableComponent } from './table.component';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginationComponent } from './pagination/pagination.component';

const users = [{
  "login": "hello",
  "id": 1836624,
  "node_id": "MDEyOk9yZ2FuaXphdGlvbjE4MzY2MjQ=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1836624?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hello",
  "html_url": "https://github.com/hello",
  "followers_url": "https://api.github.com/users/hello/followers",
  "following_url": "https://api.github.com/users/hello/following{/other_user}",
  "gists_url": "https://api.github.com/users/hello/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hello/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hello/subscriptions",
  "organizations_url": "https://api.github.com/users/hello/orgs",
  "repos_url": "https://api.github.com/users/hello/repos",
  "events_url": "https://api.github.com/users/hello/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hello/received_events",
  "type": "Organization",
  "site_admin": false,
  "score": 1.0
},
{
  "login": "hellokaton",
  "id": 3849072,
  "node_id": "MDQ6VXNlcjM4NDkwNzI=",
  "avatar_url": "https://avatars.githubusercontent.com/u/3849072?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hellokaton",
  "html_url": "https://github.com/hellokaton",
  "followers_url": "https://api.github.com/users/hellokaton/followers",
  "following_url": "https://api.github.com/users/hellokaton/following{/other_user}",
  "gists_url": "https://api.github.com/users/hellokaton/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hellokaton/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hellokaton/subscriptions",
  "organizations_url": "https://api.github.com/users/hellokaton/orgs",
  "repos_url": "https://api.github.com/users/hellokaton/repos",
  "events_url": "https://api.github.com/users/hellokaton/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hellokaton/received_events",
  "type": "User",
  "site_admin": false,
  "score": 1.0
},
{
  "login": "HelloZeroNet",
  "id": 10350359,
  "node_id": "MDQ6VXNlcjEwMzUwMzU5",
  "avatar_url": "https://avatars.githubusercontent.com/u/10350359?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/HelloZeroNet",
  "html_url": "https://github.com/HelloZeroNet",
  "followers_url": "https://api.github.com/users/HelloZeroNet/followers",
  "following_url": "https://api.github.com/users/HelloZeroNet/following{/other_user}",
  "gists_url": "https://api.github.com/users/HelloZeroNet/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/HelloZeroNet/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/HelloZeroNet/subscriptions",
  "organizations_url": "https://api.github.com/users/HelloZeroNet/orgs",
  "repos_url": "https://api.github.com/users/HelloZeroNet/repos",
  "events_url": "https://api.github.com/users/HelloZeroNet/events{/privacy}",
  "received_events_url": "https://api.github.com/users/HelloZeroNet/received_events",
  "type": "User",
  "site_admin": false,
  "score": 1.0
},
{
  "login": "helloexp",
  "id": 21156949,
  "node_id": "MDQ6VXNlcjIxMTU2OTQ5",
  "avatar_url": "https://avatars.githubusercontent.com/u/21156949?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/helloexp",
  "html_url": "https://github.com/helloexp",
  "followers_url": "https://api.github.com/users/helloexp/followers",
  "following_url": "https://api.github.com/users/helloexp/following{/other_user}",
  "gists_url": "https://api.github.com/users/helloexp/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/helloexp/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/helloexp/subscriptions",
  "organizations_url": "https://api.github.com/users/helloexp/orgs",
  "repos_url": "https://api.github.com/users/helloexp/repos",
  "events_url": "https://api.github.com/users/helloexp/events{/privacy}",
  "received_events_url": "https://api.github.com/users/helloexp/received_events",
  "type": "User",
  "site_admin": false,
  "score": 1.0
}];

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [TableComponent, PaginationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ngOnInit', () => {
    component.data = users;
    component.pageSize = 2;

    component.ngOnInit();

    expect(component.items.length).toBe(1);

  });

  it('should call next', () => {
    component.data = users;
    component.pageSize = 2;

    component.next();

    expect(component.nextDisable).toBeTruthy();

  });

  it('should call next', () => {
    component.data = users;
    component.pageSize = 2;

    component.next();

    expect(component.nextDisable).toBeTruthy();

  });

  it('should call next', () => {
    component.data = users;
    component.pageSize = 2;

    component.next();

    expect(component.nextDisable).toBeTruthy();

  });


  it('should call previoud', () => {
    component.data = users;
    component.pageSize = 2;

    component.next();

    expect(component.nextDisable).toBeTruthy();

    expect(component.previousDisable).toBeFalsy();

  });


});
