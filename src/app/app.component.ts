import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  styles : [],
  // templateUrl: './app.component.html',
  template: '<apis-main></apis-main>',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  private subscription: Subscription;

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


  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    
  }
}
