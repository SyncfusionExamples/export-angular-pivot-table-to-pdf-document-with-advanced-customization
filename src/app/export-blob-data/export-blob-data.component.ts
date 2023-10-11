import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, VirtualScrollService, ExportCompleteEventArgs, PDFExportService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [VirtualScrollService, PDFExportService],
  templateUrl: `./export-blob-data.component.html`
})
export class ExportBlobDataComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;
    public button: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    exportComplete(args: ExportCompleteEventArgs): void {
        args?.promise?.then((e: { blobData: Blob }) => {
            console.log(e.blobData);
        });
    }

    ngOnInit(): void {
        this.dataSourceSettings = {
          dataSource: pivot_Data as IDataSet[],
            expandAll: true,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            rows: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            values: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: []
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            let pdfExportProperties: PdfExportProperties = { };
            this.pivotGridObj.pdfExport(pdfExportProperties, false, undefined, true);
        };
    }
}
