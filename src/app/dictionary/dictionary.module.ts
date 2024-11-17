import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { WordHeaderComponent } from './components/word-header.component';
import { DictionaryRoutingModule } from './dictionary-routing.module';
import { DictionaryComponent } from './dictionary.component';
import { DictionaryService } from './services/dictionary.service';
import { SharedModule } from "../shared/shared.module";
import { WordDetails } from './components/word-details.component';
import { Search } from './components/search.component';

@NgModule({
  declarations: [
    DictionaryComponent,
    Search,
    WordDetails,
    WordHeaderComponent,
  ],
  imports: [
    SharedModule,
    DictionaryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    SharedModule
],
  providers: [DictionaryService],
})
export class DictionaryModule {}
