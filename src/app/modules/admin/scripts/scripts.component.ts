import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from "../../../core/base.component";
import {IColumn} from "../../../layout/common/data-table/data-table.component";
import {AccountService} from "../../../core/auth/account.service";
import moment from "moment";
import {Clipboard} from "@angular/cdk/clipboard";
import {DetailComponent} from "./detail/detail.component";

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss']
})
export class ScriptsComponent extends BaseComponent implements OnInit {

    columns: IColumn[] = [
        {
            columnDef: "webConfig",
            header: "URL Web Client",
        },
        {
            columnDef: "adsLink",
            header: "URL Ads",
        },
        {
            columnDef: "adsBannerTitle",
            header: "Ads Banner",
        },
        {
            columnDef: "adsBannerContent",
            header: "Ads Content",
        },
        {
            columnDef: "createtime",
            header: "Create Time",
            cellRenderer: (data) => {
                if (data.createtime) {
                    return moment(data.createtime).format("DD/MM/YYYY HH:mm:ss")
                }
                return `<div></div>`;
            }
        },
        {
            columnDef: "option",
            header: "Option",
            flex: 0.3,
        },
    ]
    rows = []

  constructor(injector: Injector, private accountService: AccountService, private clipboard: Clipboard) {
      super(injector);
  }

  ngOnInit(): void {
        this.accountService.getListScript().subscribe(res => {
           this.rows = res.reverse().map(row => {
               try {
                   row.cookie = JSON.parse(row.cookie ?? "");
               } catch (e) {
                   row.cookie = {}
               }
               return row;
           });
        })
  }

    copyToClipboard(script: string) {
        this.clipboard.copy(script);
    }

    viewDetail(row: any) {
        this.showDialog(DetailComponent, {
            width: "60vw",
            data: row,
        })
    }
}
