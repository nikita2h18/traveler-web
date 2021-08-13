import {AfterViewInit, Component, OnInit, Renderer2} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";
import {LoaderService} from "./service/loader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'traveler-web';

  constructor(private primengConfig: PrimeNGConfig,
              private loaderService: LoaderService,
              private renderer: Renderer2) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngAfterViewInit() {
    this.loaderService.httpProgress().subscribe((status: boolean) => {
      status ?
        this.renderer['addClass'](document.body, 'cursor-loader') :
        this.renderer['removeClass'](document.body, 'cursor-loader')
    });
  }
}
