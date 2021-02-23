import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrashBotSharedModule } from 'app/shared/shared.module';
import { GarbageComponent } from './garbage.component';
import { GarbageDetailComponent } from './garbage-detail.component';
import { GarbageUpdateComponent } from './garbage-update.component';
import { GarbageDeleteDialogComponent } from './garbage-delete-dialog.component';
import { garbageRoute } from './garbage.route';

@NgModule({
  imports: [TrashBotSharedModule, RouterModule.forChild(garbageRoute)],
  declarations: [GarbageComponent, GarbageDetailComponent, GarbageUpdateComponent, GarbageDeleteDialogComponent],
  entryComponents: [GarbageDeleteDialogComponent],
})
export class TrashBotGarbageModule {}
