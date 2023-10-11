import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PivotViewAllModule, PivotFieldListAllModule } from '@syncfusion/ej2-angular-pivotview';
import { AppComponent } from './app.component';
import { TableExportingComponent } from './exporting/exporting.component';
import { TableAndChartExportComponent } from './table-and-chart-export/table-and-chart-export.component';
import { AddHeaderAndFooterComponent } from './add-header-and-footer/add-header-and-footer.component';
import { ChangePageOrientationComponent } from './change-page-orientation/change-page-orientation.component';
import { ChangeFilenameComponent } from './change-filename/change-filename.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ChangeDocumentWidthAndHeightComponent } from './change-document-width-and-height/change-document-width-and-height.component';
import { CustomizeColumnCountComponent } from './customize-column-count/customize-column-count.component';
import { AddingCustomFontComponent } from './adding-custom-font/adding-custom-font.component';
import { MultipleExportingComponent } from './multiple-exporting/multiple-exporting.component';
import { ExportBlobDataComponent } from './export-blob-data/export-blob-data.component';
import { ExportAllPagesComponent } from './export-all-pages/export-all-pages.component';
import { ChangePageSizeComponent } from './change-page-size/change-page-size.component';
import { ChangeColumnWidthComponent } from './change-column-width/change-column-width.component';
import { ChangePivotTableStyleComponent } from './change-pivot-table-style/change-pivot-table-style.component';
import { ChangeRowHeightComponent } from './change-row-height/change-row-height.component';
import { RepeatRowHeadersComponent } from './repeat-row-headers/repeat-row-headers.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        PivotViewAllModule,
        PivotFieldListAllModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, TableExportingComponent, TableAndChartExportComponent, AddHeaderAndFooterComponent, 
        ChangePageOrientationComponent, ChangeDocumentWidthAndHeightComponent, CustomizeColumnCountComponent, 
        AddingCustomFontComponent, MultipleExportingComponent, ExportBlobDataComponent, ExportAllPagesComponent, 
        ChangePageSizeComponent, ChangeFilenameComponent, ChangeColumnWidthComponent, ChangePivotTableStyleComponent, 
        ChangeRowHeightComponent, RepeatRowHeadersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }