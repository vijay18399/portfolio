import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ScoreBoardComponent } from './components/score-board.component';
import { SpellBeeGameComponent } from './components/spell-bee-game.component';
import { SpellBeeWordComponent } from './components/spell-bee-word.component';
import { SpellBeeRoutingModule } from './spell-bee-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHotToastConfig } from '@ngxpert/hot-toast';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from '../shared/shared.module';
import { SpellBeeComponent } from './spell-bee.component';
import { PreferenceFormDialogComponent } from './components/preference-form-dialog.component';
import { WordInputComponent } from './components/word-input.component';



@NgModule({
  declarations: [
    SpellBeeComponent,
    PreferenceFormDialogComponent,
    ScoreBoardComponent,
    SpellBeeGameComponent,
    SpellBeeWordComponent,
    WordInputComponent,
  ],

  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpellBeeRoutingModule,
    NgOtpInputModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers:[
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    provideAnimationsAsync(),
    provideHotToastConfig()
  ]
})
export class SpellBeeModule { }
