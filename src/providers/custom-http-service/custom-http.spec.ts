import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CustomHttpService } from './custom-http-service';

describe('CustomHttpService', () => {

    let service: CustomHttpService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CustomHttpService]
        });

        service = TestBed.get(CustomHttpService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should get the data successful', () => {
        service.getSingle(1).subscribe((data: any) => {
            expect(data.name).toBe('Luke Skywalker');
        });
    });

    it('should get the correct star wars character', () => {
        service.getSingle(1).subscribe((data: any) => {
            expect(data.name).toBe('Luke Skywalker');
        });

        const req = httpMock.expectOne(`www.espn.go.com/1`, 'what');
        expect(req.request.method).toBe('GET');

        req.flush({
            name: 'Luke Skywalker'
        });
        httpMock.verify();
    });
});