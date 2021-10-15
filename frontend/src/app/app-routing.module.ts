import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AudioRecordingComponent } from './audio-recording/audio-recording.component';

const routes: Routes = [{ path: '', component: AudioRecordingComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
