

import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  templateUrl: `./change-pivot-table-style.component.html`
})
export class ChangePivotTableStyleComponent implements OnInit {
  public width?: string;
  public dataSourceSettings?: IDataOptions;
  public button?: Button;
  public pdfExportProperties?: PdfExportProperties;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

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
                theme: {
                    header: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true,
                        borders: { color: '#64FA50', lineStyle: 'Thin' }
                    },
                    record: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                    },
                    caption: {
                        fontColor: '#64FA50', fontName: 'Calibri', fontSize: 17, bold: true
                    }
                }
            } as PdfExportProperties;
            this.pivotGridObj?.pdfExport(this.pdfExportProperties);
        };
    }
}



