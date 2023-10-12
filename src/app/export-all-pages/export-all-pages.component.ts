import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, VirtualScrollService } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';
@Component({
  selector: 'app-container',
  providers: [VirtualScrollService],
  templateUrl: `./export-all-pages.component.html`
})
export class ExportAllPagesComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public button: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    ngOnInit(): void {

        this.dataSourceSettings = {
          dataSource: pivot_Data as IDataSet[],
          columns: [{ name: 'Year', caption: 'Production Year' }],
          values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
          rows: [{ name: 'Country' }, { name: 'Products' }],
          formatSettings: [{ name: 'Amount', format: 'C0' }],
          filters: [],
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj.pdfExport();
        };
    }
}
