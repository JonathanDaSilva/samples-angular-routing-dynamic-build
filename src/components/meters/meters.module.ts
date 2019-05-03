import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetersComponent} from './meters.component';
import {MetersRoutingModule} from './meters-routing.module';

@NgModule({
    declarations: [MetersComponent],
    imports: [
        CommonModule,
        MetersRoutingModule
    ]
})
export class MetersModule {
}
