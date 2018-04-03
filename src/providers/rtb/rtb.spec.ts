import { RtbProvider } from './rtb';
 
let rtb = null;
 
describe('RTB Service', () => {
 
    beforeEach(() => {
      rtb = new RtbProvider();
    });
 
    it('should return a non empty array', () => {
 
            let result = rtb.getAnswers();
 
            expect(Array.isArray(result)).toBeTruthy;
            expect(result.length).toBeGreaterThan(0);
        }
    );
 
    it('should return one random answer as a string', () => {
            expect(typeof rtb.getRandomAnswer()).toBe('string');
        }
    );
 
    it('should have both yes and no available in result set', () => {
 
            let result = rtb.getAnswers();
 
            expect(result).toContain('Yes');
            expect(result).toContain('No');
 
        }
    );
 
});