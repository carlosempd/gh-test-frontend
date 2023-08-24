import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Commit } from '../models/commit.model';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(private apiService: ApiService) { }

  getCommitList(repository: 'frontend' | 'backend' = 'backend'): Observable<Commit[]> {
    return this.apiService.get(
      `commits?repository=${ repository }`
    )
  }
}
