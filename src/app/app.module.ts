import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductAlertsComponent } from "./product-alerts/product-alerts.component";
import { LayoutDemoComponent } from "./layout-demo/layout-demo.component";

import { FlexLayoutModule } from "@angular/flex-layout";
import { FormDemoComponent } from './form-demo/form-demo.component';
import { MaptalksDemoOneComponent } from './maptalks-demo-one/maptalks-demo-one.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    LayoutDemoComponent,
    FormDemoComponent,
    MaptalksDemoOneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
