import { TestBed } from '@angular/core/testing';

import { E401Interceptor } from './e401.interceptor';

describe('E401Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      E401Interceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: E401Interceptor = TestBed.inject(E401Interceptor);
    expect(interceptor).toBeTruthy();
  });
});
