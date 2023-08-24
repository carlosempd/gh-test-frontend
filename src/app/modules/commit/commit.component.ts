import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommitService } from 'src/app/core/services/commit.service';


@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  selected = new FormControl(0); // Tab index selected, 0 for frontend 1 for backend
  data = [];
  ctx = { commitsContext: this.data };
  displayedColumns: string[] = ['sha', 'message', 'date', 'author'];
  loading = false;

  constructor(private commitService: CommitService) {
    this.selected.valueChanges.subscribe(res => {
      this.getCommits();
    })
  }
  ngOnInit(): void {
    this.getCommits();
  }

  getCommits() {
    const repository = this.selected.value ? 'backend': 'frontend';
    this.loading = true;
    this.commitService.getCommitList(repository).subscribe(res => {
        this.loading = false;
        this.data = res;
        this.ctx = { commitsContext: this.data };
        
    })
  }

}
