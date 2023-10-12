import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';
import { pivot_Data, base64AlgeriaFont } from '../data';

@Component({
  selector: 'app-container',
  templateUrl: `./adding-custom-font.component.html`
})
export class AddingCustomFontComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public button: Button;
  public pdfExportProperties: PdfExportProperties;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    ngOnInit(): void {

        this.width = "100%";

        this.dataSourceSettings = {
            dataSource: pivot_Data as IDataSet[],
            columns: [{ name: 'Year', caption: 'Production Year' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
        };

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pdfExportProperties = {
               theme: { 
                header: {font:  new PdfTrueTypeFont(base64AlgeriaFont, 11) }, 
                caption: { font: new PdfTrueTypeFont(base64AlgeriaFont, 9) }, 
                record: { font: new PdfTrueTypeFont(base64AlgeriaFont, 10) } 
                } 
            };
            this.pivotGridObj.pdfExport(this.pdfExportProperties);
        };
    }
}
