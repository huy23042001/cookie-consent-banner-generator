import {Component, Injector, OnInit} from '@angular/core';
import {BaseComponent} from "../../../core/base.component";
import {FormGroup} from "@angular/forms";
import {AccountService} from "../../../core/auth/account.service";
import {environment} from "../../../../environments/environment";


@Component({
    selector: 'app-dashboards',
    templateUrl: './dashboards.component.html',
    styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent extends BaseComponent implements OnInit {
    generated: any = false;
    defaultScript = "!function(){let e=\".cookie-consent-banner{position:fixed;bottom:20px;left:20px;z-index:2147483645;box-sizing:border-box;width:600px;padding:12px;background-color:#f1f6f4}.cookie-consent-banner__copy{margin-bottom:16px}.cookie-consent-banner__header{margin-bottom:8px;font-family:CeraPRO-Bold,sans-serif,arial;font-weight:400;font-size:16px;line-height:24px}.cookie-consent-banner__cta,.cookie-consent-banner__description{font-family:CeraPRO-Regular,sans-serif,arial;font-weight:400;font-size:16px}.cookie-consent-banner__description{color:#838f93;line-height:24px}.cookie-consent-banner__cta{box-sizing:border-box;cursor:pointer;display:inline-block;min-width:164px;padding:11px 13px;border-radius:2px;background-color:#2ce080;color:#fff;text-decoration:none;text-align:center;line-height:20px;margin-left:6px}.cookie-consent-banner__cta--secondary{padding:9px 13px;border:2px solid #3a4649;background-color:transparent;color:#2ce080}.cookie-consent-banner__cta:hover{background-color:#20ba68}.cookie-consent-banner__cta--secondary:hover{border-color:#838f93;background-color:transparent;color:#22c870}.consent-detail-modal{display:none;position:fixed;z-index:1001;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.consent-detail-modal-content{background-color:#fefefe;margin:15% auto;padding:20px;border:1px solid #888;width:80%;max-width:400px;border-radius:10px;text-align:center}.consent-detail-modal-content .settings{display:flex;flex-direction:column;padding:12px 20px;margin-bottom:20px}.consent-detail-modal-content .setting-item{display:flex;justify-content:space-between}.consent-detail-modal .close{color:#aaa;float:right;font-size:28px;font-weight:700}.consent-detail-modal .close:focus,.consent-detail-modal .close:hover{color:#000;text-decoration:none;cursor:pointer}\",n=document.head||document.getElementsByTagName(\"head\")[0],t=document.createElement(\"style\");n.appendChild(t),t.type=\"text/css\",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e));let o={},i=e=>{let n=document.createElement(\"div\");n.innerHTML=e;let t=n.firstElementChild;return document.body.appendChild(t),t},c=(e,n,t)=>{var o=\"\";if(t){var i=new Date;i.setTime(i.getTime()+864e5*t),o=\"; expires=\"+i.toUTCString()}document.cookie=e+\"=\"+(n||\"\")+o+\"; path=/\"},a=`<div class=\"cookie-consent-banner\">\n" +
        "          <div class=\"cookie-consent-banner__inner\">\n" +
        "            <div class=\"cookie-consent-banner__copy\">\n" +
        "              <h2 class=\"cookie-consent-banner__header\">COOKIE_BANNER_TITLE</h2>\n" +
        "              <div class=\"cookie-consent-banner__description\">COOKIE_BANNER_CONTENT</div>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"cookie-consent-banner__actions\">\n" +
        "              <div class=\"cookie-consent-banner__cta\" id=\"accept-btn\">\n" +
        "                Accept all cookies\n" +
        "              </div>\n" +
        "                <div class=\"cookie-consent-banner__cta\" id=\"customize-btn\">\n" +
        "                Customize Settings\n" +
        "              </div>\n" +
        "              <div id=\"decline-btn\" class=\"cookie-consent-banner__cta cookie-consent-banner__cta--secondary\">\n" +
        "                Decline\n" +
        "              </div>\n" +
        "            </div>\n" +
        "          </div>\n" +
        "        </div>`,s=`<div id=\"cookie-settings-modal\" class=\"consent-detail-modal\">\n" +
        "        <div class=\"consent-detail-modal-content\">\n" +
        "            <span id=\"close-modal\" class=\"close\">&times;</span>\n" +
        "            <h2 style=\"margin: 5px 0\">Customize Settings</h2>\n" +
        "            <div class=\"settings\">\n" +
        "                <div class=\"setting-item\">\n" +
        "                    <span>Necessary Cookies</span>\n" +
        "                    <input type=\"checkbox\" name=\"cookie-setting\" value=\"necessary\" checked disabled>\n" +
        "                </div>\n" +
        "                <div class=\"setting-item\">\n" +
        "                                    <span>Preferences Cookies</span>\n" +
        "                    <input type=\"checkbox\" name=\"cookie-setting\" value=\"preferences\" checked>\n" +
        "                </div>\n" +
        "                <div class=\"setting-item\">\n" +
        "                                    <span>Statistics Cookies</span>\n" +
        "                    <input type=\"checkbox\" name=\"cookie-setting\" value=\"statistics\" checked>\n" +
        "                </div>\n" +
        "                <div class=\"setting-item\">\n" +
        "                                    <span>Marketing Cookies</span>\n" +
        "                    <input type=\"checkbox\" name=\"cookie-setting\" value=\"marketing\" checked>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"cookie-consent-banner__actions\">\n" +
        "               <div class=\"cookie-consent-banner__cta\" id=\"accept-customize\">\n" +
        "                Accept\n" +
        "              </div>\n" +
        "              <div class=\"cookie-consent-banner__cta\" id=\"accept-all\">\n" +
        "                Accept all cookies\n" +
        "              </a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>`,d=`<div id=\"ads-modal\" class=\"consent-detail-modal\">\n" +
        "        <div class=\"consent-detail-modal-content\">\n" +
        "            <span id=\"close-ads-modal\" class=\"close\">&times;</span>\n" +
        "            <h2 style=\"margin: 5px 0\">ADS_BANNER_TITLE</h2>\n" +
        "            <div class=\"settings\">\n" +
        "                ADS_BANNER_CONTENT\n" +
        "            </div>\n" +
        "            <div class=\"cookie-consent-banner__actions\">\n" +
        "               <div class=\"cookie-consent-banner__cta\" id=\"ads-accept\">\n" +
        "                Accept\n" +
        "              </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>`;if(function e(n){let t=`; ${document.cookie}`,o=t.split(`; ${n}=`);if(2===o.length)return o.pop().split(\";\").shift()}(\"consent\")){let l=i(d);l.style.display=\"block\",document.getElementById(\"ads-accept\").addEventListener(\"click\",function(){l.style.display=\"none\",l.remove(),window.open(\"ADS_BANNER_LINK\",\"_blank\")}),document.getElementById(\"close-ads-modal\").addEventListener(\"click\",function(){l.style.display=\"none\",l.remove()});return}let r=i(a),p=i(s),m=e=>{let n=new Headers;n.append(\"Content-Type\",\"application/json\");let t={statusConsent:e,domainWeb:window.location.host,config:JSON.stringify(o)};fetch(\"API_URL/consent\",{method:\"POST\",body:JSON.stringify(t),headers:n}).then(e=>e.json()).then(e=>console.log(e))},v=()=>{Object.keys(o).forEach(e=>{o[e]?.data?.forEach(e=>{c(e.name,e.value)})}),c(\"consent\",\"true\"),new Headers,m(0)},k=()=>{Object.keys(o).forEach(e=>{o[e]?.disabled||o[e]?.data?.forEach(e=>{c(e.name,e.value)})}),c(\"consent\",\"true\");let e=Object.keys(o).every(e=>!o[e].disabled);m(e?0:1)};document.getElementById(\"accept-btn\").addEventListener(\"click\",function(){v(),r.remove()}),document.getElementById(\"decline-btn\").addEventListener(\"click\",function(){m(2),r.remove()}),document.getElementById(\"customize-btn\").addEventListener(\"click\",function(){r.style.display=\"none\",p.style.display=\"block\"}),document.getElementById(\"close-modal\").addEventListener(\"click\",function(){p.style.display=\"none\",r.style.display=\"block\"}),document.getElementById(\"accept-customize\").addEventListener(\"click\",function(){Array.from(p.querySelectorAll(\"[name='cookie-setting']\")).forEach(e=>{o[e.value]&&(o[e.value].disabled=!e.checked)}),console.log(o),k(),r.remove(),p.remove()}),document.getElementById(\"accept-all\").addEventListener(\"click\",function(){v(),r.remove(),p.remove()})}();";
    script = this.defaultScript;

    constructor(injector: Injector, private accountService: AccountService) {
        super(injector)
    }

    ngOnInit(): void {
    }


    generateScript(formGroupValue) {

        const listCookie = {
            necessary: {
                disabled: false,
                data: formGroupValue.necessary
            },
            preferences: {
                disabled: false,
                data: formGroupValue.preferences
            },
            statistics: {
                disabled: false,
                data: formGroupValue.statistics
            },
            marketing: {
                disabled: false,
                data: formGroupValue.marketing
            }
        }
        console.log(listCookie);
        this.script = this.defaultScript;
        this.script = this.script.replace("let o={}", "let o=" + JSON.stringify(listCookie));
        this.script = this.script.replace("COOKIE_BANNER_TITLE", formGroupValue.cookieBannerTitle);
        this.script = this.script.replace("COOKIE_BANNER_CONTENT", formGroupValue.cookieBannerContent);
        this.script = this.script.replace("ADS_BANNER_TITLE", formGroupValue.adsBannerTitle);
        this.script = this.script.replace("ADS_BANNER_CONTENT", formGroupValue.adsBannerContent);
        this.script = this.script.replace("ADS_BANNER_LINK", formGroupValue.adsBannerLink);
        this.script = this.script.replace("API_URL", environment.apiUrl);
        this.generated = true; 
        const body = {
            cookieBannerTitle: formGroupValue.cookieBannerTitle,
            cookieBannerContent: formGroupValue.cookieBannerContent,
            adsBannerTitle: formGroupValue.adsBannerTitle,
            adsBannerContent: formGroupValue.adsBannerContent,
            adsLink: formGroupValue.adsBannerLink,
            cookie: JSON.stringify(listCookie),
            script: this.script,
            webConfig: formGroupValue.webConfig
        }
        this.accountService.createScript(body).subscribe(res => {
            console.log(res);
        })
    }
}
