import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Selecao} from "src/app/model/selecao";
import { SelecaoService } from "src/app/services/selecao.service";

@Component({
  selector: "app-selecao",
  templateUrl: "./selecao-list.component.html",
  styleUrls: ["./selecao-list.component.css"],
})
export class SelecaoListComponent implements OnInit {

  ELEMENT_DATA: Selecao[] = [];

  displayedColumns: string[] = ['id', 'nomeSelecao','qtdTitulos','informacoes']
  dataSource = new MatTableDataSource<Selecao>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: SelecaoService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Selecao>(resposta);
      this.dataSource.paginator = this.paginator;

    });
  }

   applyFilter(event: Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
   }
}


