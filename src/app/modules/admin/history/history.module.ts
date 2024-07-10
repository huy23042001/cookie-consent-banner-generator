import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import {DataTableModule} from "../../../layout/common/data-table/data-table.module";


@NgModule({
  declarations: [
    HistoryComponent
  ],
    imports: [
        CommonModule,
        HistoryRoutingModule,
        DataTableModule
    ]
})
export class HistoryModule { }
