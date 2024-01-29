import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from 'src/app/core/types/type';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss'],
})
export class DepoimentosComponent implements OnInit {
  depoimentos: Depoimento[] = [];

  constructor(private depoimentoService: DepoimentoService) {}

  /**
   * Bug* o retorno está vindo triplicada!
   */
  ngOnInit(): void {
    this.depoimentoService.listar().subscribe(
      res => {
        this.depoimentos = res;
        console.log(this.depoimentos);
      }
    )
  }
}
