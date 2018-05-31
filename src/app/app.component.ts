import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  title: string = 'app';
  tokenUDE: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.subscription = this.route.queryParamMap.subscribe(
      (queryParams: any) => {
        console.log(queryParams);

        this.tokenUDE = queryParams['params']['tokenUDE']

        console.log(this.tokenUDE);

      }
    )
  }

  ngOnInit(){
    this.route.queryParamMap.subscribe((parametros: any) => {
      
      this.tokenUDE = parametros['params'];

      console.log(this.tokenUDE);
    
    
    } );
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

  // ngOnInit() {
  //   this.subscription = this.route.queryParamMap.subscribe(
  //     (params: Params) => {

  //       if(params['tokenUDE']) {
  //         this.tokenUDE = params['tokenUDE'];
  //         console.log(this.tokenUDE);
  //       }
  //     }
  //   )
  // }

}
