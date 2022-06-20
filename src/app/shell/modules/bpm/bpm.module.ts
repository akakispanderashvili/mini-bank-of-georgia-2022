import {Bpm000Component} from './bpm000/bpm000.component';
import {Bpm001Component} from './bpm001/bpm001.component';
import {BpmComponent} from './bpm.component';
import {BpmRoutingModule} from './bpm-routing.module';
import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';


@NgModule({
  declarations: [BpmComponent, Bpm000Component, Bpm001Component],
  imports: [BpmRoutingModule,  SharedModule],
})

export class BpmModule {
}

