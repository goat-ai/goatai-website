import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { CareersComponent } from './careers/careers.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProductComponent,
        CareersComponent,
        ContactUsComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        NgxSpinnerModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
