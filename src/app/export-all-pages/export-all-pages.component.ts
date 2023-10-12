import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataOptions, IDataSet, PivotView, PDFExportService, VirtualScrollService } from '@syncfusion/ej2-angular-pivotview';
import { Button } from '@syncfusion/ej2-buttons';
@Component({
  selector: 'app-container',
  providers: [PDFExportService,VirtualScrollService],
  templateUrl: `./export-all-pages.component.html`
})
export class ExportAllPagesComponent implements OnInit {
  public width: string;
  public dataSourceSettings: IDataOptions;
  public button: Button;
  public customername: string[] = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther',
  'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
public city: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia', 'Phoenix', 'San Antonio', 'Austin',
  'San Francisco', 'Columbus', 'Washington', 'Portland', 'Oklahoma', 'Las Vegas', 'Virginia', 'St. Louis', 'Birmingham'];
  data(count: number) {
    let result: Object[] = [];
    let dt: number = 0;
    for (let i: number = 1; i < count + 1; i++) {
      dt++;
      let round: string;
      let toString: string = i.toString();
      if (toString.length === 1) {
        round = "0000" + i;
      } else if (toString.length === 2) {
        round = "000" + i;
      } else if (toString.length === 3) {
        round = "00" + i;
      } else if (toString.length === 4) {
        round = "0" + i;
      } else {
        round = toString;
      }
      result.push({
        ProductID: 'PRO-' + round,
        City: this.city[Math.round(Math.random() * this.city.length)] || this.city[0],
        Year: "FY " + (dt + 2013),
        CustomerName: this.customername[Math.round(Math.random() * this.customername.length)] || this.customername[0],
        Price: Math.round(Math.random() * 5000) + 5000,
        Sold: Math.round(Math.random() * 80) + 10,
      });
      if (dt / 4 == 1) {
          dt = 0;
      }
    }
    return result;
  }

    @ViewChild('pivotview', {static: false})
    public pivotGridObj: PivotView;

    load() {
      this.pivotGridObj.allowEngineExport = true;
    }

    ngOnInit(): void {

        this.dataSourceSettings = {
          dataSource: this.data(1000) as IDataSet[],
          rows: [{ name: 'ProductID' }],
          columns: [{ name: 'Year' }],
          values: [{ name: 'Price', caption: 'Unit Price' }, { name: 'Sold', caption: 'Unit Sold' }],
          filters: [],
        };
        this.width = '100%';

        this.button = new Button({ isPrimary: true });
        this.button.appendTo('#export');

        this.button.element.onclick = (): void => {
            this.pivotGridObj.pdfExport({});
        };
    }
}
