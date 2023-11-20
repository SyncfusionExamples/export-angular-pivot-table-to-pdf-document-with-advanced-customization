import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableExportingComponent } from './exporting/exporting.component';
import { ChangePageOrientationComponent } from './change-page-orientation/change-page-orientation.component';
import { ChangeFilenameComponent } from './change-filename/change-filename.component';
import { TableAndChartExportComponent } from './table-and-chart-export/table-and-chart-export.component';
import { AddHeaderAndFooterComponent } from './add-header-and-footer/add-header-and-footer.component';
import { ExportAllPagesComponent } from './export-all-pages/export-all-pages.component';
import { AddingCustomFontComponent } from './adding-custom-font/adding-custom-font.component';
import { ChangeDocumentWidthAndHeightComponent } from './change-document-width-and-height/change-document-width-and-height.component';
import { CustomizeColumnCountComponent } from './customize-column-count/customize-column-count.component';
import { ExportBlobDataComponent } from './export-blob-data/export-blob-data.component';
import { MultipleExportingComponent } from './multiple-exporting/multiple-exporting.component';
import { ChangePageSizeComponent } from './change-page-size/change-page-size.component';
import { ChangeTableColumnWidthAndRowHeightComponent } from './change-column-width-and-row-height/change-column-width-and-row-height.component';
import { ChangePivotTableStyleComponent } from './change-pivot-table-style/change-pivot-table-style.component';
import { PivotChartExportingComponent } from './pivot-chart-exporting/pivotchart-exporting.component';
import { MultiplePivotChartExportingComponent } from './multiple-pivot-chart-exporting/multiple-pivotchart-exporting.component';
import { MultipleTableChartExportingComponent } from './multiple-pivottable-pivotchart-exporting/pivottable-pivotchart-exporting.component';
import { ExternalTableExportingComponent } from './pivottable-with-external-table-exporting/pivottable-with-grid-exporting.component';

const routes: Routes = [
  {
    component:TableExportingComponent,
    path:''
  },
  {
    component:PivotChartExportingComponent,
    path:'pivotChartExporting'
  },
  {
    component:ChangeFilenameComponent,
    path:'changeFilename'
  },
  {
    component:ChangePageOrientationComponent,
    path:'changePageOrientation'
  },
  {
    component:AddHeaderAndFooterComponent,
    path:'addHeaderAndFooter'
  },
  {
    component:TableAndChartExportComponent,
    path:'tableAndChartExport'
  },
  {
    component:ExportAllPagesComponent,
    path:'exportAllPages'
  },
  {
    component:AddingCustomFontComponent,
    path:'addingCustomFont'
  },
  {
    component:ChangeDocumentWidthAndHeightComponent,
    path:'changeDocumentWidthAndHeight'
  },
  {
    component:CustomizeColumnCountComponent,
    path:'customizeColumnCount'
  },
  {
    component:ExportBlobDataComponent,
    path:'exportBlobData'
  },
  {
    component:MultipleExportingComponent,
    path:'multipleExport'
  },
  {
    component:MultiplePivotChartExportingComponent,
    path:'multiplePivotChartExport'
  },
  {
    component:MultipleTableChartExportingComponent,
    path:'multiplePivotTableAndChartExport'
  },
  {
    component:ExternalTableExportingComponent,
    path:'externalTableChartExport'
  },
  {
    component:ChangePageSizeComponent,
    path:'changePageSize'
  },
  {
    component:ChangeTableColumnWidthAndRowHeightComponent,
    path:'changeTableColumnWidthAndRowHeight'
  },
  {
    component:ChangePivotTableStyleComponent,
    path:'changePivotTableStyle'
  },
  {
    component:ExportBlobDataComponent,
    path:'blobData'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
