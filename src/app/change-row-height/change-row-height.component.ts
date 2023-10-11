import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, VirtualScrollService, PDFExportService, IDataSet  } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService,VirtualScrollService],
  templateUrl: `./change-row-height.component.html`
})
export class ChangeRowHeightComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public button?: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj?: PivotView;

    onPdfCellRender(args: any) {
        if (args.pivotCell && args.pivotCell.valueSort && args.pivotCell.valueSort.levelName === 'France.Mountain Bikes') {
            args.cell.height = 30
        }
    }

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: pivot_Data as IDataSet[],
            expandAll: false,
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            filters: [],
        };

        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj?.pdfExport({},false,undefined,false,true);
        };
    }
}
