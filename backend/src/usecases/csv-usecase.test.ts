
import { MatchResultByA } from '../mocks/mocks';
import { csvHandlerUseCase } from './csv-usecase';




describe('csvHandlerUseCase', () => {


  it('should return values sending query "a" ', async () => {
    const result = await csvHandlerUseCase("a");

    expect(result).toEqual(MatchResultByA);
  });



  it('should return empty array by query ")@(SD" ', async () => {
    const result = await csvHandlerUseCase(")@(SD");
    expect(result).toEqual([]);
  });


});