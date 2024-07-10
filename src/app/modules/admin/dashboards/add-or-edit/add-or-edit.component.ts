import {Component, Injector, Input, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {BaseComponent} from "../../../../core/base.component";

@Component({
    selector: 'app-add-or-edit',
    templateUrl: './add-or-edit.component.html',
    styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent extends BaseComponent implements OnInit {
    @Input() readonly = false;
    @ViewChild("necessaryComponent") necessaryComponent: any;
    @ViewChild("preferencesComponent") preferencesComponent: any;
    @ViewChild("statisticsComponent") statisticsComponent: any;
    @ViewChild("marketingComponent") marketingComponent: any;
    formGroup: FormGroup = this.fb.group({
        webConfig: [""],
        cookieBannerTitle: ["Cookies Policy"],
        cookieBannerContent: ["Bằng cách nhấp vào “Accept all cookies”, bạn chấp nhận chúng tôi lưu trữ cookie trên thiết bị của mình và sử dụng cookie để cá nhân hóa nội dung và quảng cáo, để cung cấp các tính năng truyền thông xã hội và phân tích lưu lượng truy cập của chúng tôi. Chúng tôi cũng chia sẻ thông tin về việc bạn sử dụng trang web của chúng tôi với các đối tác truyền thông xã hội, quảng cáo và phân tích, những người có thể kết hợp nó với thông tin khác mà bạn đã cung cấp cho họ hoặc họ đã thu thập được từ việc bạn sử dụng dịch vụ của họ."],
        adsBannerTitle: ["Tiêu đề Banner"],
        adsBannerContent: ["Nội dung Banner"],
        adsBannerLink: ["http://www.google.com"],
        necessary: this.fb.array([]),
        preferences: this.fb.array([]),
        statistics: this.fb.array([]),
        marketing: this.fb.array([]),
    })

    constructor(injector: Injector) {
        super(injector)
    }

    ngOnInit(): void {
    }

    fillValue(value) {
        if (value.necessary.length) {
            value.necessary.forEach(n => {
                this.necessaryComponent.add()
            })
        }
        if (value.preferences.length) {
            value.preferences.forEach(n => {
                this.preferencesComponent.add()
            })
        }
        if (value.marketing.length) {
            value.marketing.forEach(n => {
                this.marketingComponent.add()
            })
        }
        if (value.statistics.length) {
            value.statistics.forEach(n => {
                this.statisticsComponent.add()
            })
        }
        this.formGroup.patchValue(value);
    }

}
