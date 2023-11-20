import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, DisplayOption } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  styleUrls: ['multiple-pivotchart-exporting.component.css'],
  templateUrl: `./multiple-pivotchart-exporting.component.html`
})
export class MultiplePivotChartExportingComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public dataSourceSettings1: IDataOptions;
  public displayOption: DisplayOption;
  public chartSettings?: ChartSettings;
  public chartSettings1?: ChartSettings;
  public button: Button;
  public firstChartPdfExport: Promise<Object>;

    @ViewChild('pivotchart', {static: false})
    public pivotChartObj: PivotView;

    @ViewChild('pivotchart1')
    public pivotChartObj1: PivotView;

    load() {
      this.pivotChartObj.allowEngineExport = true;
    }

    load1() {
      this.pivotChartObj1.allowEngineExport = true;
    }

    ngOnInit(): void {

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

        this.dataSourceSettings1 = {
          dataSource: pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            valueSortSettings: { headerText: 'FY 2015##Q1##Amount', headerDelimiter: '##', sortOrder: 'Descending' }
        };

        this.displayOption = { view: 'Chart' } as DisplayOption;
        this.chartSettings = { title: 'Overall Product Sales Analysis', enableMultipleAxis: true, multipleAxisMode : 'Single', chartSeries: { type: 'Column' },} as ChartSettings;
        this.chartSettings1 = { title: 'FY 2015 - Product Sales Analysis', chartSeries: { type: 'Pie' },} as ChartSettings;
        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export-btn');

        this.button.element.onclick = (): void => {
          // Here we export the pivot chart 1 as a PDF document and save it as an object in the variable firstChartPdfExport.
          this.firstChartPdfExport = this.pivotChartObj.chartExport('PDF', {}, true);
          this.firstChartPdfExport.then((pdfData: Object) => {
              // Here we export both pivot chart 2 to the PDF document object "pdfData" that contains the pivot chart 1 and the pivot chart 2 and is exported as a downloadable file.
              this.pivotChartObj1.chartExport('PDF', {}, false, pdfData);
          });
        };
    }
}