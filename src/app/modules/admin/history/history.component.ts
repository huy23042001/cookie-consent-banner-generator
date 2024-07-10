import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from "../../../core/base.component";
import {IColumn} from "../../../layout/common/data-table/data-table.component";
import {AccountService} from "../../../core/auth/account.service";
import moment from "moment";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent extends BaseComponent implements OnInit {

    columns: IColumn[] = [
        {
            columnDef: "domainWeb",
            header: "Domain Web"
        },
        {
            columnDef: "ipClient",
            header: "IP Client"
        },
        {
            columnDef: "statusConsent",
            header: "Consent Status",
            cellRenderer: (data) => {
                if (data.statusConsent == 0) {
                    return `<div class="flex"><div class="px-2 py-1 rounded bg-[#86f372ee]">Accept All</div></div>`
                } else if (data.statusConsent == 1) {
                    return `<div class="flex"><div class="px-2 py-1 rounded bg-[#86f372ee]">Accept Customize</div></div>`
                } else {
                    return `<div class="flex"><div class="px-2 py-1 rounded bg-[#ff527aee]">Declined</div></div>`
                }
            }
        },
        {
            columnDef: "cookieConfig",
            header: "Cookie Config",
            cellRenderer: (data) => {
                if (data.statusConsent == 1) {
                    let listCategory = "";
                    try {
                        const config = JSON.parse(data.config);
                        listCategory = Object.keys(config).filter(key => !config[key].disabled).join(", ");
                    } catch (e) {
                        // console.log(e);
                    }
                    return listCategory
                }
                return "";
            }
        },
        {
            columnDef: "timestamp",
            header: "Time",
            cellRenderer: (data) => {
                if (data.timestamp) {
                    return moment(data.timestamp).format("DD/MM/YYYY HH:mm:ss")
                }
                return `<div></div>`;
            }
        }
    ]
    rows = []

  constructor(injector: Injector, private accountService: AccountService) {
      super(injector);
  }

  ngOnInit(): void {
        this.accountService.getListConsent().subscribe(res => {
           this.rows = res.reverse();
        })
  }
}
