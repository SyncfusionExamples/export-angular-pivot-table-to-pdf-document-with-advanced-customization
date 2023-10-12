import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, PDFExportService, IDataSet, BeforeExportEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
    selector: 'app-container',
    providers: [PDFExportService],
    templateUrl: `./change-column-width-and-row-height.component.html`
})
export class ChangeTableColumnWidthAndRowHeightComponent implements OnInit {
    public width?: string;
    public dataSourceSettings?: IDataOptions;
    public button?: Button;

    @ViewChild('pivotview', { static: false })
    public pivotGridObj: PivotView;

    beforeExport(args: BeforeExportEventArgs) {
        // Here document height calculated by considering the height of the table content + column header height + top and bottom default margin.
        args.height = (document.querySelector('#PivotView_grid_content_table') as HTMLElement).offsetHeight + 60 + 60;
        args.pdfMargins = { left: 0, right: 10, top: 0, bottom: 0 };
    }

    onPdfCellRender(args: any) {
        // The width of the pivot table row header can be changed here.
        if (args.pivotCell && args.pivotCell.axis == 'row') {
            args.column.width = (this.pivotGridObj.gridSettings.columnWidth as number) * 0.5;
        }
        // The width of the pivot table column can be changed here.
        args.column.width = (this.pivotGridObj.gridSettings.columnWidth as number) * 0.6;
        // The height of the pivot table row can be changed here.
        args.cell.height = this.pivotGridObj.gridSettings.rowHeight;
    }

    load() {
        this.pivotGridObj.allowEngineExport = true;
    }

    ngOnInit(): void {

        this.dataSourceSettings = {
            dataSource: pivot_Data as IDataSet[],
            expandAll: false,
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
            this.pivotGridObj?.pdfExport({}, false, undefined, false);
        };
    }
}



