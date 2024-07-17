import { TestBed } from '@angular/core/testing';

import { BudgetService } from './budget.service.service';
import { iExtres } from '../interfaces/i-extres';

describe('BudgetServiceService', () => {
  let service: BudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //TEST FUNCIÓ CALCULAR EXTRES (importació iExtres)

  it('ha de clacular extres correctament quan pàgines i llenguatges són 1', () => {
    const pressupost: iExtres = {
      quantitatPagines: 1,
      quantitatLlenguatges: 1,
    };
    const result = service.calcularExtres(pressupost);
    expect(result).toBe(0);
    expect(service.extres).toBe(0);
  });

  it('ha de clacular extres correctament amb multiples pàgines i llenguatges', () => {
    const pressupost: iExtres = {
      quantitatPagines: 3,
      quantitatLlenguatges: 2,
    };
    const result = service.calcularExtres(pressupost);
    expect(result).toBe(180); // 3 * 2 * 30 = 180
    expect(service.extres).toBe(180);
  });

  it('actualitza detallExtres correctament', () => {
    const pressupost: iExtres = {
      quantitatPagines: 2,
      quantitatLlenguatges: 3,
    };
    service.calcularExtres(pressupost);
    expect(service.detallExtres.quantitatPagines).toBe(2);
    expect(service.detallExtres.quantitatLlenguatges).toBe(3);
  });

  it('els extres han de ser 0 si pàgines o llenguatges és 0', () => {
    const pressupost1: iExtres = {
      quantitatPagines: 0,
      quantitatLlenguatges: 3,
    };
    const pressupost2: iExtres = {
      quantitatPagines: 2,
      quantitatLlenguatges: 0,
    };
    expect(service.calcularExtres(pressupost1)).toBe(0);
    expect(service.extres).toBe(0);
    expect(service.calcularExtres(pressupost2)).toBe(0);
    expect(service.extres).toBe(0);
  });
});
