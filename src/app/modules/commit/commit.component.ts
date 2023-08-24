import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Commit } from 'src/app/core/models/commit.model';
import { CommitService } from 'src/app/core/services/commit.service';


@Component({
  selector: 'app-commit',
  templateUrl: './commit.component.html',
  styleUrls: ['./commit.component.scss']
})
export class CommitComponent implements OnInit {
  selected = new FormControl(0); // Tab index selected, 0 for frontend 1 for backend

  dataSource = new MatTableDataSource<Commit>([])
  ctx = { commitsContext: this.dataSource };
  displayedColumns: string[] = ['sha', 'message', 'date', 'author'];
  loading = false;
  filterForm!: FormGroup;

  constructor(
    private commitService: CommitService,
    private formBuilder: FormBuilder
  ) {
    this.selected.valueChanges.subscribe(res => {
      this.getCommits();
    })
  }
  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      filter: ['']
    })
    this.getCommits();
  }

  getCommits() {
    const repository = this.selected.value ? 'backend': 'frontend';
    this.loading = true;
    this.commitService.getCommitList(repository).subscribe(res => {
      this.loading = false;
      this.dataSource.data = res;
      this.ctx = { commitsContext: this.dataSource };
        
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
