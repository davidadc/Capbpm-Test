import {Component, OnInit} from '@angular/core';
import {CapbpmService} from './services/capbpm/capbpm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: Array<object> = [];
  displayedColumns: string[] = ['id', 'businessUnit', 'companyName', 'federalId', 'naic', 'lastUpdateDate', 'lastUpdateId'];

  constructor(
    private capbpmService: CapbpmService
  ) { }

  ngOnInit(): void {
    this.fetchList();
  }

  fetchList() {
    this.capbpmService.getList()
      .subscribe((value: Array<object>) => {
        this.list = value;
      });
  }

}
