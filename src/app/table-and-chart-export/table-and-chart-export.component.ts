import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, PDFExportService, DisplayOption, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { ChartSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/chartsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  templateUrl: `./table-and-chart-export.component.html`
})
export class TableAndChartExportComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;
    public displayOption: DisplayOption;
    public chartSettings: ChartSettings;
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

        this.displayOption = { view: 'Both' } as DisplayOption;
        this.chartSettings = { chartSeries: { type: 'Column' }} as ChartSettings;

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj.pdfExport({}, false, undefined, false, true);
        };
    }
}