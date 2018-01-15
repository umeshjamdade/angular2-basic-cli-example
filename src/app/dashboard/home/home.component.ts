import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(public homeService: HomeService) {

        let body: any = { email: 'sdasd' };
        this.homeService.loginUser(body)
            .subscribe((data: any) => {

            },
            (error: any) => {
                console.log("Error", error);
            }
            );

    }

  ngOnInit() {
    }

}
