import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import { IEncodeData } from './../../models/decode.model';
import * as EncodeActions from './../../actions/encode.actions';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-key-board',
    templateUrl: './keyboard.component.html',
    styleUrls: ['./keyboard.component.less']
})

export class KeyboardComponent {
    constructor(private store: Store<AppState>) {}
    keyPressHandler(key: string) {
        this.store.dispatch(new EncodeActions.AddCharecter(key) );
    }
    keyBackHandler(key: string) {
        this.store.dispatch(new EncodeActions.RemoveCharecter(key) );
    }
}
