import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  templateUrl: `./multiple-exporting.component.html`
})
export class MultipleExportingComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public dataSourceSettings1: IDataOptions;
  public button: Button;
  public firstGridPdfExport: Promise<Object>;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    @ViewChild('pivotview1')
    public pivotGridObj1: PivotView;

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

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.firstGridPdfExport = this.pivotGridObj.grid.pdfExport({}, true);
            this.firstGridPdfExport.then((pdfData: Object) => {
                this.pivotGridObj1.pdfExport({}, false, pdfData);
            });
        };
    }
}
