import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: object = { name: "" };
  allQuestions: object;
  searchString: string;
 
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    console.log("loaded dashboard")
    this._apiService.getCurrentUser()
    .then((data) => {
      this.currentUser = data;
      console.log(this.currentUser);
    })
    .catch((error) => {
      console.log(error);
    })

    this._apiService.getQuestions()
    .then((data) => {
      console.log("got questions", data)

      this.allQuestions = data;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  // searchQuestions(){
  //   console.log("click", this.searchString);
  //   console.log(this.allQuestions);
  //   this.allQuestions.filter((searchStr) => {
  //     console.log(searchStr.includes(searchStr));
  //     return searchStr.includes(searchStr);
  //   })
  // }

}
