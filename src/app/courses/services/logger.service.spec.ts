import { LoggerService } from "./logger.service";
import { TestBed } from "@angular/core/testing";

describe('LoggerService', () => {

    let loggerService: LoggerService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ LoggerService ]
        });

        loggerService = TestBed.get(LoggerService);
    });

    it('should log message in console', () => {
        const message:string = 'Test log message';
        spyOn(console, 'log');
        loggerService.log(message);

        expect(console.log).toHaveBeenCalledWith(message);
        expect(console.log).toHaveBeenCalledTimes(1);
    });
});