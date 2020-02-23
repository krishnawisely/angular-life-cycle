import { Component, OnInit, OnChanges, Input, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked
  ,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() lifeCycle:string;

  lifeCycle1:string;
  lifeCycle2:string;
  lifeCycle3:string;
  lifeCycle4:string;
  lifeCycle5:string;
  lifeCycle6:string;
  lifeCycle7:string;
  lifeCycle8:string;
  
  constructor() { }

  ngOnInit() {
    this.lifeCycle1 = "ngOnInit=>called after first ngOnChanges";
    console.log('This is ngOnInit');
  }

  ngOnChanges(){
    this.lifeCycle2 = "ngOnChanges=>called before ngOnInit";
    console.log('This is ngOnChange');
  }

  ngDoCheck(){
    this.lifeCycle3 = "ngDoCheck=>called once after ngOnInit and ngOnChanges";
    console.log('This is ngDoCheck');
  }

  ngAfterContentInit(){
    this.lifeCycle4 = "ngAfterContentInit";
    console.log('This is ngAfterContentInit');
  }

  ngAfterContentChecked(){
    this.lifeCycle5 = "ngAfterContentChecked";
    console.log('This is ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.lifeCycle6 = "ngAfterViewInit";
    console.log('This is ngAfterViewInit');
  }

  ngAfterViewChecked(){
    this.lifeCycle7 = "ngAfterViewChecked";
    console.log('This is ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.lifeCycle8 = "ngOnDestroy";
    console.log('This is ngOnDestroy');
  }

}
