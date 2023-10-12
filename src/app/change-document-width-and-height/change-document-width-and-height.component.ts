import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, VirtualScrollService, PDFExportService, BeforeExportEventArgs, IDataSet  } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
import { pivot_Data } from '../data';

@Component({
  selector: 'app-container',
  providers: [PDFExportService,VirtualScrollService],
  templateUrl: `./change-document-width-and-height.component.html`
})
export class ChangeDocumentWidthAndHeightComponent implements OnInit {
    public width: string;
    public dataSourceSettings: IDataOptions;
    public button: Button;

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    beforeExport(args: BeforeExportEventArgs) {
        args.width = this.pivotGridObj.element.offsetWidth;
        args.height = this.pivotGridObj.element.offsetHeight;
    }

    load() {
        this.pivotGridObj.allowEngineExport = true;
    }

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
            this.pivotGridObj.pdfExport({}, false, undefined, false);
        };
    }
}