import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  private subscription: Subscription;

  title: string = 'app';
  param: string;

  constructor(
    private route: ActivatedRoute
  ) {
    this.subscription = route.queryParams.subscribe(
      (queryParams: any) => this.param = queryParams['tokenUDE']
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
