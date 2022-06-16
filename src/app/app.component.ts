import { Component } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { HttpService } from './http.service';
import { User, UsersResponse } from './utilities/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'github_search';

  users$: Observable<User[]> = of([]);

  total_count!: number;

  constructor(private httpService: HttpService) { }


  getUsers(login: string) {
    this.users$ = this.httpService.getUsers(login).pipe(
      tap(res => {
         this.total_count = res.total_count
      }),
      map((res: UsersResponse) => res.items)
    );
  }


}
