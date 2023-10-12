import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  templateUrl: `./add-header-and-footer.component.html`
})
export class AddHeaderAndFooterComponent implements OnInit {
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
            this.pdfExportProperties = {
                header: {
                    fromTop: 0,
                    height: 130,
                    contents: [
                        {
                            type: 'Text',
                            value: "Pivot Table",
                            position: { x: 300, y: 50 },
                            style: { textBrushColor: '#000080', fontSize: 22, dashStyle:'Solid',hAlign:'Center' }
                        }
                    ]
                },
                footer: {
                    fromBottom: 160,
                    height: 150,
                    contents: [
                        {
                            type: 'Line',
                            style: { penColor: '#000080', penSize: 1, dashStyle: 'Solid' },
                            points: { x1: 0, y1: 4, x2: 685, y2: 4 },
                        },
                        {
                            type: 'PageNumber',
                            pageNumberType: 'Arabic',
                            format: 'Page {$current} of {$total}',
                            position: { x: 0, y: 25 },
                            style: { textBrushColor: '#02007a', fontSize: 15 }
                        }
                    ]
                }
            };
            this.pivotGridObj.pdfExport(this.pdfExportProperties);
        };
    }
}
