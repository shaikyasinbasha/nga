import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IEncodeData } from '../../models/decode.model';
import { AppState } from '../../app.state';

@Component({
    selector: 'app-test-layout',
    templateUrl: './testconsole.component.html',
    styleUrls: ['./testconsole.component.less']
})

export class TestLayoutComponent {
    data = 'Integer';
    displayValues = 'Text';
    constructor(private store: Store<AppState>) {
        store.select('encodedata').
        subscribe((respdata: IEncodeData) => {
            this.data = respdata.dispValue;
            if (respdata.dispValue !== '') {
                this.onTextHandleChnage();
            } else {
                this.onTextFocus();
            }
        });
     }

    onTextHandleChnage() {
        const items = this.data.split('#');
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.displayValues = items.map((item: string) => (
            !item ? '' : chars[Number(item) % 26])
        ).toString()
        .replace(/,/g, '');
    }
    onTextFocus() {
        if (this.data === '') {
            this.data = 'Integer';
            this.displayValues = 'Text';
        }
    }
}
