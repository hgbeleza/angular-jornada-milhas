import { PromocaoService } from './../../../core/services/promocao.service';
import { Component, OnInit } from '@angular/core';
import { Promocao } from 'src/app/core/types/type';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss'],
})
export class PromocoesComponent implements OnInit {
  promocoes!: Promocao[];
  constructor(private promocaoService: PromocaoService) {}

  ngOnInit() {
    this.promocaoService.listar().subscribe((res) => (this.promocoes = res));
  }
}
