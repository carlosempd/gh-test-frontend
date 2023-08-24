import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private apiService: ApiService) { }

  getCommitList(repository: 'frontend' | 'backend' = 'backend'): Observable<any> {
    return this.apiService.get(
      `commits?repository=${ repository }`
    )
  }
}
