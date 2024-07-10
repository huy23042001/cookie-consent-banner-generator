import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import {DashboardsComponent} from "./dashboards.component";
import { CategoryComponent } from './category/category.component';
import {MatButtonModule} from "@angular/material/button";
import {SharedModule} from "../../../shared/shared.module";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {MatExpansionModule} from "@angular/material/expansion";
import { AddOrEditComponent } from './add-or-edit/add-or-edit.component';


@NgModule({
    declarations: [DashboardsComponent, CategoryComponent, AddOrEditComponent],
    exports: [
        AddOrEditComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        DashboardsRoutingModule,
        MatButtonModule,
        MonacoEditorModule,
        MatExpansionModule
    ]
})
export class DashboardsModule { }
