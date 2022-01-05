import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { ApiService } from 'src/app/services/api.service';
import { CardModule } from 'src/app/components/card/card.module';
import { LoadingProvider } from 'src/app/providers/loading-provider';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndexPageRoutingModule,
    CardModule,
  ],
  providers: [
    ApiService,
    LoadingProvider
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
