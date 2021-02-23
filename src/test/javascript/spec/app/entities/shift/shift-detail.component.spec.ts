import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TrashBotTestModule } from '../../../test.module';
import { ShiftDetailComponent } from 'app/entities/shift/shift-detail.component';
import { Shift } from 'app/shared/model/shift.model';

describe('Component Tests', () => {
  describe('Shift Management Detail Component', () => {
    let comp: ShiftDetailComponent;
    let fixture: ComponentFixture<ShiftDetailComponent>;
    const route = ({ data: of({ shift: new Shift(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TrashBotTestModule],
        declarations: [ShiftDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ShiftDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ShiftDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load shift on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.shift).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
