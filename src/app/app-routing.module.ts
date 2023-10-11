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
import { ChangeColumnWidthComponent } from './change-column-width/change-column-width.component';
import { ChangePivotTableStyleComponent } from './change-pivot-table-style/change-pivot-table-style.component';
import { ChangeRowHeightComponent } from './change-row-height/change-row-height.component';
import { RepeatRowHeadersComponent } from './repeat-row-headers/repeat-row-headers.component';

const routes: Routes = [
  {
    component:TableExportingComponent,
    path:''
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
    component:ChangePageSizeComponent,
    path:'changePageSize'
  },
  {
    component:ChangeColumnWidthComponent,
    path:'changeColumnWidth'
  },
  {
    component:ChangePivotTableStyleComponent,
    path:'changePivotTableStyle'
  },
  {
    component:ChangeRowHeightComponent,
    path:'changeRowHeight'
  },
  {
    component:RepeatRowHeadersComponent,
    path:'repeatRowHeaders'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
