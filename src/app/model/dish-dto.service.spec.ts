import { TestBed } from '@angular/core/testing';

import { DishDtoService } from './dish-dto.service';

describe('DishDtoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishDtoService = TestBed.get(DishDtoService);
    expect(service).toBeTruthy();
  });
});
