import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, IAxisSet, BeforeExportEventArgs } from '@syncfusion/ej2-angular-pivotview';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { Button } from '@syncfusion/ej2-buttons';
import { PdfExportProperties } from '@syncfusion/ej2-grids';
import { PdfTrueTypeFont, PdfStandardFont, PdfFontFamily, PdfFontStyle } from '@syncfusion/ej2-pdf-export';
import { pivot_Data, base64AlgeriaFont } from '../data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-container',
  providers: [PDFExportService],
  templateUrl: `./adding-custom-font.component.html`
})
export class AddingCustomFontComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public gridSettings?: GridSettings;
  public button: Button;
  public pdfExportProperties: PdfExportProperties;
  public observable = new Observable();

  @ViewChild('pivotview', { static: false })
  public pivotGridObj: PivotView;

  onPdfCellRender(args: any) {
    if ((args.pivotCell as IAxisSet).axis === 'value' && (args.pivotCell as IAxisSet).isGrandSum !== true) {
      args.style = { textBrushColor: '#000000' };
    }

    // The width of the pivot table row header can be changed here.
    if (args.pivotCell && args.pivotCell.axis == 'row') {
      args.column.width = (this.pivotGridObj.gridSettings.columnWidth as number) * 0.5;
    }
    // The width of the pivot table column can be changed here.
    args.column.width = (this.pivotGridObj.gridSettings.columnWidth as number) * 0.6;
    // The height of the pivot table row can be changed here.
    args.cell.height = this.pivotGridObj.gridSettings.rowHeight;
  }

  beforeExport(args: BeforeExportEventArgs) {
    args.width = 900;
  }

  load() {
    this.pivotGridObj.allowEngineExport = true;
  }

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

    this.gridSettings = {
      pdfQueryCellInfo: this.observable.subscribe((args: any) => {
        if ((args.data as IAxisSet).axis === 'row') {
          if ((args.data as IAxisSet).type === 'grand sum') {
            args.style = { backgroundColor: '#e8e2d2' };
          } else {
            args.style = { backgroundColor: '#e8e2d2' };
          }
        } else if ((args.data as IAxisSet).axis === 'value' && (args.data as IAxisSet).isGrandSum == true) {
          args.style = { backgroundColor: '#e8e2d2' };
        }
      }) as any,
      pdfHeaderQueryCellInfo: this.observable.subscribe((args: any) => {
        if ((args.gridCell as IAxisSet).axis === 'column') {
          if ((args.gridCell as IAxisSet).type === 'grand sum') {
            args.style = { backgroundColor: '#e8f4d2' };
          } else {
            args.style = { backgroundColor: '#e8e2d2' };
          }
        }
      }) as any
    } as GridSettings;

    this.button = new Button({ isPrimary: true });
    this.button.appendTo('#export');

    this.button.element.onclick = (): void => {
      this.pdfExportProperties = {
        theme: {
          header: {
            font: new PdfStandardFont(
              PdfFontFamily.TimesRoman,
              11,
              PdfFontStyle.Bold
            ),
            fontColor: '#000080',
            bold: true,
            border: { color: '#5A5A5A', dashStyle: 'Solid' },
          },
          record: {
            font: new PdfTrueTypeFont(base64AlgeriaFont, 10),
            fontColor: '#B22222',
            bold: true,
          },
        },
        header: {
          fromTop: 0,
          height: 300,
          contents: [
            {
              type: 'Text',
              value: "Product Sales Report",
              position: { x: 300, y: 0 },
              size: { width: 100, height: 100 },
              style: { textBrushColor: '#000080', fontSize: 32, dashStyle: 'Solid', hAlign: 'Center' }
            }
          ]
        },
        footer: {
          fromBottom: 160,
          height: 150,
          contents: [
            {
              type: 'Line',
              style: { textBrushColor: '#000080', penSize: 1, dashStyle: 'Solid' },
              points: { x1: 0, y1: 4, x2: 685, y2: 4 }
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
