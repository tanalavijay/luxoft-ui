import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StyleManager } from './style-manager/style-manager';
import {
  InputTextModule, GalleriaModule, MenubarModule, CheckboxModule, DialogModule, MessagesModule, GrowlModule,
  PanelModule, RadioButtonModule, InputSwitchModule, SelectButtonModule, DataTableModule, DataListModule,
  SplitButtonModule, ButtonModule, DropdownModule, AccordionModule, ProgressBarModule, ConfirmDialogModule,
  TooltipModule,
  TreeModule
} from 'primeng/primeng';
import { NgxEditorModule } from 'ngx-editor';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxEditorModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    TreeModule,
    InputTextModule, GalleriaModule, MenubarModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, DropdownModule, AccordionModule,
    ProgressBarModule, ConfirmDialogModule,
    TooltipModule,    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  exports: [
    FlexLayoutModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgxEditorModule,
    InputTextModule, GalleriaModule, MenubarModule,
    CheckboxModule, DialogModule, MessagesModule, GrowlModule,
    PanelModule, RadioButtonModule, InputSwitchModule,
    SelectButtonModule, DataTableModule, DataListModule,
    SplitButtonModule, ButtonModule, ConfirmDialogModule,
    TooltipModule,FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    ],
  declarations: [],
  providers: [StyleManager,{ provide: LocationStrategy, useClass: HashLocationStrategy },]
})
export class SharedModule { }
