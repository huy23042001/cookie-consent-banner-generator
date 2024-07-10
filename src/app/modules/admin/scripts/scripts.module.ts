import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptsRoutingModule } from './scripts-routing.module';
import { ScriptsComponent } from './scripts.component';
import {DataTableModule} from "../../../layout/common/data-table/data-table.module";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { DetailComponent } from './detail/detail.component';
import {DashboardsModule} from "../dashboards/dashboards.module";


@NgModule({
  declarations: [
    ScriptsComponent,
    DetailComponent
  ],
    imports: [
        CommonModule,
        ScriptsRoutingModule,
        DataTableModule,
        MatButtonModule,
        MatIconModule,
        DashboardsModule
    ]
})
export class ScriptsModule { }
