import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    private _router: Subscription;
    loaded: boolean = false;

    data: Date = new Date();
    date: { year: number, month: number };
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    constructor(private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location, public spinner:NgxSpinnerService) { }
    ngOnInit(){
        this.spinner.show();

        setTimeout(()=>{
            this.spinner.hide();
          
        },2000);

        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (this.location.path() === '/index' || this.location.path() === '/') {
                    // remove logic
                    console.log(this.location.path());

                    navbar.classList.add('navbar-transparent');
                }
            });
        });
    }
    


}
