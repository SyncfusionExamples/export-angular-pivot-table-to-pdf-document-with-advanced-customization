import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, DisplayOption } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  styleUrls: ['pivottable-pivotchart-exporting.component.css'],
  templateUrl: `./pivottable-pivotchart-exporting.component.html`
})
export class MultipleTableChartExportingComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public dataSourceSettings1: IDataOptions;
  public dataSourceSettings2: IDataOptions;
  public displayOption1: DisplayOption;
  public displayOption2: DisplayOption;
  public chartSettings1?: ChartSettings;
  public chartSettings2?: ChartSettings;
  public button: Button;
  public pivotGridPdfExport: Promise<Object>;
  public pivotChartPdfExport: Promise<Object>;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    @ViewChild('pivotview1')
    public pivotChartObj: PivotView;
    
    @ViewChild('pivotview2')
    public pivotGridObj2: PivotView;

    load() {
      this.pivotGridObj.allowEngineExport = true;
    }

    load1() {
      this.pivotChartObj.allowEngineExport = true;
    }
    
    load2() {
      this.pivotGridObj2.allowEngineExport = true;
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
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
            valueSortSettings: { headerText: 'FY 2015##Q1##Amount', headerDelimiter: '##', sortOrder: 'Descending' }
        };

        this.dataSourceSettings2 = {
          dataSource: pivot_Data as IDataSet[],
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };

        this.displayOption1 = { view: 'Chart' } as DisplayOption;
        this.displayOption2 = { view: 'Both' } as DisplayOption;
        this.chartSettings1 = { title: 'Overall Product Sales Analysis', enableMultipleAxis: true, multipleAxisMode : 'Single', chartSeries: { type: 'Column' },} as ChartSettings;
        this.chartSettings2 = { title: 'FY 2015 - Product Sales Analysis', chartSeries: { type: 'Pie' },} as ChartSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export-btn');

        this.button.element.onclick = (): void => {
          // Here we export the pivot table as a PDF document and save it as an object in the variable pivotGridPdfExport.
          this.pivotGridPdfExport = this.pivotGridObj.pdfExport({}, true);
          this.pivotGridPdfExport.then((pdfData: Object) => {
            // Here we export the pivot chart to the pivot table PDF document object "pdfData" and store it as an object in the variable pivotChartPdfExport.
            this.pivotChartPdfExport = this.pivotChartObj.chartExport('PDF', {}, true, pdfData);
            // Here we export both pivot table and pivot chart view to the PDF document object "pdfData" that contains the pivot table and the pivot chart and is exported as a downloadable file.
            this.pivotChartPdfExport.then((pdfData: Object) => {
              this.pivotGridObj2.pdfExport({}, false, pdfData, false, true);
            });
          });
        };
    }
  }