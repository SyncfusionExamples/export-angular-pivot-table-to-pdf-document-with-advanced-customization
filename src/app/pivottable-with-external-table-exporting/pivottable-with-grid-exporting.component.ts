import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, DisplayOption } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { GridComponent, PdfExportService as GridPdfExportService } from '@syncfusion/ej2-angular-grids';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data, grid_Ddata } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService, GridPdfExportService],
  styleUrls: ['pivottable-with-grid-exporting.component.css'],
  templateUrl: `./pivottable-with-grid-exporting.component.html`
})
export class ExternalTableExportingComponent implements OnInit {
  public grid_Data?: object[];
  public width: string;
  public dataSourceSettings: IDataOptions;
  public displayOption: DisplayOption;
  public chartSettings?: ChartSettings;
  public button: Button;
  public pivotTablePdfExport: Promise<Object>;
  public gridPdfExport: Promise<Object>;

    @ViewChild('pivotview', {static: false})
    public pivotChartObj: PivotView;

    @ViewChild('grid')
    public grid?: GridComponent;

    load() {
      this.pivotChartObj.allowEngineExport = true;
    }

    ngOnInit(): void {
        this.grid_Data = grid_Ddata;
        this.width = "100%";
        this.dataSourceSettings = {
          dataSource: pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            valueSortSettings: { headerText: 'FY 2015##Q1##Amount', headerDelimiter: '##', sortOrder: 'Descending' }
        };

        this.displayOption = { view: 'Both' } as DisplayOption;
        this.chartSettings = { title: 'Overall Product Sales Analysis', enableMultipleAxis: true, multipleAxisMode : 'Single', chartSeries: { type: 'Column' },} as ChartSettings;
        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export-btn');

        this.button.element.onclick = (): void => {
          // Here, pivot table data is exported as a PDF document and saved as an object in the pivotTablePdfExport variable.
          this.pivotTablePdfExport = this.pivotChartObj.pdfExport({}, true, undefined, false, true);
          this.pivotTablePdfExport.then((pdfData: Object) => {
            // Here the data grid is exported to the PDF document object "pdfData" which includes pivot table data and is exported as a downloadable file.
            this.grid?.pdfExport({}, false, pdfData) as any;
          });
        };
    }
}