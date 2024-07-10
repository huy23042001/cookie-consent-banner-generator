import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Clipboard} from "@angular/cdk/clipboard";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, AfterViewInit {
    @ViewChild("addOrEditComponent") addOrEditComponent: any;
    constructor(public dialogRef: MatDialogRef<DetailComponent>, private clipboard: Clipboard,
                @Inject(MAT_DIALOG_DATA) public data: any,
                private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

    ngAfterViewInit(): void {
        const {necessary, preferences, statistics, marketing} = this.data.cookie;
        const formValue = {
            webConfig: this.data.webConfig,
            cookieBannerTitle: this.data.cookieBannerTitle,
            cookieBannerContent: this.data.cookieBannerContent,
            adsBannerTitle: this.data.adsBannerTitle,
            adsBannerContent: this.data.adsBannerContent,
            adsBannerLink: this.data.adsLink,
            necessary: necessary.data,
            preferences: preferences.data,
            statistics: statistics.data,
            marketing: marketing.data,
        }
        this.addOrEditComponent.fillValue(formValue);
    }

    copyToClipboard() {
        this.clipboard.copy(this.data.script);
    }
}
