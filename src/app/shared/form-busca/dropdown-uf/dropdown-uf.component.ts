import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadeFederativaService } from 'src/app/core/services/unidade-federativa.service';
import { UnidadeFederativa } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss'],
})
export class DropdownUfComponent implements OnInit {
  constructor(private ufService: UnidadeFederativaService) {}

  @Input() label: string = '';
  @Input() matPrefix: string = '';
  @Input() control!: FormControl;

  unidadesFederativas: UnidadeFederativa[] = [];

  filteredOptions!: Observable<UnidadeFederativa[]>;

  ngOnInit() {
    this.ufService.listar().subscribe((dados) => {
      this.unidadesFederativas = dados;
    });
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    )
  }

  private _filter(value: string): UnidadeFederativa[] {
    const filterValue = value?.toLowerCase();
    // const result = this.unidadesFederativas.filter((estado) =>
    //   estado.nome.toLowerCase().includes(filterValue)
    // );
    // return result;
    return this.unidadesFederativas.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
}
