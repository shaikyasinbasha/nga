import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IEncodeData } from '../../models/decode.model';
import { AppState } from '../../app.state';

@Component({
    selector: 'test-layout',
    templateUrl: './testconsole.component.html',
    styleUrls: ['./testconsole.component.less']
})

export class TestLayoutComponent {
    data :string = 'Integer';
    displayValues :string = 'Text';
    constructor(private store: Store<AppState>) { 
        store.select('encodedata').
        subscribe((data: IEncodeData) => {
            if(data.dispValue !== ''){
                this.data = data.dispValue;
                this.onTextHandleChnage()
            }
        });
     }

    onTextHandleChnage() {
        const items = this.data.split('#');
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.displayValues = items.map((item: String) => {
            if(!item){
                return '';
            }                        
            return chars[Number(item)%26];
        }).toString().replace(/,/g,'')
    }
    onTextFocus() {
        /* if(this.data === 'Integer'){
            this.data = '';
            return;
        }
        this.data = 'Integer';
        this.displayValues = "Text"; */
    }
}